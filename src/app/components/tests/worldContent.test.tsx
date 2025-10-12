import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import WorldContent from '../legacy/worldContent';

describe('WorldContent', () => {
  it('should render without crashing', () => {
    const { container } = render(<WorldContent />);
    expect(container).toBeInTheDocument();
  });

  // Add more tests for WorldContent functionality here
});