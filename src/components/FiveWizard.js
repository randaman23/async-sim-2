import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FiveWizard extends Component {
  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <h2>Step 5</h2>
        <Link to="/dashboard">
          <button>Cancel</button>
        </Link>
        <h2>Recommended Rent</h2>
        <h2>Desired Rent</h2>
        <input type="text" />
        <Link to="/wizard/4">
          <button>Previous Step</button>
        </Link>
        <Link to="/dashboard">
          <button>Complete</button>
        </Link>
      </div>
    );
  }
}
