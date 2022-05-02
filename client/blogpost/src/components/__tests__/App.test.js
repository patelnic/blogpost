import { render, screen } from '@testing-library/react';
import App from '../../App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import { Auth0Provider } from '@auth0/auth0-react';

jest.mock('@auth0/auth0-react', () => ({
    Auth0Provider: ({ children }) => children,
    useAuth0: () => {
        return {
            isLoading: false,
            user:{},
            isAuthenticated:true,
        }
    }
})); 

test('click button shows form', async () => {
    render(
        <MemoryRouter>
            <Auth0Provider>
                <App />
            </Auth0Provider>
        </MemoryRouter>)
    const addButton = screen.getByRole("button", { name: 'Get Forecast' });
    expect(addButton).toBeInTheDocument();
});
