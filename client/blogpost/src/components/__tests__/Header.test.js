import { render, screen } from '@testing-library/react';
import Header from '../Header';
import userEvent from '@testing-library/user-event';

test('Header name', () => {
  render(<Header name="test header component" />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});