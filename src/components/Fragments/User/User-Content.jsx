import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../../services/User-Services";
import Swal from "sweetalert2";

function UserContent(props) {
  const navigate = useNavigate();
  const { _id, username, email, role } = props.user;
  const handleDeleteUser = async () => {
    const id = _id;

    const isConfirmed = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda tidak akan dapat memulihkan Data user ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
    });

    if (isConfirmed.isConfirmed) {
      try {
        await deleteUser(id);

        Swal.fire("Dihapus!", "Data user telah dihapus.", "success").then(
          () => {
            window.location.reload();
          }
        );
      } catch (error) {
        console.log(error);

        Swal.fire(
          "Error",
          "Terjadi kesalahan saat menghapus  Data user.",
          "error"
        );
      }
    } else {
      Swal.fire(
        " Data user Anda aman!",
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
            className="fa-regular fa-trash-can delete"
            onClick={handleDeleteUser}
          ></i>
        </td>
      </tr>
    </>
  );
}

export default UserContent;
