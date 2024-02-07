import React from "react";
import "./TableRows.css";
import { GoDotFill } from "react-icons/go";
function TableRows({ data }) {
  return (
    <tr className="row-container">
      {console.log(data)}
      <td>
        <img src={data.image} className="user-image-table" />
      </td>
      <td>{data.name}</td>

      <td>{data.login}</td>
      <td>{data.logout}</td>
      <td>
        {data.status === 1 ? (
          <>
            In office
            <GoDotFill color="green" className="online-offline-dot" />
          </>
        ) : (
          <>
            out of office
            <GoDotFill color="red" className="online-offline-dot" />
          </>
        )}
      </td>
      <td>{data.time}</td>
    </tr>
  );
}

export default TableRows;
