import { NextRequest, NextResponse } from 'next/server';
import { validateSession, getSessionCookieName } from '@/app/lib/auth';
import { addBlogPost, getBlogPosts } from '@/app/lib/blog-data';
import { IBlogPost } from '@/app/data/blog';

export async function GET(request: NextRequest) {
    const token = request.cookies.get(getSessionCookieName())?.value;

    if (!token || !validateSession(token)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const posts = await getBlogPosts();
        return NextResponse.json({ posts });
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    const token = request.cookies.get(getSessionCookieName())?.value;

    if (!token || !validateSession(token)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();

        // Validate required fields
        const requiredFields: (keyof Omit<IBlogPost, 'id' | 'updatedAt' | 'featured'>)[] = [
            'slug',
            'title',
            'excerpt',
            'content',
            'author',
            'publishedAt',
            'tags',
            'readTimeMinutes'
        ];

        for (const field of requiredFields) {
            if (!body[field]) {
                return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
            }
        }

        // Validate slug format
        if (!/^[a-z0-9-]+$/.test(body.slug)) {
            return NextResponse.json(
                { error: 'Slug must contain only lowercase letters, numbers, and hyphens' },
                { status: 400 }
            );
        }

        // Validate tags is an array
        if (!Array.isArray(body.tags) || body.tags.length === 0) {
            return NextResponse.json({ error: 'At least one tag is required' }, { status: 400 });
        }

        const newPost = await addBlogPost(body as Omit<IBlogPost, 'id'>);

        return NextResponse.json({ success: true, post: newPost });
    } catch (error) {
        console.error('Failed to create post:', error);
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
}
