import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FourWizard extends Component {
  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <h2>Step 4</h2>
        <Link to="/dashboard">
          <button>Cancel</button>
        </Link>
        <h2>Loan Amount</h2>
        <input type="text" />
        <h2>Monthly Mortgage</h2>
        <input type="text" />
        <Link to="/wizard/3">
          <button>Previous Step</button>
        </Link>
        <Link to="/wizard/5">
          <button>Next Step</button>
        </Link>
        
      </div>
    );
  }
}
