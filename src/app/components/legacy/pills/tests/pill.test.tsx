import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pill from '../pill';

describe('Pill', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <Pill label="Test Pill" onClick={() => {}} disabled={false} ballConfig={{}} svgIcon={<svg />} />
    );
    expect(container).toBeInTheDocument();
  });

  // Add more tests for Pill functionality here
});