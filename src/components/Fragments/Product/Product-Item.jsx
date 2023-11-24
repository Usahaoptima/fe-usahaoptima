import { useNavigate } from "react-router-dom";
import { deleteProductItem } from "../../../services/Product-Services";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const ProductItem = (props) => {
  const { _id, product_name, price, quantity } = props.product;
  const navigate = useNavigate();

  const openEditProduct = () => {
    navigate(`/produk-edit-form/${_id}`);
  };

  const formatRupiah = (harga) => {
    return `Rp. ${harga.toLocaleString("id-ID")}`;
  };

  const handleDeleteProduct = async () => {
    const productId = _id;

    const isConfirmed = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda tidak akan dapat memulihkan produk ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
    });

    if (isConfirmed.isConfirmed) {
      try {
        await deleteProductItem(productId);

        Swal.fire("Dihapus!", "Produk telah dihapus.", "success").then(() => {
          window.location.reload();
        });
      } catch (error) {
        console.log(error);

        Swal.fire("Error", "Terjadi kesalahan saat menghapus produk.", "error");
      }
    } else {
      Swal.fire(
        "Produk Anda aman!",
        "Tidak ada perubahan yang dibuat.",
        "info"
      );
    }
  };
  return (
    <>
      <tr>
        <td className="td">{product_name}</td>
        <td className="td">{formatRupiah(price)}</td>
        <td className="td">{quantity}</td>
        <td>
          <i
            className="fa-regular fa-pen-to-square edit"
            onClick={openEditProduct}
          ></i>
          <i
            className="fa-regular fa-trash-can delete"
            onClick={handleDeleteProduct}
          ></i>
        </td>
      </tr>
    </>
  );
};

export default ProductItem;
