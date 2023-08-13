import React, { useEffect, useState } from 'react';
import mock from '../Mock/mock_produtos.json'
import '../Styles/Produtos.css'
import Header from '../Components/Header';

function Produtos({handleCarrinho, carrinho}) {
  const [produtos, setProdutos] = useState(mock)
  const [carrinholength, setCarrinhoLength] = useState(0)

  useEffect(() => { 
    carrinho?.length && setCarrinhoLength(carrinho.length) 
  }, [carrinho?.length])

  let filter = <input
    className='page-filter'
    data-testid='page-filter'
    placeholder='Pesquise os melhores produtos' 
    onChange={(e) => setProdutos([...mock.filter((produto) => new RegExp(e.target.value, 'i').test(produto.name))])} >
  </input>

  return (
      <> 
        <Header filter={filter} carrinholength={carrinholength}/>
        <div className='listaProdutos'>
          {
            produtos.map((e) => 
              <div key={e.id} data-testid='cardProduto' className='cardProduto' onClick={() => handleCarrinho(e)}>
                <img alt={e.name} src={e.images}></img>
                <p data-testid="product-name">{e.name}</p>
                <p>{e.price}</p>
              </div>
            )
          }
        </div>
      </>
  );
}
export default Produtos
