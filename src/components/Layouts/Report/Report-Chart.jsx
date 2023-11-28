import React, { useState, useEffect } from "react";
import ChartComponent from "../../Elements/Chart";
import { getTotal } from "../../../services/Report";

const ReportChart = () => {
  const [totalPengeluaran, setTotalPengeluaran] = useState("");
  const [totalPemasukan, setTotalPemasukan] = useState("");
  const apiUrlSales = "http://localhost:3000/api/v1/report/total-sales";
  const apiUrlExpense = "http://localhost:3000/api/v1/report/total-expense";

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
    const resTotalPemasukan = await getTotal("pemasukan");
    const resTotalPengeluaran = await getTotal("pengeluaran");
    setTotalPemasukan(resTotalPemasukan.data.totalExpense);
    setTotalPengeluaran(resTotalPengeluaran.data.totalExpense);
  };

  useEffect(() => {
    getDataTotal();
  }, []);

  return (
    <>
      <div>
        <h2 className="mx-3 mb-4">Total Amount per Bulan</h2>
        <div className="container">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <div className="col-lg-4 col-sm-12 col-md-5">
              <div className="card text-center">
                <div className="card-header">Data Pemasukan Uang</div>
                <div className="card-body p-0">
                  <ChartComponent apiUrl={apiUrlSales} />
                </div>
                <div className="card-footer text-body-secondary">
                  Total Pemasukan :
                  {!totalPemasukan
                    ? "belum ada data"
                    : formatCurrency(totalPemasukan)}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-5 mx-5">
              <div className="card text-center">
                <div className="card-header">Data Pengeluaran Uang</div>
                <div className="card-body p-0">
                  <ChartComponent apiUrl={apiUrlExpense} />
                </div>
                <div className="card-footer text-body-secondary">
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

export default ReportChart;
