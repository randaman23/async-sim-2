import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Auth extends Component {
  render() {
    return (
      <div>
        <h1>Auth</h1>
        <h2>Username</h2>
        <input type="text" />
        <h2>Password</h2>
        <input type="text" />
        <Link to="/dashboard">
          <button>Login</button>
        </Link>
        <button>Register</button>
      </div>
    );
  }
}
