import "./cartitem.css";
import {useState} from 'react'

function CartItem(props) {

  
  function clickHandlerUp() {
   
}

  function clickHandlerDown() {
    console.log('Button Clicked');
}

  return (
    <div className="outer">
        <div className="box1">
            <div className="number"># {props.number}</div>
            <div className="cross">X</div>
        </div>
        
        <div className="box2">
            <div className="name">{props.name}</div>
            <div className="cost">$ {props.cost}</div>
        </div>
        
        <div className="box3">
            <div className="inner">
            <div className="num">{props.no}</div>
            <div className="button1" onClick={clickHandlerUp}>+</div>
            <div className="button2" onClick={clickHandlerDown}>-</div>
            </div>
            <button className="but">Buy Now</button>
        </div>
    </div>
  )
}

export default CartItem