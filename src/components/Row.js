import React from "react";
import Table from "react-bootstrap/Table"

function Row(props) {
  return (
    <Table striped bordered hover variant="dark">
      <tbody>
          <tr>
            <td>
              <img
                alt={props.results.name.first}
                className="img-fluid"
                src={props.results.picture.thumbnail}
              />
            </td>
            <td>{props.results.name.first}</td>
            <td>{props.results.name.last}</td>
            <td>{props.results.gender}</td>
            <td>{props.results.location.country}</td>
            <td>{props.results.dob.age}</td>
          </tr>
      </tbody>
    </Table>
  );
}

export default Row;
