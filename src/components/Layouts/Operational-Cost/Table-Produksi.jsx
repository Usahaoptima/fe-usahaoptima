import React from "react";
import TableProduct from "../../Fragments/Product/Table-Product";
import Loader from "../../Elements/Loader";
import { useNavigate } from "react-router-dom";

const TableProduksi = () => {
  const navigate = useNavigate();

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
              <tbody>{/* Maping produksinya mas */}</tbody>
            </table>
          </div>

          {/* <Loader isShow={isLoading} /> */}

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
