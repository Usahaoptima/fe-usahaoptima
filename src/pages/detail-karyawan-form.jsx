import Footer from "../components/Layouts/Dashboard/Footer";
import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import CreateFormKaryawan from "../components/Layouts/Operational-Cost/Create-Form-Karyawan";

const DetailKaryawanForm = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <CreateFormKaryawan />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default DetailKaryawanForm;
