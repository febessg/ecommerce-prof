import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from "../Components/Header";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

test('the component header should appear', () => {
  render(
    <BrowserRouter>
      <Header title="Título" carrinholength={3} filter={<div>Filter Component</div>}/>
    </BrowserRouter>
  )

  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
})

test('does not render the cart lenght when negative', () => {
  render(
    <BrowserRouter>
      <Header title="Título" carrinholength={-1} filter={<div>Filter Component</div>}/>
    </BrowserRouter>
  )

  const cartLink = screen.queryByText('Carrinho:');
  expect(cartLink).not.toBeInTheDocument();
})