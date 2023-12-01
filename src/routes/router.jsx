import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/dashboard";
import Produk from "../pages/produk";
import Penjualan from "../pages/penjualan";
import Edukasi from "../pages/edukasi";
import BiayaOperasional from "../pages/biaya-operasional";
import Laporan from "../pages/laporan-keuangan";
import PengaturanUser from "../pages/pengaturan-user";
import LandingPage from "../pages/landing-page";
import RegisterPage from "../pages/register-page";
import LoginPage from "../pages/login-page";
import ProductForm from "../pages/produk-form";
import ProductEdit from "../pages/produk-edit-form";
import MenuEdukasi from "../pages/artikel-menu";
import ArticleDetail from "../pages/artikel-detail";
import VerifyPage from "../pages/verify-page";
import PenjualanForm from "../pages/penjualan-form";
import PenjualanEdit from "../pages/penjualan-edit-form";
import UserForm from "../pages/tambah-user";
import SettingUser from "../pages/setting-user";
import LaporanKeuangan from "../pages/laporan-keuangan";
import LaporanStok from "../pages/stok";
import LaporanBulanan from "../pages/laporan-bulanan";
import DetailProduksi from "../pages/detail-produksi";
import DetailProduksiForm from "../pages/detail-produksi-form";
import DetailKaryawan from "../pages/detail-karyawan";
import DetailKaryawanForm from "../pages/detail-karyawan-form";
import DetailToko from "../pages/detail-toko";
import DetailTokoForm from "../pages/detail-toko-form";

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
        <Route path="/user-setting" element={<SettingUser />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/produk-form" element={<ProductForm />} />
        <Route path="/produk-edit-form/:id" element={<ProductEdit />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/manajemen-keuangan" element={<MenuEdukasi />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/user/:id/verify/:token" element={<VerifyPage />} />
        <Route path="/penjualan-form" element={<PenjualanForm />} />
        <Route path="/penjualan-edit-form/:id" element={<PenjualanEdit />} />
        <Route path="/laporan-keuangan" element={<LaporanKeuangan />} />
        <Route path="/laporan-keuangan/:month" element={<LaporanBulanan />} />
        <Route path="/laporan-stok" element={<LaporanStok />} />
        <Route path="/detail-produksi" element={<DetailProduksi />} />
        <Route path="/detail-produksi-form" element={<DetailProduksiForm />} />
        <Route path="/detail-karyawan" element={<DetailKaryawan />} />
        <Route path="/detail-karyawan-form" element={<DetailKaryawanForm />} />
        <Route path="/detail-toko" element={<DetailToko />} />
        <Route path="/detail-toko-form" element={<DetailTokoForm />} />
      </Routes>
    </>
  );
};

export default AppRouter;
