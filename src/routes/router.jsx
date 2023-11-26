import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/dashboard";
import Produk from "../pages/produk";
import Penjualan from "../pages/penjualan";
import Edukasi from "../pages/edukasi";
import BiayaOperasional from "../pages/biaya-operasional";
import Laporan from "../pages/laporan";
import PengaturanUser from "../pages/pengaturan-user";
import LandingPage from "../pages/landing-page";
import RegisterPage from "../pages/register-page";
import LoginPage from "../pages/login-page";
import ProductForm from "../pages/produk-form";
import ProductEdit from "../pages/produk-edit-form";
import MenuEdukasi from "../pages/artikel-menu";
import ArticleDetail from "../pages/artikel-detail";
import VerifyPage from "../components/Fragments/user/VerifyPage";
import PenjualanForm from "../pages/penjualan-form";
import PenjualanEdit from "../pages/penjualan-edit-form";
import UserForm from "../pages/tambah-user";

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
        <Route path="/user-role" element={<PengaturanUser />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/produk-form" element={<ProductForm />} />
        <Route path="/produk-edit-form/:id" element={<ProductEdit />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menu-manajemen-keuangan" element={<MenuEdukasi />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/user/:id/verify/:token" element={<VerifyPage />} />
        <Route path="/penjualan-form" element={<PenjualanForm />} />
        <Route path="/penjualan-edit-form/:id" element={<PenjualanEdit />} />
      </Routes>
    </>
  );
};

export default AppRouter;
