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
  const getDataTotal = async () => {
    setIsLoading(true);

    const resGetData = await getDataMonth(month);
    setReport(resGetData.data.data);

    console.log(report);
    setIsLoading(false);
  };

  useEffect(() => {
    getDataTotal();
  }, [month]);
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
              {report.map((report, index) => {
                return <ReportMonth key={index} report={report} />;
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

export default ReportContentMonth;
