import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react';
import Carrinho from '../Pages/Carrinho';
import mock from '../Mock/mock_carrinho.json'
import { BrowserRouter } from 'react-router-dom';

test('Carrinho page should appear', () => {
  render(
    <BrowserRouter>
      <Carrinho carrinho={mock}/>
    </BrowserRouter>
  );

  const cartElement = screen.getByText('Carrinho');
  expect(cartElement).toBeInTheDocument();
})