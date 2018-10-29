import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class OneWizard extends Component {
  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <h2>Step 1</h2>
        <Link to="/dashboard">
          <button>Cancel</button>
        </Link>
        <input type="text" />
        <input type="text" />
        <Link to="/wizard/2">
          <button>Next Step</button>
        </Link>
      </div>
    );
  }
}
