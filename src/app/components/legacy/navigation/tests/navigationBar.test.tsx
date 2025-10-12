import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavigationBar from '../navigationBar';

describe('NavigationBar', () => {
  it('should render without crashing', () => {
    const { container } = render(<NavigationBar />);
    expect(container).toBeInTheDocument();
  });

  // Add more tests for NavigationBar functionality here
});