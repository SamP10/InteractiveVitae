import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PillBall from '../pillBall';

describe('PillBall', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <PillBall ballConfig={{}} />
    );
    expect(container).toBeInTheDocument();
  });

  // Add more tests for PillBall functionality here
});