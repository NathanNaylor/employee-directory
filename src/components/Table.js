import React, { Component } from "react";
import API from "../utils/API";
import Row from "./Row";

class Table extends Component {
  state = {
    search: "hello",
    results: [],
  };

  componentDidMount() {
    this.generateUsers("?results=20");
  }
  generateUsers = (query) => {
    API.search(query)
      .then((res) => {
        this.setState({ results: res.data.results });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Row results={this.state.results} />
      </div>
    );
  }
}

export default Table;
