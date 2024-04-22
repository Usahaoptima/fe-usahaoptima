import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import LabelForm from '../../Elements/Label-Form';
import {
  getPaymentToken,
  postCreateSales,
} from '../../../services/Penjualan-Services';
import { getProductItem } from '../../../services/Product-Services';
import { useEffect, useState } from 'react';

const PenjualanCreate = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
  } = useForm();

  const [products, setProducts] = useState([]);
  const [isMasive, setIsMasive] = useState(false);
  const [isCashless, setIsCashless] = useState(false);
  const [hide, setHide] = useState(false);
  const [submitText, setSubmitText] = useState('Submit');

  const CreateSaleData = async (data) => {
    let saveSales = await postCreateSales(data);
    if (saveSales.statusCode === 200) {
      Swal.fire({
        title: 'Sukses!',
        text: 'Data Penjualan berhasil ditambahkan',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      navigate('/penjualan');
    } else {
      Swal.fire({
        title: 'Error',
        text: saveSales.message,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
  const total = watch('total_price');
  const quantity = watch('quantity');
  const product_name = watch('product_name');

  useEffect(() => {
    if (quantity && product_name) {
      let filter = products.filter(
        (item) => item.product_name === product_name
      );
      let total_price = quantity * filter[0].price;
      setValue('total_price', total_price);
    }
  }, [product_name, quantity]);

  useEffect(() => {
    setSubmitText(isSubmitting ? 'Submitting...' : 'Submit');
  }, [isSubmitting]);

  useEffect(() => {
    if (quantity && product_name) {
      let filter = products.filter(
        (item) => item.product_name === product_name
      );
      let total_price = quantity * filter[0].price;
      if (total !== total_price) {
        setIsCashless(false);
        setHide(true);
        console.log(isCashless);
      } else {
        setIsCashless(false);
        setHide(false);
      }
    }
  }, [total]);

  const CreateSales = async (data) => {
    try {
      if (!isCashless) {
        CreateSaleData(data);
      } else {
        if (isMasive) {
          setValue('sales_name', 'Data tanpa nama');
        }
        const token = await getPaymentToken(data);
        if (token.statusCode > 200) {
          Swal.fire({
            title: 'Error',
            text: token.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        } else {
          window.snap.pay(token.transactionToken, {
            onSuccess: async function () {
              setValue('sales_name', '');
              setValue('product_name', '');
              setValue('quantity', '');
              CreateSaleData(data);
            },
          });
        }
      }
    } catch (error) {
      console.error('Error creating product:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Terjadi kesalahan saat menambahkan data',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const closePenjualanForm = () => {
    navigate('/penjualan');
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(CreateSales)();
    }
  };

  const fetchProductsData = async () => {
    try {
      const productsData = await getProductItem();
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProductsData();
    const snapScript = 'https://app.sandbox.midtrans.com/snap/snap.js';
    const clientKey = 'SB-Mid-client-fF8YD5MoijVmF-ZA';
    const script = document.createElement('script');
    script.src = snapScript;
    script.setAttribute('data-client-key', clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
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
                {...register('sales_name', { required: true })}
                placeholder="Masukkan Nama Pembeli"
                disabled={isMasive}
              />
            </div>
            <div className="d-flex flex-row form-group mb-3 gap-2">
              <input
                type="checkbox"
                value={isMasive}
                onClick={() => {
                  setIsCashless(!isCashless);
                  setIsMasive(!isMasive);
                  setHide(!hide);
                  if (isMasive) {
                    setValue('sales_name', '');
                  } else {
                    setValue('sales_name', 'Data tanpa nama');
                  }
                }}
              />
              <span>Apakah anda ingin memasukan data tanpa nama?</span>
            </div>
            <div>
              <LabelForm name="Nama Produk" />
              <select
                className="form-control"
                {...register('product_name', { required: true })}
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
                {...register('quantity', { required: true })}
                placeholder="Masukkan jumlah produk"
                min="1"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name=" Total Harga" />
              <input
                type="number"
                className="form-control"
                {...register('total_price', { required: true })}
                placeholder="Masukan Total Harga"
              />
            </div>
            <div
              className={`flex-row form-group mb-3 gap-2 ${
                hide ? 'd-none' : 'd-flex'
              }`}
            >
              <input
                type="checkbox"
                value={isCashless}
                onClick={() => setIsCashless(!isCashless)}
              />
              <span>Apakah pembayaran menggunakan pembayaran online?</span>
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
              {submitText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PenjualanCreate;
