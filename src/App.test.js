import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Dice link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dice/i);
  expect(linkElement).toBeInTheDocument();
});
