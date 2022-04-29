import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import UpdatePost from '../UpdatePost';


test('Update Post', () => {
    const post = {
        _id: 1,
        title: "Test",
        images: {},
        date: "",
        description: "test"
      };
    render(<MemoryRouter><UpdatePost updatePost= {post}/></MemoryRouter>)
    const postTitle = screen.getByLabelText(/title/i)
    expect(postTitle).toBeInTheDocument()
    const postDescription = screen.getByLabelText(/description/i)
    expect(postDescription).toBeInTheDocument()
    
});