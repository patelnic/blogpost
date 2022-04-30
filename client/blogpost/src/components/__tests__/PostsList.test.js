import { getAllByRole, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import PostsList from '../PostsList';

test('PostsList', () => {
    const postsList = [{
      _id: 1,
      title: "Test",
      images: {},
      date: "",
      description: "test"
    }, {
        _id: 2,
        title: "Test Post 2",
        images: {},
        date: "",
        description: "test post 2"
    }];
  
    render(<MemoryRouter><PostsList deleteBlogPost = {postsList} postsList = {postsList}/></MemoryRouter>);
    const posts = screen.getAllByTestId('post').map(li => li.textContent)
    const postTitles = postsList.map(t => t.title+t.description)
    expect(posts).toEqual(postTitles)

});