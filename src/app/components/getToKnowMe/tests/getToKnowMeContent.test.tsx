import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import GetToKnowMeContent from '../getToKnowMeContent';

describe('GetToKnowMeContent', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <GetToKnowMeContent ballConfig={{}} />
    );
    expect(container).toBeInTheDocument();
  });

  // Add more tests for GetToKnowMeContent functionality here
});