import React, { useState, useEffect } from "react";
import CardDashboard from "../../Fragments/Dashboard/Card-Dashboard";
import { getProductItem } from "../../../services/Product-Services";

const LaporanStok = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsFromProdukContent = async () => {
      const productsFromProdukContent = await getProductItem();
      setProducts(productsFromProdukContent);
    };

    fetchProductsFromProdukContent();
  }, []);

  const formatRupiah = (harga) => {
    return `Rp ${harga.toLocaleString("id-ID")}`;
  };

  const toPascalCase = (str) => {
    return str.replace(/\w+/g, function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  };

  return (
    <>
      <div className=" dashboard-card" style={{ height: "100vh" }}>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {products.map((product, index) => (
            <CardDashboard
              key={index}
              title={toPascalCase(product.product_name)}
              description={`Harga: ${formatRupiah(product.price)}`}
              quantity={`Quantity: ${product.quantity} Pcs`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LaporanStok;
