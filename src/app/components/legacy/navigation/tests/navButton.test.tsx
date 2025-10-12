import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavButton from '../navButton';

describe('NavButton', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <NavButton label="Test Button" onClick={() => {}} />
    );
    expect(container).toBeInTheDocument();
  });

  // Add more tests for NavButton functionality here
});