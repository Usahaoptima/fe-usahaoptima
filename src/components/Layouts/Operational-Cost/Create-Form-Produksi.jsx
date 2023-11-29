import React from "react";
import LabelForm from "../../Elements/Label-Form";
import { useNavigate } from "react-router-dom";

const CreateFormProduksi = () => {
  const navigate = useNavigate();

  const backToTable = () => {
    navigate("/detail-produksi");
  };
  return (
    <>
      <div className="section-content">
        <div className="container mt-5">
          <h2 className="section-content-title">Tambah Data Produksi</h2>
          <form id="form-produk">
            <div className="form-group mb-3">
              <LabelForm name="Nama Produk" />
              <input
                type="number"
                className="form-control"
                placeholder="Masukkan Nama Produk"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name="Harga Produk" />
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Harga Produk"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name="Kuantitas Produk" />
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Kuantitas Produk"
              />
            </div>
            <button
              id="btn-submit"
              type="button"
              className="btn-form justify-content-center"
              onClick={backToTable}
            >
              Batal
            </button>
            <button id="btn-submit" type="submit" className="btn-form">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateFormProduksi;
