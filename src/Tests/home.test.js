import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';

test('The component should have a title', () => {
  render(<BrowserRouter><Home /></BrowserRouter>)
  const homepage = screen.getByTestId('home')
  expect(homepage).toBeInTheDocument();
})
