import React, { Component } from "react";
// import { Link } from "react-router-dom";

export default class Header extends Component{
  render() {
    return (
      <div>
        <h1>Houser Dashboard</h1>
        {/* <Link to="/"> */}
          <button>Logout</button>
        {/* </Link> */}
      </div>
    );
  }
}
