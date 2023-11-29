import React from "react";
import LabelForm from "../../Elements/Label-Form";
import { useNavigate } from "react-router-dom";

const CreateFormKaryawan = () => {
  const navigate = useNavigate();

  const backToTable = () => {
    navigate("/detail-karyawan");
  };
  return (
    <>
      <div className="section-content">
        <div className="container mt-5">
          <h2 className="section-content-title">Tambah Data Karyawan</h2>
          <form id="form-produk">
            <div className="form-group mb-3">
              <LabelForm name="Nama Karyawan" />
              <input
                type="number"
                className="form-control"
                placeholder="Masukkan Nama Karyawan"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name="Gaji" />
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Gaji"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name="Nomer Handphone" />
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Nomer Handphone"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name="Email" />
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Email"
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

export default CreateFormKaryawan;
