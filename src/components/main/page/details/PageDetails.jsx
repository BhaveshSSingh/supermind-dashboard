import "./pageDetails.css";
import PageIncome from "./PageIncome";

import { tableData } from "../../../../config";
import { useEffect, useState } from "react";

import DataTable from "react-data-table-component";

const PageDetails = () => {
  const [tData, setTData] = useState([]);
  useEffect(() => {
    setTData(tableData);
  }, []);

  const columns = [
    {
      name: <p className="table__header">Date and Time</p>,
      selector: (row) => row.time,
    },
    {
      name: <p className="table__header">Payment method</p>,
      selector: (row) => (
        <p className="table__payment">
          <img src={row.img} alt="logo" className="table__icon" />
          {row.name}
        </p>
      ),
    },
    {
      name: <p className="table__header"> Status</p>,
      selector: (row) => <p className="table__status">{row.pending}</p>,
    },
    {
      name: <p className="table__header">Amount($)</p>,
      selector: (row) => row.amount,
    },
  ];
  return (
    <>
      <div className="details flex">
        <DataTable columns={columns} data={tData} />
        <PageIncome />
      </div>
    </>
  );
};

export default PageDetails;
