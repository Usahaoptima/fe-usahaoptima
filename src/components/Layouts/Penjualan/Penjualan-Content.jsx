import React, { useEffect, useState } from "react";
import TableProduct from "../../Fragments/Product/Table-Product";
import Loader from "../../Elements/Loader";
import PenjualanItem from "../../Fragments/Penjualan/Penjualan-item";
import { getSalesItem } from "../../../services/Penjualan-Services";

const PenjualanContent = () => {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPenjualanItem = async () => {
    setIsLoading(true);

    const resPenjualanItem = await getSalesItem();
    setSales(resPenjualanItem);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchPenjualanItem();
  }, []);
  return (
    <>
      <section id="produk" className="mt-4">
        <div className="produk-button">
          <button>Tambah Data Penjualan</button>
        </div>
        <div className="section-content">
          <table className="table table-hover mt-4">
            <thead>
              <tr>
                <TableProduct tableName="Nama Pembeli" />
                <TableProduct tableName="Nama Produk" />
                <TableProduct tableName="Quantity" />
                <TableProduct tableName="Total Harga" />
                <TableProduct tableName="Action" />
              </tr>
            </thead>
            <tbody>
              {sales.map((penjualan, index) => {
                return <PenjualanItem key={index} penjualan={penjualan} />;
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
};

export default PenjualanContent;
