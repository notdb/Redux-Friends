import React from "react";

function Login() {
  return (
    <div className="Login">
      <p>login goes here</p>
      <form>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
