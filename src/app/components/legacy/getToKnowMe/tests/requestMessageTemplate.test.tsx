import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RequestMessageTemplate from '../requestMessageTemplate';

describe('RequestMessageTemplate', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <RequestMessageTemplate text="Test Message" />
    );
    expect(container).toBeInTheDocument();
  });

  // Add more tests for RequestMessageTemplate functionality here
});