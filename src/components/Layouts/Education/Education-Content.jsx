import CardEducation from "../../Fragments/Education/Card-Education";

const EducationContent = () => {
  return (
    <div className="container main-container mt-5">
      <div className="row edu-section">
        <h1>Edukasi</h1>
        <h2>Pengetahuan untuk Pertumbuhan Bisnis Anda</h2>
        <div className="row edu-content">
          <CardEducation
            imageSrc="assets/img/education/money.png"
            altText="Manajemen Keuangan"
            title="Manajemen Keuangan"
            description="Pahami cara cerdas mengelola finansial bisnis UMKM Anda dengan panduan praktis dan wawasan tentang manajemen keuangan."
          />
          <CardEducation
            imageSrc="assets/img/education/ads.png"
            altText="Pemasaran Digital"
            title="Pemasaran Digital"
            description="Kembangkan jejak digital bisnis Anda. Pelajari strategi pemasaran online, optimalkan media sosial, dan tingkatkan visibilitas brand Anda."
          />
          <CardEducation
            imageSrc="assets/img/education/law.png"
            altText="Perizinan Bisnis"
            title="Perizinan Bisnis"
            description="Kelola perizinan bisnis dengan mudah. Temukan panduan langkah demi langkah, formulir, dan informasi penting untuk menjalankan bisnis Anda."
          />
        </div>
      </div>
    </div>
  );
};

export default EducationContent;
