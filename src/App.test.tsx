import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders todo list title of form', () => {
  const { getByText } = render(<App />);
  const element = getByText(/Todo List/i);
  expect(element).toBeInTheDocument();
});
