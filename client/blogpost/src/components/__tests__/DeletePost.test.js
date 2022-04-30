import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import DeletePost from '../DeletePost';

test('Delete Post', () => {
    const post = {
        _id: 1,
        title: "Test",
        images: {},
        date: "",
        description: "test"
      };
    render(<MemoryRouter><DeletePost deleteBlogPost= {post}/></MemoryRouter>)
    const headingElement = screen.getByRole("heading");
    const submitButton = screen.getByRole("button", {name: "Submit"})
    expect(submitButton).toBeEnabled()
    expect(submitButton).toBeInTheDocument()
    expect(headingElement).toBeInTheDocument();
});
