import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import WorldRouter from '../legacy/worldRouter';

describe('WorldRouter', () => {
  it('should render without crashing', () => {
    const { container } = render(<WorldRouter />);
    expect(container).toBeInTheDocument();
  });

  // Add more tests for WorldRouter functionality here
});