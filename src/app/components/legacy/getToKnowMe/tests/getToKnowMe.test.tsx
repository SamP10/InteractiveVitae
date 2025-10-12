import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import GetToKnowMe from '../getToKnowMe';

describe('GetToKnowMe', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <GetToKnowMe ballConfig={{}} />
    );
    expect(container).toBeInTheDocument();
  });

  // Add more tests for GetToKnowMe functionality here
});