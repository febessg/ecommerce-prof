import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';

test('The page Home should appear', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )

  const homeElement = screen.getByTestId("home");
  expect(homeElement).toBeInTheDocument()

  const headerElement = screen.getByText("shoop");
  expect(headerElement).toBeInTheDocument();

  const productButton = screen.getByText('Nossos Produtos');
  expect(productButton).toBeInTheDocument();
})
