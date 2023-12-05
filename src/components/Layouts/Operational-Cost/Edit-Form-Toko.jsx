import React, { useEffect } from "react";
import LabelForm from "../../Elements/Label-Form";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { updateExpensesItem } from "../../../services/Expenses";

const EditFormToko = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const updateExpenses = async (form) => {
    try {
      await updateExpensesItem(id, form);

      Swal.fire({
        title: "Sukses!",
        text: "Data berhasil diupdate",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/detail-toko");
    } catch (error) {
      console.error("Error updating data:", error);

      // Menampilkan SweetAlert error
      Swal.fire({
        title: "Error!",
        text: "Terjadi kesalahan saat mengupdate data ",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(updateExpenses)();
    }
  };

  const backToTable = () => {
    navigate("/detail-toko");
  };
  return (
    <>
      <div className="section-content">
        <div className="container mt-5">
          <h2 className="section-content-title">Update Data Biaya</h2>
          <form
            id="form-produk"
            onSubmit={handleSubmit(updateExpenses)}
            onKeyDown={handleEnterKey}
          >
            <div className="form-group mb-3">
              <LabelForm name="Nama Pengeluaran" />
              <input
                type="text"
                className="form-control"
                {...register("expense_name", { required: true })}
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
              {isSubmitting ? "Updating..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditFormToko;
