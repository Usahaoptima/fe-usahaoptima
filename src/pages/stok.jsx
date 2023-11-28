import TitleTable from "../components/Elements/Title-Table";
import Footer from "../components/Layouts/Dashboard/Footer";
import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import LaporanStok from "../components/Layouts/Laporan/Laporan-Stok";

const ProductEditForm = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <TitleTable name="Laporan Stok" />
          <LaporanStok />
          <hr className="hr" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default ProductEditForm;
