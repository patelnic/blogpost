import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import Post from '../Post';

test('Post', () => {
    const post = {
      _id: 1,
      title: "Test",
      images: {},
      date: "",
      description: "test"
    };
  

    render(<MemoryRouter><Post key = {post._id} post = {post} deleteBlogPost= {post}/></MemoryRouter>);
    const postTitle = screen.getByRole("Link")
  });