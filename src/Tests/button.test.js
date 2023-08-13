import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react';
import Button from '../Components/Button';
import { BrowserRouter } from 'react-router-dom';

test('The component should have a title', () => {
  render(<BrowserRouter><Button text="Continuar comprando" /></BrowserRouter> )
  const input = screen.getByText('Continuar comprando')
  expect(input).toBeInTheDocument();
})
