import React from 'react';
import { connect } from "react-redux";
import { updateQuery } from "../actions/actions";

const SearchBar = (props) => {

  function onSearch(e) {
    props.updateQuery(e.target.value);
  }
  

  return (
    <div className="search-bar">
      {/* <span className="search-span">
        <i className="fas fa-search"></i>
      </span> */
      <br />}
      <input
        className="search-input"
        type="text"
        class="form-control" 
        value={props.currentQuery}
        onChange={onSearch}
        placeholder="Search P&G Products..."
        name="search"
        aria-label="Search"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products,
    currentQuery: state.currentQuery
  };
};

export default connect(mapStateToProps, { updateQuery })(SearchBar);
