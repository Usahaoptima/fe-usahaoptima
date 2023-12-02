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
                {expenses.map((expenses, index) => {
                  return <ExpensesItem key={index} expenses={expenses} />;
                })}
              </tbody>
            </table>
          </div>

          <Loader isShow={isLoading} />

          <ul className="pagination justify-content-end gap-3 m-3">
            <li className="page-item ">
              <button className="page-link">Previous</button>
            </li>
            <li className="page-item ">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default TableProduksi;
