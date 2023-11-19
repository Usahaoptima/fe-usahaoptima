import { useEffect, useState } from "react";
import MenuContent from "../components/Layouts/Education/Menu-Content";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import Header from "../components/Layouts/Dashboard/Header";
import Footer from "../components/Layouts/Dashboard/Footer";

const Edukasi = () => {
  const apiUrl =
    "https://652a65c84791d884f1fce0bd.mockapi.io/usahaoptima/api/article";
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          console.error("Gagal mengambil data artikel.");
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <main className="bg-white">
        <Sidebar />
        <section id="dashboard">
          <Header />
          <MenuContent articles={articles} />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Edukasi;
