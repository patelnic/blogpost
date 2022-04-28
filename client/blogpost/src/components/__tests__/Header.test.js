import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('Header name', () => {
  render(<Header name="test header component" />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});