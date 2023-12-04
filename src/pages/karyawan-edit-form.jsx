import Footer from "../components/Layouts/Dashboard/Footer";
import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import EditFormKaryawan from "../components/Layouts/Operational-Cost/Edit-Form-Karyawan";

const KaryawanEditForm = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <EditFormKaryawan />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default KaryawanEditForm;
