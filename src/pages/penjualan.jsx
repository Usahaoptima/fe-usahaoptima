import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import TitleTable from "../components/Elements/Title-Table";
import Footer from "../components/Layouts/Dashboard/Footer";
import PenjualanContent from "../components/Layouts/Penjualan/Penjualan-Content";

const penjualan = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <TitleTable name="Data Penjualan" />
          <PenjualanContent />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default penjualan;
