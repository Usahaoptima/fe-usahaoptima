import React, { useEffect, useState } from "react";
import TableProduct from "../../Fragments/Product/Table-Product";
import ReportItems from "../../Fragments/Report/Report-item.jsx";
import ReportChart from "./Report-Chart.jsx";
import TitleTable from "../../Elements/Title-Table";
import Loader from "../../Elements/Loader";
import { getData } from "../../../services/Report.js";
import ReportFilter from "../../Fragments/Report/Report-Filter.jsx";

function ReportContent() {
  const [report, setReport] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getDataTotal = async () => {
    setIsLoading(true);

    const resGetData = await getData();
    setReport(resGetData.data.totalAmountPerMonth);

    setIsLoading(false);
  };

  useEffect(() => {
    getDataTotal();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return (
    <>
      <ReportFilter />
      <ReportChart />
      <section id="produk" className="mt-4">
        <TitleTable name="Laporan Keuangan" />
        <div className="section-content">
          <table className="table table-hover mt-4 card-shadow">
            <thead>
              <tr>
                <TableProduct tableName="Bulan" />
                <TableProduct tableName="Kriteria" />
                <TableProduct tableName="Total" />
              </tr>
            </thead>
            <tbody>
              {report.slice(startIndex, endIndex).map((report, index) => {
                return <ReportItems key={index} report={report} />;
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

export default ReportContent;
