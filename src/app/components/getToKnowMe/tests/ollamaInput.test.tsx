import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import OllamaInput from '../ollamaInput';

describe('OllamaInput', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <OllamaInput addChatComponent={() => {}} ballConfig={{}} />
    );
    expect(container).toBeInTheDocument();
  });

  // Add more tests for OllamaInput functionality here
});