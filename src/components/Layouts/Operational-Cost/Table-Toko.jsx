import React, { useEffect, useState } from "react";
import TableProduct from "../../Fragments/Product/Table-Product";
import Loader from "../../Elements/Loader";
import { useNavigate } from "react-router-dom";
import { getExpensesItem } from "../../../services/Expenses";
import ExpensesItem from "../../Fragments/Operational-Cost/Expenses-Item";

const TableProduksi = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const backToBiayaOperasional = () => {
    navigate("/biaya-operasional");
  };

  const getExpenses = async () => {
    setIsLoading(true);
    const resExpenses = await getExpensesItem();
    setIsLoading(false);
    setExpenses(resExpenses);
  };

  useEffect(() => {
    getExpenses();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const openAddToko = () => {
    navigate("/detail-toko-form");
  };
  return (
    <>
      <section id="produk" className="mt-4">
        <div className="produk-button d-flex justify-content-between">
          <button onClick={openAddToko}>Tambah Biaya</button>
          <button
            style={{
              backgroundColor: "#dedede",
              color: " #146c94",
              fontWeight: "600",
            }}
            onClick={backToBiayaOperasional}
          >
            Kembali
          </button>
        </div>

        <div className="section-content">
          <div className="table-responsive">
            <table className="table table-hover mt-4">
              <thead>
                <tr>
                  <TableProduct tableName="Nama Pengeluaran" />
                  <TableProduct tableName="Biaya" />
                  <TableProduct tableName="Tanggal" />
                  <TableProduct tableName="Action" />
                </tr>
              </thead>
              <tbody>
                {expenses.slice(startIndex, endIndex).map((expenses, index) => {
                  return <ExpensesItem key={index} expenses={expenses} />;
                })}
              </tbody>
            </table>
          </div>

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
                endIndex >= expenses.length ? "disabled" : ""
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
};

export default TableProduksi;
