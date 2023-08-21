import {act, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react';
import mock from '../Mock/mock_carrinho.json'
import { BrowserRouter } from 'react-router-dom';
import Checkout from '../Pages/Checkout';

test('Checkout page should appear', () => {
  render(
    <BrowserRouter>
      <Checkout carrinho={mock}/>
    </BrowserRouter>
  );

  const checkoutElement = screen.getByText('Metodo de Pagamento');
  expect(checkoutElement).toBeInTheDocument();
})