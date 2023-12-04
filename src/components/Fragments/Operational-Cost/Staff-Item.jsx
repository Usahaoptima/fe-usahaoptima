/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const StafItem = (props) => {
  const { _id, staff_name, salary, phone_number, email } = props.staffs;
  const navigate = useNavigate();
  const formatRupiah = (harga) => {
    return `Rp ${harga.toLocaleString("id-ID")}`;
  };

  const openEditToko = () => {
    navigate(`/toko-edit-form/${_id}`);
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
            onClick={openEditToko}
          ></i>
          <i className="fa-regular fa-trash-can delete"></i>
        </td>
      </tr>
    </>
  );
};

export default StafItem;
