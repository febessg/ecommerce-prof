import { Link } from "react-router-dom"
import '../Styles/Button.css'
const Button = ({to, text, type = "success", onclick}) => {
  return (
      <Link className="link" to={to}>
        <button onClick={onclick} className={`button ${type}`}>
            {text}
        </button>
      </Link>
  )
}
export default Button