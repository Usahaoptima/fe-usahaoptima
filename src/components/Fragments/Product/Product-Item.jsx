import { useNavigate } from "react-router-dom";
import { DeleteProductItem } from "../../../services/Product-Services";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const ProductItem = (props) => {
  const { id, name, price, quantity } = props.product;
  const navigate = useNavigate();

  const openEditProduct = () => {
    navigate(`/produk-edit-form/${id}`);
  };

  const handleDeleteProduct = async () => {
    const productId = id;

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
        await DeleteProductItem(productId);

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
        <td className="td">{id}</td>
        <td className="td">{name}</td>
        <td className="td">{price}</td>
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
