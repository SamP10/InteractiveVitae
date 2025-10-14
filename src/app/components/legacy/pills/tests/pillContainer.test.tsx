import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PillContainer from '../pillContainer';

describe('PillContainer', () => {
  const mockBallConfig = {
    onAddBodies: jest.fn(),
    width: 100,
    height: 100,
    engine: {},
  };

  it('should render without crashing', () => {
    const { container } = render(
      <PillContainer addChatComponent={() => {}} ballConfig={mockBallConfig} />
    );
    expect(container).toBeInTheDocument();
  });

  // Add more tests for PillContainer functionality here
});