import "./login.css";

function Login() {
  return (
    <div className="lo">
        <div className="login">Login</div>
        <form action="">
            <div className="em">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email"/>
            </div>
            <div className="pass">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password"/>
            </div>
            <button className="loginb">Login</button>
        </form>
    </div>
  )
}

export default Login