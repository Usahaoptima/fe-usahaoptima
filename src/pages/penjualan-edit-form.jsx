import Footer from "../components/Layouts/Dashboard/Footer";
import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import PenjualanEdit from "../components/Layouts/Penjualan/Penjualan-Edit";

const ProductEditForm = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <PenjualanEdit />
          <hr className="hr" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default ProductEditForm;
