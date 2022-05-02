import { render, screen } from '@testing-library/react';
import LogoutButton from '../LogoutButton';

test('Logout Button', () => {
    render(<LogoutButton />);
    const logoutButton = screen.getByRole("button",{name:"Logout"})
    expect(logoutButton).toBeEnabled();
    expect(logoutButton).toBeInTheDocument();
  });
  