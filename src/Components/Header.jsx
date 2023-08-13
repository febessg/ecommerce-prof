import { Link } from "react-router-dom"
import '../Styles/App.css'
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
          <Link to="/carrinho">
          <div>
            Carrinho: {carrinholength}
          </div>
        </Link>
        }
      </div>
  </div>
  )
}

export default Header