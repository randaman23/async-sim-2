import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios.get(`/api/properties`).then(properties => {
      console.log(properties);
      this.setState({ houses: properties.data });
    });
  }

  render() {
    console.log(this.state);
    let properties = this.state.houses.map((e, i) => {
      return (
        <div key={i} value={e}>
          {e.image}
          <br />
          {e.property_name}
          <br />
          {e.description}
          <br />
          {e.loan_amount}
          <br />
          {e.monthly_mortgage}
          <br />
          {e.desired_rent}
          <br />
          {e.address}
          <br />
          {e.city}
          <br />
          {e.state}
          <br />
          {e.zip}
          <hr/>
        </div>
      );
    });
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="/wizard/1">
          <button>Add New property</button>
        </Link>
        <input type="text" />
        <button>Filter</button>
        <button>Reset</button>
        {properties}
      </div>
    );
  }
}

export default Dashboard;
