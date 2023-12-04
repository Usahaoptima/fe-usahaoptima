import React, { useEffect, useState } from "react";
import TableProduct from "../../Fragments/Product/Table-Product";
import Loader from "../../Elements/Loader";
import { useNavigate } from "react-router-dom";
import { getProduksi } from "../../../services/Produksi.Services";
import ProduksiItem from "../../Fragments/Operational-Cost/Produksi-Item";

const TableProduksi = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [produksi, setProduksi] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getdataproduksi = async () => {
    setIsLoading(true);
    const resProduksi = await getProduksi();
    setIsLoading(false);
    setProduksi(resProduksi);
  };

  useEffect(() => {
    getdataproduksi();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const backToBiayaOperasional = () => {
    navigate("/biaya-operasional");
  };
  const openAddProduct = () => {
    navigate("/detail-produksi-form");
  };
  return (
    <>
      <section id="produk" className="mt-4">
        <div className="produk-button d-flex justify-content-between">
          <button onClick={openAddProduct}>Tambah Produk</button>
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
                  <TableProduct tableName="Nama Produk" />
                  <TableProduct tableName="Harga Produk" />
                  <TableProduct tableName="Kuantitas Produk" />
                  <TableProduct tableName="Action" />
                </tr>
              </thead>
              <tbody>
                {produksi.slice(startIndex, endIndex).map((produksi, index) => (
                  <ProduksiItem key={index} produksi={produksi} />
                ))}
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
                endIndex >= produksi.length ? "disabled" : ""
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
