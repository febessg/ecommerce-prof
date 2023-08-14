import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react';
import Page404 from '../Pages/404';


test('The page 404 should appear', () => {
  render(<Page404 />)
  const div = screen.getByTestId('404')
  expect(div).toBeInTheDocument();
})

test('2 + 2 does not equal 5', () => {
  expect(2 + 2).not.toBe(5);
});