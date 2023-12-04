import React from "react";
import LabelForm from "../../Elements/Label-Form";
import { useNavigate } from "react-router-dom";
import { CreateStaf } from "../../../services/Staff-Services";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateFormKaryawan = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const createStafItem = async (data) => {
    try {
      await CreateStaf(data);

      const isValidPhoneNumber = /^(\+62|0)[0-9]{8,15}$/.test(data.phoneNumber);
      if (!isValidPhoneNumber) {
        Swal.fire({
          title: "Error!",
          text: "Format nomor handphone tidak valid",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      Swal.fire({
        title: "Sukses!",
        text: "Produk berhasil ditambahkan",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/detail-karyawan");
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

  const backToTable = () => {
    navigate("/detail-karyawan");
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(createStafItem)();
    }
  };
  return (
    <>
      <div className="section-content">
        <div className="container mt-5">
          <h2 className="section-content-title">Tambah Data Karyawan</h2>
          <form
            id="form-produk"
            onSubmit={handleSubmit(createStafItem)}
            onKeyDown={handleEnterKey}
          >
            <div className="form-group mb-3">
              <LabelForm name="Nama Karyawan" />
              <input
                type="text"
                className="form-control"
                {...register("staffName", { required: true })}
                placeholder="Masukkan Nama Karyawan"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name="Gaji" />
              <input
                type="number"
                className="form-control"
                {...register("salary", { required: true })}
                placeholder="Masukkan Gaji"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name="Nomer Handphone" />
              <input
                type="number"
                className="form-control"
                {...register("phoneNumber", { required: true })}
                placeholder="Masukkan Nomer Handphone"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name="Email" />
              <input
                type="text"
                className="form-control"
                {...register("email", { required: true })}
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

export default CreateFormKaryawan;
