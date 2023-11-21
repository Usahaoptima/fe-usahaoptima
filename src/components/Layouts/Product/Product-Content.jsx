/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Loader from "../../Elements/Loader";
import ProductItem from "../../Fragments/Product/Product-Item";
import TableProduct from "../../Fragments/Product/Table-Product";
import { useNavigate } from "react-router-dom";
import { getProductItem } from "../../../services/Product-Services";

const ProdukContent = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchProductItem = async () => {
    setIsLoading(true);

    const resProductItem = await getProductItem();
    setProducts(resProductItem);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProductItem();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const openAddProduct = () => {
    navigate("/produk-form");
  };

  return (
    <>
      <section id="produk" className="mt-4">
        <div className="produk-button">
          <button onClick={openAddProduct}>Tambah Produk</button>
        </div>
        <div className="section-content">
          <table className="table table-hover mt-4">
            <thead>
              <tr>
                <TableProduct tableName="Nama Produk" />
                <TableProduct tableName="Harga" />
                <TableProduct tableName="Stok Produk" />
                <TableProduct tableName="Action" />
              </tr>
            </thead>
            <tbody>
              {products.slice(startIndex, endIndex).map((product, index) => {
                return <ProductItem key={index} product={product} />;
              })}
            </tbody>
          </table>

          <Loader isShow={isLoading} />

          <ul className="pagination justify-content-end gap-3 m-3">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            <li
              className={`page-item ${
                endIndex >= products.length ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProdukContent;
