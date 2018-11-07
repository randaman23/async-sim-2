import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class Dashboard extends Component {
constructor(props){
  super(props)
  this.state = {
    houses: []
  }
}

componentDidMount(){
  axios.get(`/api/properties`).then(properties => {
    console.log(properties)
    this.setState({houses: properties.data})
  })
}

  render() {
    console.log(this.state)
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

export default Dashboard