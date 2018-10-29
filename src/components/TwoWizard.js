import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TwoWizard extends Component {
  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <h2>Step 2</h2>
        <Link to="/dashboard">
          <button>Cancel</button>
        </Link>
        <h2>Address</h2>
        <input type="text" />
        <h2>City</h2>
        <input type="text" />
        <h2>State</h2>
        <input type="text" />
        <h2>Zip</h2>
        <input type="text" />
        <Link to="/wizard/1">
          <button>Previous Step</button>
        </Link>
        <Link to="/wizard/3">
          <button>Next Step</button>
        </Link>
      </div>
    );
  }
}
