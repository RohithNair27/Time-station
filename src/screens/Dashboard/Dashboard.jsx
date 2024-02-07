import React from "react";
import "./Dashboard.css";
import BarGraphs from "../../components/BarGraphs/BarGraphs";
import Table from "../../components/Table/Table";
function Dashboard() {
  return (
    <>
      <div className="Dashboard-container">
        <span>Rohith K</span>
        <section className="barGrap-body">
          <BarGraphs />
          <div>
            <table>
              <tr className="table-header">
                <th>checked</th>
                <th>to be clocked</th>
                <th>Today's status</th>
              </tr>
              <tr className="table-body">
                <td>9:30</td>
                <td>18:30</td>
                <td className="table-ideal">In office</td>
              </tr>
            </table>
            <table>
              <tr className="table-header">
                <th>Status</th>
                <th>Required hours per day</th>
              </tr>
              <tr>
                <td className="table-ideal">Ideal</td>
                <td>under 9hrs</td>
              </tr>
              <tr>
                <td className="table-manageble">Managable</td>
                <td>10 to 11hrs</td>
              </tr>
              <tr>
                <td className="table-not-ideal">Not Ideal</td>
                <td>above 11hrs</td>
              </tr>
            </table>
          </div>
        </section>
        <Table />
      </div>
    </>
  );
}

export default Dashboard;
