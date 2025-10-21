import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import StartButton from '../startButton';

describe('StartButton', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <StartButton onClick={() => {}} label="Start" />
    );
    expect(container).toBeInTheDocument();
  });

  // Add more tests for StartButton functionality here
});