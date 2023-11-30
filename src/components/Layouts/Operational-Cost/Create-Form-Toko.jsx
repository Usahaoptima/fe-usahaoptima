import React from "react";
import LabelForm from "../../Elements/Label-Form";
import { useNavigate } from "react-router-dom";

const CreateFormToko = () => {
  const navigate = useNavigate();

  const backToTable = () => {
    navigate("/detail-toko");
  };
  return (
    <>
      <div className="section-content">
        <div className="container mt-5">
          <h2 className="section-content-title">Tambah Data Biaya</h2>
          <form id="form-produk">
            <div className="form-group mb-3">
              <LabelForm name="Nama Pengeluaran" />
              <input
                type="number"
                className="form-control"
                placeholder="Masukkan Nama Pengeluaran"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name="Biaya" />
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Biaya"
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

export default CreateFormToko;
