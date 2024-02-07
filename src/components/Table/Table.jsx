import React, { useState } from "react";
import "./Table.css";
import TableRows from "../UIcomponents/TableRows/TableRows.jsx";
import ReactPaginate from "react-paginate";
import { tableData, tableHeader } from "../../constants/tableSampleData.js";

function Table() {
  const [data, setData] = useState(tableData);
  const [startPage, setStart] = useState(0);
  const elements_in_page = 4;
  const total_pages = Math.ceil(tableData.length / elements_in_page);
  const users_in_page = startPage * elements_in_page;
  const onPageChange = ({ selected }) => {
    setStart(selected);
  };
  return (
    <div className="table-container">
      <table className="table">
        <tr className="tableheader">
          {tableHeader.map((element) => {
            return <th>{element}</th>;
          })}
        </tr>
        {tableData
          .slice(users_in_page, users_in_page + elements_in_page)
          .map((element) => {
            return <TableRows data={element} />;
          })}
      </table>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={onPageChange}
        pageCount={total_pages}
        previousLabel="< previous"
        containerClassName="pagenation-button"
        previousLinkClassName="perviousButton"
        nextLinkClassName="nextButton"
        activeClassName="activePageNumber"
      />
    </div>
  );
}

export default Table;
