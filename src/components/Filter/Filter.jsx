import React from "react";
import "./Filter.css";
function Filter() {
  return (
    <div className="Filter-container">
      <div className="Filter-inside-container">
        <section className="radiobutton-container">
          <span>View By</span>
          <section>
            <input type="radio" id="huey" name="drone" value="huey" checked />
            <label for="huey">In office </label>
            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label for="dewey">Out of office</label>
          </section>
        </section>

        <section className="Date-body">
          <span>Start Date</span>
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2018-01-01"
            max="2018-12-31"
          />
        </section>
        <section className="Date-body">
          <span>End Date</span>
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2018-01-01"
            max="2018-12-31"
          />
        </section>

        <div className="Apply-button">Apply</div>
      </div>
    </div>
  );
}

export default Filter;
