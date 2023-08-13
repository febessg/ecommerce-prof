import React, { useEffect, useState } from "react";
import '../Styles/Checkout.css'
import Header from "../Components/Header";
import Button from "../Components/Button";

function Checkout({carrinho}) {
  const [valorTotal, setValorTotal] = useState(0)
  
  useEffect(() =>{
    let sum = 0;
    for(var i =0; i < carrinho.length; i++){
      sum += carrinho[i].price;
    }
    setValorTotal(sum)
  }, [])

  return (
    <div className="checkout"> 
      <Header/>
      <div className="checkout-content">
        <div className="metodo-pagamento">
          <h3>Metodo de Pagamento</h3>
          <div className="metodo">
            <input type="radio" defaultChecked id="CC" name="meioPagamento" value="Cartão de Crédito" />
            <label htmlFor="CC">Cartão de Crédito</label>
          </div>
          <div className="metodo">
            <input type="radio" id="CD" name="meioPagamento" value="Cartão de Débito" />
            <label htmlFor="CD">Cartão de Débito</label>
          </div>
          <div className="metodo">
            <input type="radio" id="Pix" name="meioPagamento" value="Pix" />
            <label htmlFor="Pix">Pix</label>
          </div>
          <div className="metodo">
            <input type="radio" id="Boleto" name="meioPagamento" value="Boleto" />
            <label htmlFor="Boleto">Boleto</label>
          </div>
        </div>
        <div className="checkout-compra">
          <p>Valor Total: <strong data-testid="total-carrinho">{valorTotal}</strong></p>
          <Button onclick={
            (e) => 
              alert("Compra bem-sucedida")
            } 
          text="Finalizar Compra"/>
        </div>
      </div>
    </div>
  );
}
export default Checkout