import React, { useState, useEffect } from "react";
import ChartMonth from "../../Elements/Chart-Month";
import { getTotalMonth } from "../../../services/Report";
import TitleTable from "../../Elements/Title-Table";
import { useParams } from "react-router-dom";

const ReportChartMonth = () => {
  const [totalPengeluaran, setTotalPengeluaran] = useState("");
  const [totalPemasukan, setTotalPemasukan] = useState("");
  const { month } = useParams();
  const apiUrlSales = `https://usahaoptima-api.sengked.com/api/v1/report/total-sales/${month}`;
  const apiUrlExpense = `https://usahaoptima-api.sengked.com/api/v1/report/total-expense/${month}`;

  const formatCurrency = (value) => {
    if (!value) return "belum ada data";

    // Menggunakan Number.toLocaleString untuk memformat nilai menjadi format rupiah
    return new Number(value).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    });
  };

  const getDataTotal = async () => {
    const resTotalPemasukan = await getTotalMonth("pemasukan", month);
    const resTotalPengeluaran = await getTotalMonth("pengeluaran", month);
    setTotalPemasukan(resTotalPemasukan.data.totalExpense);
    setTotalPengeluaran(resTotalPengeluaran.data.totalExpense);
  };

  useEffect(() => {
    getDataTotal();
  }, []);

  return (
    <>
      <div>
        <TitleTable name="Data Bulanan" />
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-sm-6 mb-4">
              <div className="card text-center card-shadow">
                <div className="card-header py-3 d-flex justify-content-start color-blue">
                  Data Pemasukan Uang
                </div>
                <div className="card-body p-0">
                  <ChartMonth apiUrl={apiUrlSales} />
                </div>
                <div className="card-footer text-body-secondary d-flex justify-content-start color-blue">
                  Total Pemasukan :
                  {!totalPemasukan
                    ? "belum ada data"
                    : formatCurrency(totalPemasukan)}
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 mb-4">
              <div className="card text-center card-shadow">
                <div className="card-header py-3 d-flex justify-content-start color-blue">
                  Data Pengeluaran Uang
                </div>
                <div className="card-body p-0">
                  <ChartMonth apiUrl={apiUrlExpense} />
                </div>
                <div className="card-footer text-body-secondary d-flex justify-content-start color-blue">
                  Total Pengeluaran :
                  {!totalPengeluaran
                    ? "belum ada data"
                    : formatCurrency(totalPengeluaran)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportChartMonth;
