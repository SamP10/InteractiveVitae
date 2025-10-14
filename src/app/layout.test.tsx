import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RootLayout from './layout';

describe('RootLayout', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );
    expect(container).toBeInTheDocument();
  });

  // Add more tests for RootLayout functionality here
});