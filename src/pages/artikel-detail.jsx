// ArticleDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleContent from "../components/Layouts/Education/Article-Content";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import Header from "../components/Layouts/Dashboard/Header";
import Footer from "../components/Layouts/Dashboard/Footer";

const ArticleDetail = () => {
  const { id } = useParams();
  const apiUrl = `https://652a65c84791d884f1fce0bd.mockapi.io/usahaoptima/api/article/${id}`;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data) {
          setArticle(data);
        } else {
          console.error("Gagal mengambil data artikel.");
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    };

    fetchArticle();
  }, [apiUrl]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main className="bg-white">
        <Sidebar />
        <section id="dashboard">
          <Header />
          <ArticleContent article={article} />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default ArticleDetail;
