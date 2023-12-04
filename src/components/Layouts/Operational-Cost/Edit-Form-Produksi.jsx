import LabelForm from "../../Elements/Label-Form";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { updateProduksi } from "../../../services/Produksi.Services";

const EditFormProduksi = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const updateProduksiItem = async (form) => {
    try {
      await updateProduksi(id, form);

      Swal.fire({
        title: "Sukses!",
        text: "Data berhasil diupdate",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/detail-produksi");
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
      handleSubmit(updateProduksiItem)();
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
            onSubmit={handleSubmit(updateProduksiItem)}
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
              {isSubmitting ? "Updating..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditFormProduksi;
