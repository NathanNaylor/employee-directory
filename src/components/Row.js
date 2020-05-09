import React from "react";

function Row(props) {
  return (
    <div>
      <ul>
        {props.results.map((result) => (
          <li className="list-group-item" key={result.cell}>
            <img
              alt={result.name.first}
              className="img-fluid"
              src={result.picture.thumbnail}
            />
          </li>
        ))}
      </ul>
      <ul>
        {props.results.map((result) => (
          <li className="list-group-item" key={result.cell}>
            {result.name.first} {result.name.last}
          </li>
        ))}
      </ul>

      <ul>
        {props.results.map((result) => (
          <li className="list-group-item" key={result.cell}>
            {result.gender}
          </li>
        ))}
      </ul>

      <ul>
        {props.results.map((result) => (
          <li className="list-group-item" key={result.cell}>
            {result.location.country}
          </li>
        ))}
      </ul>
      <ul>
        {props.results.map((result) => (
          <li className="list-group-item" key={result.cell}>
            {result.dob.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Row;
