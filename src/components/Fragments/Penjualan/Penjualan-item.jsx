import { useNavigate } from 'react-router-dom';
import {
  deleteSalesItem,
  getPDFReport,
} from '../../../services/Penjualan-Services';
import Swal from 'sweetalert2';

/* eslint-disable react/prop-types */
const PenjualanItem = (props) => {
  const navigate = useNavigate();
  const { _id, sales_name, product_name, quantity, total_price, created_date } =
    props.penjualan;

  const formatTanggal = (tanggalISO) => {
    const tanggal = new Date(tanggalISO);

    const formattedDate = tanggal
      .toLocaleDateString('id-ID', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
      })
      .replace(/\//g, '-');

    return formattedDate;
  };

  const formatRupiah = (harga) => {
    return `Rp ${harga.toLocaleString('id-ID')}`;
  };

  const openEditPenjualan = () => {
    navigate(`/penjualan-edit-form/${_id}`);
  };

  const handleDeleteSales = async () => {
    const PenjualanId = _id;

    const isConfirmed = await Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Anda tidak akan dapat memulihkan Data penjualan ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, hapus!',
    });

    if (isConfirmed.isConfirmed) {
      try {
        await deleteSalesItem(PenjualanId);

        Swal.fire('Dihapus!', 'Data penjualan telah dihapus.', 'success').then(
          () => {
            window.location.reload();
          }
        );
      } catch (error) {
        console.log(error);

        Swal.fire(
          'Error',
          'Terjadi kesalahan saat menghapus  Data penjualan.',
          'error'
        );
      }
    } else {
      Swal.fire(
        ' Data penjualan Anda aman!',
        'Tidak ada perubahan yang dibuat.',
        'info'
      );
    }
  };

  const handlePDFDownload = async () => {
    const PenjualanId = _id;

    window.open(
      `http://localhost:3000/api/v1/sales/report/${PenjualanId}`,
      '_blank'
    );
  };

  return (
    <>
      <tr>
        <td className="td">{sales_name}</td>
        <td className="td">{product_name}</td>
        <td className="td">{quantity}</td>
        <td className="td">{formatRupiah(total_price)}</td>
        <td className="td">{formatTanggal(created_date)}</td>
        <td>
          <i
            className="fa-regular fa-pen-to-square edit"
            onClick={openEditPenjualan}
          ></i>
          <i
            className="fa-regular fa-trash-can delete"
            onClick={handleDeleteSales}
          ></i>
          <i className="fa-regular fa-file pdf" onClick={handlePDFDownload}></i>
        </td>
      </tr>
    </>
  );
};

export default PenjualanItem;
