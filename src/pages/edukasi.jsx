import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import Footer from "../components/Layouts/Dashboard/Footer";
import EducationContent from "../components/Layouts/Education/Education-Content";

const EducationPage = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard">
          <Header />
          <EducationContent />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default EducationPage;
