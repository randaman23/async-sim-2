import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="/wizard/1">
          <button>Add New property</button>
        </Link>
        <input type="text" />
        <button>Filter</button>
        <button>Reset</button>
      </div>
    );
  }
}
