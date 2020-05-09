import React, { Component } from "react";
import API from "../utils/API";
import Row from "./Row";
let order;

class Table extends Component {
  state = {
    search: "hello",
    results: [],
  };

  componentDidMount() {
    this.generateUsers(
      "?results=20&inc=name,email,phone,dob,picture,id,location,gender"
    );
  }
  generateUsers = (query) => {
    API.search(query)
      .then((res) => {
        this.setState({ results: res.data.results });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  };

  sortEmployees() {
    order = "descending";
  }

  renderRow() {
    const employees = [...this.state.results];
    console.log(employees);
    return employees
      .sort((a, b) => {
        return a.name.first > b.name.first ? 1 : -1;
      })
      .map((emp) => <Row results={emp} />);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Employee Directory</h1>
        </header>
        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Country</th>
          <th>Age</th>
        </tr>
      </thead>
        {this.renderRow()}
      </div>
    );
  }
}

export default Table;
