import React from "react";
import "./Filter.css";
import { FaSearch } from "react-icons/fa";
function Filter() {
  return (
    <div className="Filter-container">
      <div className="Filter-inside-container">
        <section className="filter-radio-container">
          {/* <input type="radio" id="huey" name="drone" value="huey" checked />
          <label for="huey">In office </label>

          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">Out of office</label> */}

          <select name="cars" id="cars">
            <option value="volvo">All employee</option>
            <option value="saab">In office</option>
            <option value="mercedes">Out of office</option>
            {/* <option value="audi">Audi</option> */}
          </select>
        </section>
        <section className="Date-body">
          <label for="fname"></label>
          <input
            type="text"
            id="fname"
            name="fname"
            className="search-bar"
            placeholder="search"
          />
        </section>

        <div className="Apply-button">
          <FaSearch color="white" />
        </div>

        <div className="Apply-button">Reset</div>
      </div>
    </div>
  );
}

export default Filter;
