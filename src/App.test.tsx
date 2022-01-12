import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders go to search link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Go to Search/i);
  expect(linkElement).toBeInTheDocument();
});
