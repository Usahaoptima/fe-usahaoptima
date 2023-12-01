/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { deleteExpensesItem } from "../../../services/Expenses";
import { useNavigate } from "react-router-dom";
const ExpensesItem = (props) => {
  const { _id, expense_name, cost, created_date } = props.expenses;
  const navigate = useNavigate();
  const formatRupiah = (harga) => {
    return `Rp ${harga.toLocaleString("id-ID")}`;
  };

  const formatTanggal = (tanggalISO) => {
    const tanggal = new Date(tanggalISO);

    const formattedDate = tanggal
      .toLocaleDateString("id-ID", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      })
      .replace(/\//g, "-");

    return formattedDate;
  };

  const handleDeleteExpenses = async () => {
    const expensesId = _id;

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
        await deleteExpensesItem(expensesId);

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

  const openEditToko = () => {
    navigate(`/toko-edit-form/${_id}`);
  };
  return (
    <>
      <tr>
        <td className="td">{expense_name}</td>
        <td className="td">{formatRupiah(cost)}</td>
        <td className="td">{formatTanggal(created_date)}</td>
        <td>
          <i
            className="fa-regular fa-pen-to-square edit"
            onClick={openEditToko}
          ></i>
          <i
            className="fa-regular fa-trash-can delete"
            onClick={handleDeleteExpenses}
          ></i>
        </td>
      </tr>
    </>
  );
};

export default ExpensesItem;
