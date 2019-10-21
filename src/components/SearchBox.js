import React, { useState } from "react";

const inputStyles = {
  fontSize: "1.2rem"
};

const iconStyles = {
  top: 0,
  right: 16,
  fontSize: "1.5rem",
  cursor: "pointer"
};

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const runSearch = () => {
    if (!searchTerm) {
      console.log("Searching All...");
      return;
    }

    console.log(`Running search query...Searching for ${searchTerm}`);
  };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    runSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group row flex justify-content-center">
        <div className="col-4">
          <input
            value={searchTerm}
            onChange={handleChange}
            style={inputStyles}
            className="form-control rounded-pill"
            placeholder="Search by name"
          />
          <i
            onClick={runSearch}
            style={iconStyles}
            className="fas fa-search rounded-pill position-absolute  p-2"
          ></i>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
