import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ThreeWizard extends Component {
  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <h2>Step 3</h2>
        <Link to="/dashboard">
          <button>Cancel</button>
        </Link>
        <img src="" alt=""/>
        <h2>Image URL</h2>
        <input type="text"/>
        <Link to="/wizard/2">
          <button>Previous Step</button>
        </Link>
        <Link to="/wizard/4">
          <button>Next Step</button>
        </Link>
      </div>
    );
  }
}
