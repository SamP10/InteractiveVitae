import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BackgroundPipes from '../backgroundPipes';

describe('BackgroundPipes', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <BackgroundPipes ballConfig={{}} />
    );
    expect(container).toBeInTheDocument();
  });

  // Add more tests for BackgroundPipes functionality here
});