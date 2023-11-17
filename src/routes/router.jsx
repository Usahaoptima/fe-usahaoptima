import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/dashboard";
import Produk from "../pages/produk";
import Penjualan from "../pages/penjualan";
import Edukasi from "../pages/edukasi";
import BiayaOperasional from "../pages/biaya-operasional";
import Laporan from "../pages/laporan";
import Pengaturan from "../pages/pengaturan";
import LandingPage from "../pages/landing-page";
import RegisterPage from "../pages/register-page";
import ProductForm from "../pages/produk-form";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/penjualan" element={<Penjualan />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/biaya-operasional" element={<BiayaOperasional />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/pengaturan" element={<Pengaturan />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/produk-form" element={<ProductForm />} />
      </Routes>
    </>
  );
};

export default AppRouter;
