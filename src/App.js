import './Styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Page404 from './Pages/404';
import Carrinho from './Pages/Carrinho';
import Checkout from './Pages/Checkout';
import Produtos from './Pages/Produtos';
import { useState } from 'react';


function App() {
  let [carrinho, setCarrinho] = useState([])
  const handleCarrinho = (produto) => {
    setCarrinho([...carrinho, produto])
  }

  return (
        <Routes>
          <Route exact path="/produtos" 
            element={
              <Produtos carrinho={carrinho} handleCarrinho={handleCarrinho}/>
            }
          />
          <Route exact path="/carrinho" 
          element={
              <Carrinho carrinho={carrinho} handleCarrinho={handleCarrinho}/>
            }
          />
          <Route exact path="/checkout" element={
              <Checkout carrinho={carrinho} />
            } 
          />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
  );
}

export default App;
