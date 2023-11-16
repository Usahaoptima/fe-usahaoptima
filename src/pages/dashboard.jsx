import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import DashboardContent from "../components/Layouts/Dashboard/Dashboard-Content";
import Footer from "../components/Layouts/Dashboard/Footer";

const dashboard = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard">
          <Header />
          <DashboardContent />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default dashboard;
