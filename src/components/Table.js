import React, { Component } from "react";
import API from "../utils/API";
import Row from "./Row";
import Search from "./Search";
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

  sortEmployees(selection) {
    order = "descending";
    const employees = [...this.state.results];
    if(selection) {
      employees
        .sort((a, b) => {
          return a.selection > b.selection ? 1 : -1;
        })
        .map((emp) => <Row results={emp} />);
    }
    else {
      return employees.map((emp) => <Row results={emp} />)
    }
  }

  renderRow() {
    const employees = [...this.state.results];
    console.log(employees);
    return employees.map((emp) => <Row results={emp} />)
    
  }

  render() {
    return (
      <div>
        <header>
          <h1>Employee Directory</h1>
        </header>
        <Search />
        <thead>
          <tr>
            <th>#</th>
            <th>
              <span onClick={() => this.sortEmployees("name.first")}>
                First Name
              </span>
            </th>
            <th>
              <span onClick={() => this.sortEmployees("name.last")}>
                Last Name
              </span>
            </th>
            <th>
              <span onClick={() => this.sortEmployees("gender")}>
                Gender
              </span>
            </th>
            <th>
              <span onClick={() => this.sortEmployees("location.country")}>
                Country
              </span>
            </th>
            <th>
              <span onClick={() => this.sortEmployees("dob.age")}>Age</span>
            </th>
          </tr>
        </thead>
        {this.renderRow()}
      </div>
    );
  }
}

export default Table;
