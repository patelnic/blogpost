import { render, screen } from '@testing-library/react';
import CreatePost from '../CreatePost';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/jest-dom';
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

test('Create Post', async () => {
    const post = {
        _id: 1,
        title: "Test",
        images: {},
        date: "",
        description: "test",
        email:""
      };
    render(
        <MemoryRouter>
            <Auth0Provider>
                 <CreatePost createPost={post}/>
            </Auth0Provider>
        </MemoryRouter>)
    const postTitle = screen.getByLabelText(/title/i);
    expect(postTitle).toBeInTheDocument();
    const postDescription = screen.getByLabelText(/description/i);
    expect(postDescription).toBeInTheDocument();
});