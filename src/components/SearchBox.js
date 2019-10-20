import React from "react";

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
  return (
    <form className="">
      <div className="form-group row flex justify-content-center">
        <div className="col-4">
          <input
            style={inputStyles}
            className="form-control rounded-pill"
            placeholder="Search by name"
          />
          <i
            style={iconStyles}
            className="fas fa-search rounded-pill position-absolute  p-2"
          ></i>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
