import { Link } from "react-router-dom";
import Header from "../Components/Header";
import '../Styles/Home.css'
import React from "react";

function Home() {
  return (
    <div data-testid="home" className="home"> 
      <Header></Header>
      <div className="home-content">
        <div className="home-divider">
          <Link to="/produtos">
            <button className="home-button">
              Nossos Produtos
            </button>
          </Link>
        </div>
        <div>
          <div>
            <p>Seja bem vindo</p>
            <p>Dê uma olhada em nosso estoque</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home