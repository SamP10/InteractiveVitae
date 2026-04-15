import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReactionBar from '../ReactionBar';
import '@testing-library/jest-dom';

// Mock useReactions to control state in tests
jest.mock('../hooks/useReactions', () => ({
    useReactions: () => ({
        counts: { thumbsUp: 5, heart: 2, celebrate: 0, insightful: 1, fire: 3 },
        userReactions: { thumbsUp: false, heart: true, celebrate: false, insightful: false, fire: false },
        toggleReaction: mockToggleReaction,
        isLoaded: true
    })
}));

const mockToggleReaction = jest.fn();

describe('ReactionBar', () => {
    beforeEach(() => {
        mockToggleReaction.mockClear();
    });

    test('renders reaction buttons when loaded', () => {
        // Given / When
        render(<ReactionBar postId={1} />);

        // Then — all 5 reaction types should be present
        expect(screen.getAllByRole('button')).toHaveLength(5);
    });

    test('displays reaction counts', () => {
        // Given / When
        render(<ReactionBar postId={1} />);

        // Then
        expect(screen.getByText('5')).toBeDefined();
        expect(screen.getByText('2')).toBeDefined();
    });

    test('marks reacted button with aria-pressed=true', () => {
        // Given / When
        render(<ReactionBar postId={1} />);
        const heartButton = screen.getByLabelText(/Love/);

        // Then
        expect(heartButton).toHaveAttribute('aria-pressed', 'true');
    });

    test('calls toggleReaction when a reaction button is clicked', () => {
        // Given
        render(<ReactionBar postId={1} />);
        const thumbsUpButton = screen.getByLabelText(/Like/);

        // When
        fireEvent.click(thumbsUpButton);

        // Then
        expect(mockToggleReaction).toHaveBeenCalledWith('thumbsUp');
    });
});
