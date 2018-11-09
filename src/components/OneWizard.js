import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class OneWizard extends Component {
  handleName() {}

  handleDescription() {}

  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <h2>Step 1</h2>
        <Link to="/dashboard">
          <button>Cancel</button>
        </Link>
        <h2>Property Name</h2>
        <input onChange={this.handleName} type="text" />
        <h2>Property Description</h2>
        <input onChange={this.handleDescription} type="text" />
        <Link to="/wizard/2">
          <button>Next Step</button>
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { properties: state.properties };
}

export default connect(
  mapStateToProps,
  {}
)(OneWizard);
