import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Qualifications from '../qualifications';

describe('Qualifications', () => {
  it('should render without crashing', () => {
    const { container } = render(<Qualifications />);
    expect(container).toBeInTheDocument();
  });

  // Add more tests for Qualifications functionality here
});