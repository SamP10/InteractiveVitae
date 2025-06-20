import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from '../homepage';

describe('Homepage', () => {
  it('should render without crashing', () => {
    const { container } = render(<Homepage />);
    expect(container).toBeInTheDocument();
  });

  // Add more tests for Homepage functionality here
});