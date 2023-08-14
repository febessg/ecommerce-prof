import {act, render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Produtos from '../Pages/Produtos';
import mock from '../Mock/mock_carrinho.json'


test('When filtering using the input the page should render less elements', () => {
  render(<BrowserRouter><Produtos /></BrowserRouter>)
  const filter = screen.getByTestId("page-filter")
  fireEvent.change(filter, {target: {value: 'smart'}})
  const productsAppearing = screen.getAllByTestId("cardProduto")
  expect(productsAppearing).toHaveLength(2)
})
expect(result)
test('The page should render all products', () => {
  render(<BrowserRouter><Produtos /></BrowserRouter>)
  const productsAppearing = screen.getAllByTestId("product-name")
  expect(productsAppearing).toHaveLength(9)
})

test('When passing cart items it should appear the right amount', () => {
  render(<BrowserRouter><Produtos carrinho={mock}/></BrowserRouter>)
  const productsAppearing = screen.getByTestId("cart-amount")
  expect(productsAppearing.innerHTML).toBe("2")
})

