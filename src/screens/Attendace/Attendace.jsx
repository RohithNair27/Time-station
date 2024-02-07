import React, { useState } from "react";
import { Triangle } from "react-loader-spinner";
import Filter from "../../components/Filter/Filter";
import "./Attendace.css";
import Table from "../../components/Table/Table";
function Attendace() {
  const [Loading, setLoading] = useState(false);
  return (
    <div className="Attendance-container">
      <section className="Attendace-heading">
        <span>My emplyees</span>
        <p>Here is the list of employees working</p>
      </section>
      {Loading ? (
        <div className="circular-progress">
          <Triangle visible={Loading} height="100" width="90" color="#ac1111" />
        </div>
      ) : null}

      <div className="employee-details">
        <Filter />
        <Table />
      </div>
    </div>
  );
}

export default Attendace;
