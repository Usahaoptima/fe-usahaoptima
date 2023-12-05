import LabelForm from "../../Elements/Label-Form";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { updateStaf } from "../../../services/Staff-Services";

const EditFormKaryawan = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const updateStafItem = async (form) => {
    try {
      await updateStaf(id, form);

      Swal.fire({
        title: "Sukses!",
        text: "Data berhasil diupdate",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/detail-karyawan");
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
      handleSubmit(updateStafItem)();
    }
  };

  const backToTable = () => {
    navigate("/detail-karyawan");
  };
  return (
    <>
      <div className="section-content">
        <div className="container mt-5">
          <h2 className="section-content-title">Update Data Karyawan</h2>
          <form
            id="form-produk"
            onSubmit={handleSubmit(updateStafItem)}
            onKeyDown={handleEnterKey}
          >
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
                type="text"
                className="form-control"
                {...register("phone_number", { required: true })}
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
              {isSubmitting ? "Updating..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditFormKaryawan;
