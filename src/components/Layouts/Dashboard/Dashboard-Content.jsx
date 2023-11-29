import Calender from "../../Fragments/Dashboard/Calender";
import CardDashboard from "../../Fragments/Dashboard/Card-Dashboard";
import { useState, useEffect } from "react";
import { getSalesItem } from "../../../services/Penjualan-Services";
import { getProductItem } from "../../../services/Product-Services";

const DashboardContent = () => {
  const [dailyIncome, setDailyIncome] = useState(0);
  const [uniqueCustomers, setUniqueCustomers] = useState(0);
  const [mostSoldProducts, setMostSoldProducts] = useState([]);
  const [remainingStock, setRemainingStock] = useState(0);

  useEffect(() => {
    const fetchDailyData = async () => {
      try {
        const resPenjualanItem = await getSalesItem();
        const resProductItem = await getProductItem();

        const today = new Date().toLocaleDateString();

        // Filter penjualan hanya untuk hari ini
        const salesToday = resPenjualanItem.filter(
          (penjualan) =>
            new Date(penjualan.created_date).toLocaleDateString() === today
        );

        // Hitung total penghasilan harian
        const totalIncome = salesToday.reduce(
          (total, item) => total + item.total_price,
          0
        );

        // Hitung jumlah pelanggan hari ini
        const uniqueCustomersToday = new Set(
          salesToday.map((penjualan) => penjualan.sales_name.toUpperCase())
        ).size;

        const productSalesCount = new Map();
        salesToday.forEach((penjualan) => {
          const product = penjualan.product_name;
          productSalesCount.set(
            product,
            (productSalesCount.get(product) || 0) + penjualan.quantity
          );
        });

        // Temukan produk terlaris
        let maxQuantity = 0;
        let mostSoldProducts = [];

        productSalesCount.forEach((quantity, product) => {
          if (quantity === maxQuantity) {
            mostSoldProducts.push(product);
          } else if (quantity > maxQuantity) {
            mostSoldProducts = [product];
            maxQuantity = quantity;
          }
        });

        // Update remaining stock
        const productStockCount = new Map();
        resProductItem.forEach((product) => {
          productStockCount.set(product.product_name, product.quantity);
        });

        let minStockProduct = "";
        let minStock = Number.MAX_SAFE_INTEGER;

        productStockCount.forEach((quantity, product) => {
          if (quantity < minStock) {
            minStockProduct = product;
            minStock = quantity;
          }
        });

        setDailyIncome(totalIncome);
        setUniqueCustomers(uniqueCustomersToday);
        setMostSoldProducts(mostSoldProducts);
        setRemainingStock({ product: minStockProduct, quantity: minStock });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDailyData();
  }, []);

  const formatRupiah = (harga) => {
    return `Rp ${harga.toLocaleString("id-ID")}`;
  };

  return (
    <>
      <div>
        <section className="m-3 hero">
          <img src="/assets/img/dashboard/hero.png" alt="" />
        </section>

        <section className="ms-3 mt-5 dashboard-description d-flex justify-content-between">
          <div className="d-flex flex-column">
            <h2>Hai Sobat UMKM!!</h2>
            <h3>Sudah Siap Mengatur Usahamu Hari Ini?</h3>
            <h3>Yuk Mulai Mengatur Usahamu</h3>
          </div>
          <div>
            <Calender />
          </div>
        </section>

        <section className="mt-5 d-flex gap-3 justify-content-center dashboard-card">
          <CardDashboard
            image="/assets/img/icons/pemasukan.png"
            title="Pemasukan Hari Ini"
            description={`${new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}`}
            quantity={formatRupiah(dailyIncome)}
          />

          <CardDashboard
            image="/assets/img/icons/stok.png"
            title="Sisa Stok Terkecil"
            description={`${new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}`}
            quantity={
              remainingStock.product
                ? `${remainingStock.product} ${remainingStock.quantity} Pcs.`
                : "Produk belum ada"
            }
          />

          <CardDashboard
            image="/assets/img/icons/jumlah-penjualan.png"
            title="Produk Terlaris Hari Ini"
            description={`${new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}`}
            quantity={
              mostSoldProducts.length > 0
                ? `Item. ${mostSoldProducts.join(", ")}`
                : "Belum ada penjualan"
            }
          />

          <CardDashboard
            image="/assets/img/icons/jumlah-pelanggan.png"
            title="Jumlah Pelanggan Hari Ini"
            description={`${new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}`}
            quantity={
              uniqueCustomers > 0
                ? `Orang. ${uniqueCustomers}`
                : "Belum ada pelanggan"
            }
          />
        </section>
      </div>
    </>
  );
};

export default DashboardContent;
