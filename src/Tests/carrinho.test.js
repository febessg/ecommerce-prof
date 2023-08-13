import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react';
import Carrinho from '../Pages/Carrinho';
import mock from '../Mock/mock_carrinho.json'
import { BrowserRouter } from 'react-router-dom';

test('Expect to have two cart items appearing in the list', () => {
  render(<BrowserRouter><Carrinho carrinho={mock} /></BrowserRouter>)
  const itens = screen.queryAllByTestId("itemCarrinho")
  expect(itens).toHaveLength(2)
})

test('Expect the cart total to be 1399.98', () => {
  render(<BrowserRouter><Carrinho carrinho={mock} /></BrowserRouter>)
  const total = screen.getByText("1399.98")
  expect(total).toBeInTheDocument()
})