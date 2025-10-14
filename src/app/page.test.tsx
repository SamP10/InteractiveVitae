import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import StartPage from './page';

describe('StartPage', () => {
  it('should render without crashing', () => {
    const { container } = render(<StartPage />);
    expect(container).toBeInTheDocument();
  });

  // Add more tests for StartPage functionality here
});