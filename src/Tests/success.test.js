import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import SuccessPage from '../Pages/Success';

test('The page Success should appear', () => {
    render(<SuccessPage/>)
    const div = screen.getByText('Compra finalizada com sucesso')
    expect(div).toBeInTheDocument()
});
