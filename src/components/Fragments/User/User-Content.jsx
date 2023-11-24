import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteSalesItem } from "../../../services/Penjualan-Services";
import Swal from "sweetalert2";

function UserContent(props) {
  const navigate = useNavigate();
  const { _id, username, email, role } = props.user;
  const openEditUser = () => {
    navigate(`/user-edit-form/${_id}`);
  };

  const handleDeleteUser = async () => {
    const id = _id;

    const isConfirmed = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda tidak akan dapat memulihkan Data penjualan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
    });

    if (isConfirmed.isConfirmed) {
      try {
        await deleteSalesItem(id);

        Swal.fire("Dihapus!", "Data penjualan telah dihapus.", "success").then(
          () => {
            window.location.reload();
          }
        );
      } catch (error) {
        console.log(error);

        Swal.fire(
          "Error",
          "Terjadi kesalahan saat menghapus  Data penjualan.",
          "error"
        );
      }
    } else {
      Swal.fire(
        " Data penjualan Anda aman!",
        "Tidak ada perubahan yang dibuat.",
        "info"
      );
    }
  };

  return (
    <>
      <tr>
        <td className="td">{username}</td>
        <td className="td">{email}</td>
        <td className="td">{role}</td>
        <td>
          <i
            className="fa-regular fa-pen-to-square edit"
            onClick={openEditUser}
          ></i>
          <i
            className="fa-regular fa-trash-can delete"
            onClick={handleDeleteUser}
          ></i>
        </td>
      </tr>
    </>
  );
}

export default UserContent;
