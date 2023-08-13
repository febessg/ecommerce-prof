import {act, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react';
import mock from '../Mock/mock_carrinho.json'
import { BrowserRouter } from 'react-router-dom';
import Checkout from '../Pages/Checkout';

test('Expect the sum of the checkout to be 1399.98', () => {
  render(<BrowserRouter><Checkout carrinho={mock} /></BrowserRouter>)
  const total = screen.getByText("1399.98")
  expect(total).toBeInTheDocument()
})

test('When finishing the buying process expect a alert to appear', () => {
  window.alert = jest.fn();
  render(<BrowserRouter><Checkout carrinho={mock} /></BrowserRouter>)
  const total = screen.getByText("Finalizar Compra")
  act(() => total.click())
  expect(window.alert).toBeCalledWith('Compra bem-sucedida')
})