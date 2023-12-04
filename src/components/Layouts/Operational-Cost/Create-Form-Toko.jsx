import React from "react";
import LabelForm from "../../Elements/Label-Form";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { CreateExpenses } from "../../../services/Expenses";

const CreateFormToko = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  const createExpense = async (data) => {
    try {
      await CreateExpenses(data);

      setValue("expense_name", "");
      setValue("cost", "");

      Swal.fire({
        title: "Sukses!",
        text: "Data Penjualan berhasil ditambahkan",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/detail-toko");
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
      handleSubmit(createExpense)();
    }
  };

  const backToTable = () => {
    navigate("/detail-toko");
  };
  return (
    <>
      <div className="section-content">
        <div className="container mt-5">
          <h2 className="section-content-title">Tambah Data Biaya</h2>
          <form
            id="form-produk"
            onSubmit={handleSubmit(createExpense)}
            onKeyDown={handleEnterKey}
          >
            <div className="form-group mb-3">
              <LabelForm name="Nama Pengeluaran" />
              <input
                type="text"
                className="form-control"
                {...register("expenseName", { required: true })}
                placeholder="Masukkan Nama Pengeluaran"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name="Biaya" />
              <input
                type="number"
                className="form-control"
                {...register("cost", { required: true })}
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

export default CreateFormToko;
