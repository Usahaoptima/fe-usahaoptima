/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import { updateProductItem } from "../../../services/Product-Services";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useEffect } from "react";

const ProductEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  const closeProductUpdateForm = () => {
    navigate("/produk");
  };

  const editProductItem = async (form) => {
    try {
      await updateProductItem(id, form);

      // Menampilkan SweetAlert Suksess :D
      Swal.fire({
        title: "Sukses!",
        text: "Produk berhasil diupdate",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/produk");
    } catch (error) {
      console.log("Error updating product:", error);

      // Menampilkan SweetAlert error :(
      Swal.fire({
        title: "Error!",
        text: "Terjadi kesalahan saat Mengupdate produk",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await updateProductItem(id);

        // Mengisi formulir dengan data dari API
        setValue("product_name", response.data.product_name);
        setValue("price", response.data.price);
        setValue("quantity", response.data.quantity);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    // Panggil fungsi fetchProductData saat komponen dipasang
    fetchProductData();
  }, [id, setValue]);

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(editProductItem)();
    }
  };

  return (
    <>
      <div className="section-content">
        <div className="container mt-5">
          <h2 className="section-content-title">Update Produk</h2>
          <form
            id="form-produk"
            onSubmit={handleSubmit(editProductItem)}
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
              type="submit"
              className="btn-form justify-content-center"
              onClick={closeProductUpdateForm}
            >
              Batal
            </button>
            <button id="btn-submit" type="submit" className="btn-form">
              {isSubmitting ? "Updating..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductEdit;
