import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../Styles/Carrinho.css'
import Header from "../Components/Header";
import Button from "../Components/Button";

function Carrinho({carrinho}) {
  const [valorTotal, setValorTotal] = useState(0)

  useEffect(() =>{
    let sum = 0;
    for(var i =0; i < carrinho.length; i++ ){
      sum += carrinho[i].price;
    }
    setValorTotal(sum.toFixed(2))
  }, [carrinho])

  return (
    <div data-testid="carrinho" className="carrinho">
      <Header></Header>
      <div className="carrinho-content">
        <div className='listaCarrinho'>
            {
              carrinho.map((e) => 
              <div key={e.id} data-testid="itemCarrinho" className='itemCarrinho'>
                  <img alt={e.name} src={e.images}></img>
                  <div>
                    <p>{e.name}</p>
                    <p>{e.price}</p>
                  </div>
              </div>
              )
            }
        </div>
        <div className="carrinho-checkout">
          Carrinho
          <p>Valor Total: <strong data-testid="total-carrinho">{valorTotal}</strong></p>
          <Button to="/produtos" text="Continuar Comprando"></Button>
          <Button to="/checkout" text="Checkout"></Button>
        </div>
      </div>
    </div>
   );
}
export default Carrinho