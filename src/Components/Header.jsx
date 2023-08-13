import { Link } from "react-router-dom"
import '../Styles/App.css'
import React from "react"
const Header = ({carrinholength, filter, title}) => {
  return (
    <div className='header'>
      <div className="logo-placeholder">
        <div className="logo">
          shoop
        </div>
      </div>
      <div className='header-items'>
        <div>{title}</div>
        { filter }
        { carrinholength >= 0 && 
          <Link data-testid="to-cart" to="/carrinho">
          <div >
            Carrinho: <strong data-testid="cart-amount">{carrinholength}</strong>
          </div>
        </Link>
        }
      </div>
  </div>
  )
}

export default Header