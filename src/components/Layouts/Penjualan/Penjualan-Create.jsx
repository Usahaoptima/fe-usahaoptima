import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LabelForm from "../../Elements/Label-Form";
import { postCreateSales } from "../../../services/Penjualan-Services";
import { getProductItem } from "../../../services/Product-Services";
import { useEffect, useState } from "react";

const PenjualanCreate = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  const [products, setProducts] = useState([]);

  const CreateSales = async (data) => {
    try {
      await postCreateSales(data);

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

      navigate("/penjualan");
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

  const closePenjualanForm = () => {
    navigate("/penjualan");
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(CreateSales)();
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

  return (
    <>
      <div className="section-content">
        <div className="container mt-5">
          <h2 className="section-content-title">Tambah Data Penjualan</h2>
          <form
            id="form-produk"
            onSubmit={handleSubmit(CreateSales)}
            onKeyDown={handleEnterKey}
          >
            <div className="form-group mb-3">
              <LabelForm name="Nama Pembeli" />
              <input
                type="text"
                className="form-control"
                {...register("sales_name", { required: true })}
                placeholder="Masukkan Nama Pembeli"
              />
            </div>
            <div>
              <LabelForm name="Nama Produk" />
              <select
                className="form-control"
                {...register("product_name", { required: true })}
              >
                <option value="">Pilih Nama Produk</option>
                {products.map((product, index) => (
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
            <div className="form-group mb-3">
              <LabelForm name=" Total Harga" />
              <input
                type="number"
                className="form-control"
                {...register("total_price", { required: true })}
                placeholder="Masukkan total harga"
              />
            </div>
            <button
              id="btn-submit"
              type="button"
              className="btn-form justify-content-center"
              onClick={closePenjualanForm}
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

export default PenjualanCreate;
