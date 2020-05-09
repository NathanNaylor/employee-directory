import React from 'react';

const Search = (props) => {
  return (
    <input
      onChange={props.handleInputChange}
      value={props.search}
      name='search'
      type='search'
      placeholder='Search'
    />
  );
};

export default Search;