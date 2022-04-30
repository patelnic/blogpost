import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import BlogDetails from '../BlogDetails';

test('Blog Details', () => {
    render(<MemoryRouter><BlogDetails/></MemoryRouter>)
    const headingElement = screen.getByRole("heading");
    const imgElement = screen.getByRole("img");
    expect(headingElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
});
