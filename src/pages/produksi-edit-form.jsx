import Footer from "../components/Layouts/Dashboard/Footer";
import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import EditFormProduksi from "../components/Layouts/Operational-Cost/Edit-Form-Produksi";

const ProduksiEditForm = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <EditFormProduksi />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default ProduksiEditForm;
