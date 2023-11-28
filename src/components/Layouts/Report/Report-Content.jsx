import React, { useEffect, useState } from "react";
import TableProduct from "../../Fragments/Product/Table-Product";
import ReportItems from "../../Fragments/Report/Report-item.jsx";
import ReportChart from "./Report-Chart.jsx";
import TitleTable from "../../Elements/Title-Table";
import Loader from "../../Elements/Loader";
import { getData } from "../../../services/Report.js";

function ReportContent() {
  const [report, setReport] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getDataTotal = async () => {
    setIsLoading(true);

    const resGetData = await getData();
    setReport(resGetData.data.totalAmountPerMonth);

    console.log(report);
    setIsLoading(false);
  };

  useEffect(() => {
    getDataTotal();
  }, []);
  return (
    <>
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
              {report.map((report, index) => {
                return <ReportItems key={index} report={report} />;
              })}
            </tbody>
          </table>
          <Loader isShow={isLoading} />
          <ul className="pagination justify-content-end gap-3 m-3">
            <li className="page-item">
              <button className="page-link">Previous</button>
            </li>
            <li className="page-item">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default ReportContent;
