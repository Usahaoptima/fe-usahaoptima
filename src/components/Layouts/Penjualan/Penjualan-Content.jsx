import React, { useEffect, useState } from "react";
import TableProduct from "../../Fragments/Product/Table-Product";
import Loader from "../../Elements/Loader";
import PenjualanItem from "../../Fragments/Penjualan/Penjualan-item";
import { getSalesItem } from "../../../services/Penjualan-Services";
import { useNavigate } from "react-router-dom";

const PenjualanContent = () => {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchPenjualanItem = async () => {
    setIsLoading(true);

    const resPenjualanItem = await getSalesItem();
    setSales(resPenjualanItem);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchPenjualanItem();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const openAddPenjualan = () => {
    navigate("/penjualan-form");
  };
  return (
    <>
      <section id="produk" className="mt-4">
        <div className="produk-button">
          <button onClick={openAddPenjualan}>Tambah Data Penjualan</button>
        </div>
        <div className="section-content">
          <table className="table table-hover mt-4">
            <thead>
              <tr>
                <TableProduct tableName="Nama Pembeli" />
                <TableProduct tableName="Nama Produk" />
                <TableProduct tableName="Quantity" />
                <TableProduct tableName="Total Harga" />
                <TableProduct tableName="Tanggal" />
                <TableProduct tableName="Action" />
              </tr>
            </thead>
            <tbody>
              {sales.slice(startIndex, endIndex).map((penjualan, index) => {
                return <PenjualanItem key={index} penjualan={penjualan} />;
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
                endIndex >= sales.length ? "disabled" : ""
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

export default PenjualanContent;
