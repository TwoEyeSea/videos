import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={submitForm} className="ui form">
        <div className="field">
          <label>Search for a Video!</label>
          <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
