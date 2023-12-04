import React from "react";
import LabelForm from "../../Elements/Label-Form";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { CreateProduksi } from "../../../services/Produksi.Services";

const CreateFormProduksi = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const createProduksi = async (data) => {
    try {
      await CreateProduksi(data);

      Swal.fire({
        title: "Sukses!",
        text: "Data Penjualan berhasil ditambahkan",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/detail-produksi");
    } catch (error) {
      console.error("Error creating data:", error);

      // Menampilkan SweetAlert error
      Swal.fire({
        title: "Error!",
        text: "Terjadi kesalahan saat menambahkan data ",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(createProduksi)();
    }
  };

  const backToTable = () => {
    navigate("/detail-produksi");
  };
  return (
    <>
      <div className="section-content">
        <div className="container mt-5">
          <h2 className="section-content-title">Tambah Data Produksi</h2>
          <form
            id="form-produk"
            onSubmit={handleSubmit(createProduksi)}
            onKeyDown={handleEnterKey}
          >
            <div className="form-group mb-3">
              <LabelForm name="Nama Produk" />
              <input
                type="text"
                className="form-control"
                {...register("itemName", { required: true })}
                placeholder="Masukkan Nama Produk"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name="Harga Produk" />
              <input
                type="number"
                className="form-control"
                {...register("cost", { required: true })}
                placeholder="Masukkan Harga Produk"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name="Kuantitas Produk" />
              <input
                type="text"
                className="form-control"
                {...register("quantity", { required: true })}
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
            <button
              id="btn-submit"
              type="submit"
              className="btn-form"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateFormProduksi;
