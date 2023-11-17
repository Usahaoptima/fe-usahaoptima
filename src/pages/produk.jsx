import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import ProdukContent from "../components/Layouts/Product/Product-Content";
import Footer from "../components/Layouts/Dashboard/Footer";

const produk = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <ProdukContent />
          <hr className="hr" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default produk;
