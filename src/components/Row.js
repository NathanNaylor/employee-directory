import React from "react";
import Table from "react-bootstrap/Table"

function Row(props) {
  return (
    <Table striped bordered hover variant="dark">
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
      <tbody>
        {props.results.map((result) => (
          <tr>
            <td>
              <img
                alt={result.name.first}
                className="img-fluid"
                src={result.picture.thumbnail}
              />
            </td>
            <td>{result.name.first}</td>
            <td>{result.name.last}</td>
            <td>{result.gender}</td>
            <td>{result.location.country}</td>
            <td>{result.dob.age}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Row;
