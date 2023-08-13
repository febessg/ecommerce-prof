import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from "../Components/Header";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

test('The component should have a title', () => {
  render(<Header title="Checkout" />)
  const input = screen.getByText('Checkout')
  expect(input).toBeInTheDocument();
})

test('Expect link to cart to appear when the carrinho length properties is set', () => {
  render(<BrowserRouter><Header title="Checkout" carrinholength={1} /></BrowserRouter>)
  const link = screen.getByTestId("to-cart")
  expect(link).toBeInTheDocument()
})

test('Not expect link to cart appear when there is no carrinho length propertie', () => {
  render(<BrowserRouter><Header title="Checkout" /></BrowserRouter>)
  const link = screen.queryAllByTestId("to-cart")
  expect(link).toHaveLength(0)
})