import Footer from "../components/Layouts/Dashboard/Footer";
import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import ProductEdit from "../components/Layouts/Product/Product-Edit";

const ProductEditForm = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <ProductEdit />
          <hr className="hr" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default ProductEditForm;
