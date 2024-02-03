import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Duplicate } from "../../constants/DuplicateData";
//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    id: "0",
    Employee: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url: "https://picsum.photos/id/0/5000/3333",
    totaltimeloged: 123,
    currentStatus: 1,
  },
  {
    id: "1",
    Employee: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/LNRyGwIJr5c",
    download_url: "https://picsum.photos/id/1/5000/3333",
    totaltimeloged: 456,
    currentStatus: 0,
  },
  {
    id: "3",
    Employee: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/Dl6jeyfihLk",
    download_url: "https://picsum.photos/id/3/5000/3333",
    totaltimeloged: 101,
    currentStatus: 0,
  },
  {
    id: "7",
    Employee: "Alejandro Escamilla",
    width: 4728,
    height: 3168,
    url: "https://unsplash.com/photos/BbQLHCpVUqA",
    download_url: "https://picsum.photos/id/7/4728/3168",
    totaltimeloged: 112,
    currentStatus: 0,
  },
  {
    id: "9",
    Employee: "Alejandro Escamilla",
    width: 5000,
    height: 3269,
    url: "https://unsplash.com/photos/ABDTiLqDhJA",
    download_url: "https://picsum.photos/id/9/5000/3269",
    totaltimeloged: 678,
    currentStatus: 0,
  },
  {
    id: "11",
    Employee: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/Cm7oKel-X2Q",
    download_url: "https://picsum.photos/id/11/2500/1667",
    totaltimeloged: 234,
    currentStatus: 0,
  },

  {
    id: "12",
    Employee: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/I_9ILwtsl_k",
    download_url: "https://picsum.photos/id/12/2500/1667",
    totaltimeloged: 345,
    currentStatus: 1,
  },
  {
    id: "13",
    Employee: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/3MtiSMdnoCo",
    download_url: "https://picsum.photos/id/13/2500/1667",
    totaltimeloged: 234,
    currentStatus: 0,
  },
  {
    id: "14",
    Employee: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/IQ1kOQTJrOQ",
    download_url: "https://picsum.photos/id/14/2500/1667",
    totaltimeloged: 567,
    currentStatus: 1,
  },
  {
    id: "15",
    Employee: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/NYDo21ssGao",
    download_url: "https://picsum.photos/id/15/2500/1667",
    totaltimeloged: 456,
    currentStatus: 0,
  },
  {
    id: "16",
    Employee: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/gkT4FfgHO5o",
    download_url: "https://picsum.photos/id/16/2500/1667",
    totaltimeloged: 789,
    currentStatus: 1,
  },
  {
    id: "17",
    Employee: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/Ven2CV8IJ5A",
    download_url: "https://picsum.photos/id/17/2500/1667",
    totaltimeloged: 345,
    currentStatus: 0,
  },
];

const Table = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "Employee", //access nested data with dot notation
        header: "First Name",
        size: 250,
      },
      {
        accessorKey: "url", //access nested data with dot notation
        header: "image",
        render: (item) => (
          <img
            src={"https://unsplash.com/photos/Ven2CV8IJ5A"}
            alt=""
            border="3"
            height="100"
            width="100"
          />
        ),
      },
      {
        accessorKey: "totaltimeloged",
        header: "totaltimeloged",
        size: 250,
      },
      {
        accessorKey: "currentStatus", //normal accessorKey
        header: "Address",
        size: 200,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableTopToolbar: false,
    muiTableBodyRowProps: { hover: false },
    initialState: { pagination: { pageSize: 5, pageIndex: 1 } },
    muiPaginationProps: {
      showRowsPerPage: false,
      shape: "rounded",
    },
    paginationDisplayMode: "pages",
    muiTableProps: {
      sx: {
        border: "none",
        paddingTop: "5%",
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
        fontStyle: "italic",
        fontWeight: "normal",
        backgroundColor: "#f6f7f9",
        border: "none",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        borderBottom: "none",
      },
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Table;
