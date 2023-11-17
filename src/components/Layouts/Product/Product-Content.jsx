import { useState } from "react";
import Loader from "../../Elements/Loader";
import ProductItem from "../../Fragments/Product/Product-Item";
import TableProduct from "../../Fragments/Product/Table-Product";
import { useNavigate } from "react-router-dom";

const ProdukContent = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([
    {
      createdAt: "2023-10-14T16:13:46.859Z",
      name: "Martabak",
      price: 15000,
      quantity: 60,
      id: "1",
    },
    {
      createdAt: "2023-10-15T09:40:08.155Z",
      name: "Cilok",
      price: 500,
      quantity: 150,
      id: "2",
    },
    {
      createdAt: "2023-10-15T09:40:08.155Z",
      name: "Siomay",
      price: 500,
      quantity: 180,
      id: "3",
    },
    {
      createdAt: "2023-10-15T05:04:10.020Z",
      name: "Batagor",
      price: 1000,
      quantity: 60,
      id: "4",
    },
    {
      createdAt: "2023-10-15T05:12:52.123Z",
      name: "Bakso",
      price: 10000,
      quantity: 60,
      id: "5",
    },
    {
      createdAt: "2023-10-15T04:13:46.846Z",
      name: "Mie Ayam",
      price: 10000,
      quantity: 70,
      id: "6",
    },
  ]);

  const openAddProduct = () => {
    navigate("/produk-form");
  };
  return (
    <>
      <section id="produk" className="mt-4">
        <div className="produk-button">
          <button onClick={openAddProduct}>Tambah Produk</button>
        </div>
        <Loader />
        <div className="section-content">
          <table className="table table-hover mt-4">
            <thead>
              <tr>
                <TableProduct tableName="#" />
                <TableProduct tableName="Nama Produk" />
                <TableProduct tableName="Harga" />
                <TableProduct tableName="Stok Produk" />
                <TableProduct tableName="Action" />
              </tr>
            </thead>
            <tbody>
              {product.map((product, index) => {
                return <ProductItem key={index} product={product} />;
              })}
            </tbody>
          </table>

          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end gap-3 m-3">
              <li id="previous" className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li id="next" className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default ProdukContent;
