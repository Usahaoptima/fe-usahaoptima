import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import ProdukContent from "../components/Layouts/Product/Product-Content";
import Footer from "../components/Layouts/Dashboard/Footer";
import TitleTable from "../components/Elements/Title-Table";

const produk = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <TitleTable name="Data Produk" />
          <ProdukContent />
          <hr className="hr" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default produk;
