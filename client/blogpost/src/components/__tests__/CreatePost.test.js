import { render, screen } from '@testing-library/react';
import CreatePost from '../CreatePost';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/jest-dom';

test('Create Post', async () => {
    const post = {
        _id: 1,
        title: "Test",
        images: {},
        date: "",
        description: "test",
        user: ""
      };
    render(
        <MemoryRouter>
            <CreatePost createPost = {post} />
        </MemoryRouter>)
    const postTitle = screen.getByLabelText(/title/i);
    expect(postTitle).toBeInTheDocument();
    const postDescription = screen.getByLabelText(/description/i);
    expect(postDescription).toBeInTheDocument();
    const user = userEvent.setup();

    await user.type(postTitle, "Test");
    expect(postTitle.value).toBe("Test");
    await user.type(postDescription, "Test");
    expect(postDescription.value).toBe("Test");
    
    //await user.type(postTitle, 'Project');
    //expect(postTitle.value).toBe('Project');
});