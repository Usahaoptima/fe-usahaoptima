import { useForm } from "react-hook-form";
import { postCreateProduct } from "../../../services/Product-Services";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCreate = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  const createProduct = async (data) => {
    try {
      await postCreateProduct(data);

      // Reset formulir setelah berhasil dikirim
      setValue("product_name", "");
      setValue("price", "");
      setValue("quantity", "");

      Swal.fire({
        title: "Sukses!",
        text: "Produk berhasil ditambahkan",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/produk");
    } catch (error) {
      console.error("Error creating product:", error);

      // Menampilkan SweetAlert error
      Swal.fire({
        title: "Error!",
        text: "Terjadi kesalahan saat menambahkan produk",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const closeProductForm = () => {
    navigate("/produk");
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(createProduct)();
    }
  };

  return (
    <>
      <div className="section-content">
        <div className="container mt-5">
          <h2 className="section-content-title">Tambah Produk</h2>
          <form
            id="form-produk"
            onSubmit={handleSubmit(createProduct)}
            onKeyDown={handleEnterKey}
          >
            <div className="form-group mb-3">
              <label htmlFor="name" className="py-2 label-title">
                Nama Produk
              </label>
              <input
                type="text"
                className="form-control"
                {...register("product_name", { required: true })}
                placeholder="Masukkan Nama Produk"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="price" className="py-2 label-title">
                Harga Produk
              </label>
              <input
                type="number"
                className="form-control"
                {...register("price", { required: true })}
                placeholder="Masukkan Harga Produk"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="quantity" className="py-2 label-title">
                Stok Produk
              </label>
              <input
                type="number"
                className="form-control"
                {...register("quantity", { required: true })}
                placeholder="Masukkan Stok Produk"
              />
            </div>
            <button
              id="btn-submit"
              type="button"
              className="btn-form justify-content-center"
              onClick={closeProductForm}
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

export default ProductCreate;
