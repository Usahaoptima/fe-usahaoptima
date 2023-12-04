import Footer from "../components/Layouts/Dashboard/Footer";
import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import TitleTable from "../components/Elements/Title-Table";
import TableKaryawan from "../components/Layouts/Operational-Cost/Table-Karyawan";

const DetailKaryawan = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <TitleTable name="Pembiayaan Karyawan" />
          <TableKaryawan />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default DetailKaryawan;
