import { useNavigate, useParams } from "react-router-dom";
import LabelForm from "../../Elements/Label-Form";
import { updateSalesItem } from "../../../services/Penjualan-Services";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getProductItem } from "../../../services/Product-Services";

const PenjualanEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  const [prodcuts, setProducts] = useState([]);

  const closePenjualanUpdateForm = () => {
    navigate("/penjualan");
  };

  const editSalesItem = async (form) => {
    try {
      await updateSalesItem(id, form);

      // Menampilkan SweetAlert Suksess :D
      Swal.fire({
        title: "Sukses!",
        text: "Produk berhasil diupdate",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/penjualan");
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
    const fetchProductsData = async () => {
      try {
        const productsData = await getProductItem();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsData();
  }, []);

  // useEffect(() => {
  //   const fetchSalesData = async () => {
  //     try {
  //       const response = await updateSalesItem(id);

  //       // Mengisi formulir dengan data dari API
  //       setValue("sales_name", response.data.sales_name);
  //       setValue("product_name", response.data.product_name);
  //       setValue("quantity", response.data.quantity);
  //     } catch (error) {
  //       console.error("Error fetching product data:", error);
  //     }
  //   };

  //   // Panggil fungsi fetchSalesData saat komponen dipasang
  //   fetchSalesData();
  // }, [id, setValue]);

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(editSalesItem)();
    }
  };
  return (
    <>
      <div className="section-content">
        <div className="container mt-5">
          <h2 className="section-content-title">Edit Data Penjualan</h2>
          <form
            id="form-produk"
            onSubmit={handleSubmit(editSalesItem)}
            onKeyDown={handleEnterKey}
          >
            {/* <div className="form-group mb-3">
              <LabelForm name="Nama Pembeli" />
              <input
                type="text"
                className="form-control"
                {...register("sales_name", { required: true })}
                placeholder="Masukkan Nama Pembeli"
              />
            </div> */}
            <div>
              <LabelForm name="Nama Produk" />
              <select
                className="form-control"
                {...register("product_name", { required: true })}
              >
                <option value="">Pilih Nama Produk</option>
                {prodcuts.map((product, index) => (
                  <option key={index} value={product.id}>
                    {product.product_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group mb-3">
              <LabelForm name="Quantity" />
              <input
                type="number"
                className="form-control"
                {...register("quantity", { required: true })}
                placeholder="Masukkan jumlah produk"
              />
            </div>
            <button
              id="btn-submit"
              type="button"
              className="btn-form justify-content-center"
              onClick={closePenjualanUpdateForm}
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

export default PenjualanEdit;
