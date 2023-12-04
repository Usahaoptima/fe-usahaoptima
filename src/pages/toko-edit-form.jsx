import Footer from "../components/Layouts/Dashboard/Footer";
import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import EditFormToko from "../components/Layouts/Operational-Cost/Edit-Form-Toko";

const TokoEditForm = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <EditFormToko />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default TokoEditForm;
