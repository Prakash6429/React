import CartItem from "../cartitem/CartItem";
import "./cart.css";

function Cart() {
  return (
    <div>
        <div className="title">Shopping Cart</div>
        <div className="cartbody">
            <CartItem number="1" name="iPhone" cost="100" no="0"/>
            <CartItem number="2" name="iPad" cost="200" no="0"/>
            <CartItem number="3" name="Washing Machine" cost="300" no="0"/>
            <CartItem number="4" name="TV" cost="500" no="0"/>
            <CartItem number="5" name="Cooler" cost="400" no="0"/>
            <CartItem number="6" name="AC" cost="500" no="0"/>
            <CartItem number="7" name="Power Bank" cost="100" no="0"/>
            <CartItem number="8" name="Table" cost="50" no="0"/>
            <CartItem number="9" name="Chair" cost="10" no="0"/>
        </div>
    </div>
  )
}

export default Cart