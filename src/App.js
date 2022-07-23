import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Cart from './components/cart/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Login/>}></Route>
      <Route exact path="/dash" element={<Dashboard/>}></Route>
      <Route exact path="/cart" element={<Cart/>}></Route>
      {/* <Login/> */}
      {/* <Dashboard/> */}
      {/* <Cart/> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
