import "./navbar.css"
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <div>
        <div className="navbar">
          <Link className="Home" to="/">Home</Link>
          <Link className="Dashboard" to="/dash">Dashboard</Link>
          <Link className="Cart" to="/cart">Cart</Link>
            
        </div>
    </div>
  )
}

export default Navbar