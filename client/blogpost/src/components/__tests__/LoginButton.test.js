import { render, screen } from '@testing-library/react';
import LoginButton from '../LoginButton';

test('Login Button', () => {
    render(<LoginButton />);
    const loginButton = screen.getByRole("button",{name:"Login"})
    expect(loginButton).toBeEnabled();
    expect(loginButton).toBeInTheDocument();
  });
  