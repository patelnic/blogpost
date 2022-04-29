import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import NavigationWithBootstap from '../NavigationWithBootstap';

test('Navigation links', () => {
    render(
        <MemoryRouter>
            <NavigationWithBootstap />
        </MemoryRouter>);
      const linkElements = screen.getAllByRole("link");
      expect(linkElements.length).toBe(3);
});