/**
 * @jest-environment node
 */
import { GET as getBlogHandler, POST as createBlogHandler } from '../blog/route';
import { NextRequest } from 'next/server';

jest.mock('@/app/lib/auth', () => ({
    validateSession: jest.fn(),
    getSessionCookieName: jest.fn(() => 'admin_session')
}));

jest.mock('@/app/lib/blog-data', () => ({
    getBlogPosts: jest.fn(),
    addBlogPost: jest.fn()
}));

import { validateSession, getSessionCookieName } from '@/app/lib/auth';
import { getBlogPosts, addBlogPost } from '@/app/lib/blog-data';

function makeRequest(body?: unknown, cookies: Record<string, string> = {}, method = 'GET'): NextRequest {
    const cookieHeader = Object.entries(cookies)
        .map(([k, v]) => `${k}=${v}`)
        .join('; ');
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (cookieHeader) headers['Cookie'] = cookieHeader;
    const req = new NextRequest('http://localhost/api/blog', {
        method,
        headers,
        ...(body ? { body: JSON.stringify(body) } : {})
    });
    return req;
}

const validPostBody = {
    slug: 'test-post',
    title: 'Test Post',
    excerpt: 'An excerpt',
    content: 'Full content',
    author: 'Sam',
    publishedAt: '2024-01-01',
    tags: [{ id: 1, name: 'TypeScript', slug: 'typescript', color: '#3178C6' }],
    readTimeMinutes: 3
};

describe('GET /api/blog', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        (getSessionCookieName as jest.Mock).mockReturnValue('admin_session');
    });

    test('returns 401 when no session token present', async () => {
        // Given — no cookie provided, validateSession will not be called

        // When
        const response = await getBlogHandler(makeRequest());
        const body = await response.json();

        // Then
        expect(response.status).toBe(401);
        expect(body.error).toBe('Unauthorized');
    });

    test('returns list of posts for authenticated request', async () => {
        // Given
        (validateSession as jest.Mock).mockReturnValueOnce(true);
        (getBlogPosts as jest.Mock).mockResolvedValueOnce([{ id: 1, title: 'Post One' }]);

        // When
        const response = await getBlogHandler(makeRequest(undefined, { admin_session: 'valid' }));
        const body = await response.json();

        // Then
        expect(response.status).toBe(200);
        expect(body.posts).toHaveLength(1);
        expect(body.posts[0].title).toBe('Post One');
    });
});

describe('POST /api/blog', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        (getSessionCookieName as jest.Mock).mockReturnValue('admin_session');
    });

    test('returns 401 for unauthenticated requests', async () => {
        // Given — no cookie provided

        // When
        const response = await createBlogHandler(makeRequest(validPostBody, {}, 'POST'));

        // Then
        expect(response.status).toBe(401);
    });

    test('creates and returns the new post for authenticated requests', async () => {
        // Given
        (validateSession as jest.Mock).mockReturnValueOnce(true);
        const createdPost = { ...validPostBody, id: 42 };
        (addBlogPost as jest.Mock).mockResolvedValueOnce(createdPost);

        // When
        const response = await createBlogHandler(
            makeRequest(validPostBody, { admin_session: 'valid' }, 'POST')
        );
        const body = await response.json();

        // Then
        expect(response.status).toBe(200);
        expect(body.success).toBe(true);
        expect(body.post.id).toBe(42);
    });

    test('returns 400 when a required field is missing', async () => {
        // Given
        (validateSession as jest.Mock).mockReturnValueOnce(true);
        const { title: _omit, ...bodyWithoutTitle } = validPostBody;

        // When
        const response = await createBlogHandler(
            makeRequest(bodyWithoutTitle, { admin_session: 'valid' }, 'POST')
        );
        const body = await response.json();

        // Then
        expect(response.status).toBe(400);
        expect(body.error).toContain('title');
    });

    test('returns 400 when slug has invalid characters', async () => {
        // Given
        (validateSession as jest.Mock).mockReturnValueOnce(true);
        const badSlugBody = { ...validPostBody, slug: 'Invalid Slug!' };

        // When
        const response = await createBlogHandler(
            makeRequest(badSlugBody, { admin_session: 'valid' }, 'POST')
        );
        const body = await response.json();

        // Then
        expect(response.status).toBe(400);
        expect(body.error).toContain('Slug');
    });

    test('returns 400 when tags array is empty', async () => {
        // Given
        (validateSession as jest.Mock).mockReturnValueOnce(true);
        const emptyTagsBody = { ...validPostBody, tags: [] };

        // When
        const response = await createBlogHandler(
            makeRequest(emptyTagsBody, { admin_session: 'valid' }, 'POST')
        );
        const body = await response.json();

        // Then
        expect(response.status).toBe(400);
        expect(body.error).toContain('tag');
    });
});
