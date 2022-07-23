import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dash">
        <div className="box" id="cart">
          <span className="up">Cart</span>
          <span className="down">7</span>
        </div>
        <div className="box" id="wish">
          <span className="up">Wish List</span>
          <span className="down">4</span>
        </div>
        <div className="box" id="balance">
        <span className="up">Wallet Balance</span>
        <span className="down">$ 289</span>
        </div>
        <div className="box" id="total">
        <span className="up">Total Orders</span>
        <span className="down">56</span>
        </div>
    </div>
  )
}

export default Dashboard