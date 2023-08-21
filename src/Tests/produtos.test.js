import {act, render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Produtos from '../Pages/Produtos';
import mock from '../Mock/mock_carrinho.json';

test('the products page should appear', () => {
  render(
      <BrowserRouter>
        <Produtos handleCarrinho={() => {}} carrinho={mock}/>
      </BrowserRouter>
    )

      const productsElement = screen.getByText('Nossos Produtos');
      expect(productsElement).toBeInTheDocument();
  });

test('calls handleCarrinho when pressing Enter', () => {
  const mockHandleCarrinho = jest.fn();
  render(
    <BrowserRouter>
      <Produtos handleCarrinho={mockHandleCarrinho} carrinho={mock}/>
    </BrowserRouter>
  );
  const products = screen.getAllByTestId("products")
  fireEvent.click(products[0])
  fireEvent.keyDown(products[0], {key: 'Enter', code: 'Enter', keyCode: 13});
  expect(mockHandleCarrinho).toHaveBeenCalled();
})

test('updates products list after search', () => {
  render(
    <BrowserRouter>
      <Produtos handleCarrinho={() => {}} carrinho={mock}/>
    </BrowserRouter>
  );

  const filterInput = screen.getByLabelText(/barra de pesquisa/i);

  fireEvent.change(filterInput, { target: { value: "Smartphone X" } });
  
  const productsList = screen.getByTestId('products-list');
  const productsItems = productsList.querySelectorAll('.cardProduto')
  expect(productsItems.length).toBeGreaterThan(0);
});