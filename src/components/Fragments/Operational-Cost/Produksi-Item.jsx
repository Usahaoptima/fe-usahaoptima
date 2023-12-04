/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { deleteProduksi } from "../../../services/Produksi.Services";
const ProduksiItem = (props) => {
  const { _id, item_name, cost, quantity } = props.produksi;
  const navigate = useNavigate();

  const handleDeleteStaff = async () => {
    const produksiId = _id;

    const isConfirmed = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda tidak akan dapat memulihkan data ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
    });

    if (isConfirmed.isConfirmed) {
      try {
        await deleteProduksi(produksiId);

        Swal.fire("Dihapus!", "Data telah dihapus.", "success").then(() => {
          window.location.reload();
        });
      } catch (error) {
        console.log(error);

        Swal.fire("Error", "Terjadi kesalahan saat menghapus Data.", "error");
      }
    } else {
      Swal.fire("Data Anda aman!", "Tidak ada perubahan yang dibuat.", "info");
    }
  };

  const OpenEditProduksi = () => {
    navigate(`/produksi-edit-form/${_id}`);
  };

  const formatRupiah = (harga) => {
    return `Rp ${harga.toLocaleString("id-ID")}`;
  };

  return (
    <>
      <tr>
        <td className="td">{item_name}</td>
        <td className="td">{formatRupiah(cost)}</td>
        <td className="td">{quantity}</td>
        <td>
          <i
            className="fa-regular fa-pen-to-square edit"
            onClick={OpenEditProduksi}
          ></i>
          <i
            className="fa-regular fa-trash-can delete"
            onClick={handleDeleteStaff}
          ></i>
        </td>
      </tr>
    </>
  );
};

export default ProduksiItem;
