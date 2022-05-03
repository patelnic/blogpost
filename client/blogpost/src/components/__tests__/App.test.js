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

test('Get Forecast button shows weather prediction', async () => {
    render(
        <MemoryRouter>
            <Auth0Provider>
                <App />
            </Auth0Provider>
        </MemoryRouter>)
    const getForecastButton = screen.getByRole("button", { name: 'Get Forecast' });
    expect(getForecastButton).toBeInTheDocument();
});
