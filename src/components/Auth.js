import React, { Component } from "react";
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
    axios.post(`/api/auth/login`, { username, password }).then(res => {
      console.log(res.data);
      if (res.status === 404) {
        alert("Please Register, Good Person");
      } else {
        this.props.history.push(`/dashboard`);
      }
    });
  };

  handleRegister = () => {
    const { username, password } = this.state;
    axios.post(`/api/auth/register`, { username, password }).then(res => {
      this.props.history.push(`/dashboard`)
      alert('Welcome!')
    });
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <h1>Auth</h1>
        <h2>Username</h2>
        <input type="text" onChange={this.handleUsername} />
        <h2>Password</h2>
        <input type="text" onChange={this.handlePassword} />

        <button onClick={this.handleLogin}>Login</button>

        <button onClick={this.handleRegister}>Register</button>
      </div>
    );
  }
}
