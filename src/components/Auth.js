import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    axios.post(`/api/auth/login`, { username, password }).then();
  };

  render() {
    // console.log(this.state)
    return (
      <div>
        <h1>Auth</h1>
        <h2>Username</h2>
        <input type="text" onChange={this.handleUsername} />
        <h2>Password</h2>
        <input type="text" onChange={this.handlePassword} />
        <Link to="/dashboard">
          <button onClick={this.handleLogin}>Login</button>
        </Link>
        <button>Register</button>
      </div>
    );
  }
}
