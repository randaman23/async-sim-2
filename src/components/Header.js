import React, { Component } from "react";
import axios from 'axios'
// import { Link } from "react-router-dom";

export default class Header extends Component{

  handleLogout = () => {
    axios.get(`/api/auth/logout`).then(res => {
      console.log(res.data)
      this.props.history.push(`/`)
    })
  }

  render() {
    return (
      <div>
        <h1>Houser Dashboard</h1>
        {/* <Link to="/"> */}
          <button onClick={this.handleLogout}>Logout</button>
        {/* </Link> */}
      </div>
    );
  }
}
