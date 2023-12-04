import React, { useEffect, useState } from "react";
import TableProduct from "../../Fragments/Product/Table-Product";
import ReportMonth from "../../Fragments/Report/Report-Month-Item.jsx";
import TitleTable from "../../Elements/Title-Table";
import Loader from "../../Elements/Loader";
import { getDataMonth } from "../../../services/Report.js";
import ReportFilter from "../../Fragments/Report/Report-Filter.jsx";
import ReportChartMonth from "./Report-Chart-Month.jsx";
import { useParams } from "react-router-dom";

function ReportContentMonth() {
  const [report, setReport] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { month } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getDataTotal = async () => {
    setIsLoading(true);

    const resGetData = await getDataMonth(month);
    setReport(resGetData.data.data);

    setIsLoading(false);
  };

  useEffect(() => {
    getDataTotal();
  }, [month]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return (
    <>
      <ReportFilter />
      <ReportChartMonth />
      <section id="produk" className="mt-4">
        <TitleTable name="Laporan Keuangan" />
        <div className="section-content">
          <table className="table table-hover mt-4 card-shadow">
            <thead>
              <tr>
                <TableProduct tableName="Tanggal" />
                <TableProduct tableName="Kriteria" />
                <TableProduct tableName="Total" />
              </tr>
            </thead>
            <tbody>
              {report.slice(startIndex, endIndex).map((report, index) => {
                return <ReportMonth key={index} report={report} />;
              })}
            </tbody>
          </table>
          <Loader isShow={isLoading} />

          <ul className="pagination justify-content-end gap-3 m-3">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            <li
              className={`page-item ${
                endIndex >= report.length ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default ReportContentMonth;
