import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResponseMessageTemplate from '../responseMessageTemplate';

describe('ResponseMessageTemplate', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <ResponseMessageTemplate text="Test Response" />
    );
    expect(container).toBeInTheDocument();
  });

  // Add more tests for ResponseMessageTemplate functionality here
});