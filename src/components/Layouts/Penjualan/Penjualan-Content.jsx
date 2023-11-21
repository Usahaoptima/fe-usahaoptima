import React from "react";
import TableProduct from "../../Fragments/Product/Table-Product";
import Loader from "../../Elements/Loader";

const PenjualanContent = () => {
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
            <tbody></tbody>
          </table>

          <Loader />

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
