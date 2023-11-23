import Footer from "../components/Layouts/Dashboard/Footer";
import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import PenjualanCreate from "../components/Layouts/Penjualan/Penjualan-Create";

const ProductForm = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <PenjualanCreate />
          <hr className="hr" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default ProductForm;
