import Footer from "../components/Layouts/Dashboard/Footer";
import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import TableToko from "../components/Layouts/Operational-Cost/Table-Toko";
import TitleTable from "../components/Elements/Title-Table";

const DetailProduksi = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <TitleTable name="Pembiayaan Toko" />
          <TableToko />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default DetailProduksi;
