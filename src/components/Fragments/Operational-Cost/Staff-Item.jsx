/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { deleteStaf } from "../../../services/Staff-Services";
const StafItem = (props) => {
  const { _id, staff_name, salary, phone_number, email } = props.staffs;
  const navigate = useNavigate();

  const handleDeleteStaff = async () => {
    const staffId = _id;

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
        await deleteStaf(staffId);

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

  const formatRupiah = (harga) => {
    return `Rp ${harga.toLocaleString("id-ID")}`;
  };

  const openEditKaryawan = () => {
    navigate(`/karyawan-edit-form/${_id}`);
  };
  return (
    <>
      <tr>
        <td className="td">{staff_name}</td>
        <td className="td">{formatRupiah(salary)}</td>
        <td className="td">{phone_number}</td>
        <td className="td">{email}</td>
        <td>
          <i
            className="fa-regular fa-pen-to-square edit"
            onClick={openEditKaryawan}
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

export default StafItem;
