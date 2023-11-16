function AboutSection() {
  return (
    <div className="container-fluid" id="about">
      <div className="row">
        <div className="col-md-7 col-sm-6 px-0">
          <img
            src="../src/assets/img/landing-page/image-content2.svg"
            alt="image"
            className="img-fluid"
          />
        </div>
        <div className="col-md-5 col-sm-6 px-0 d-flex align-content-center flex-wrap text-center">
          <div className="content-right">
            <p className="title-first">ANYTIME</p>
            <p className="title-second">ANYWHERE</p>
            <p className="paragraf">
              Temukan solusi terbaik untuk pengaturan dan optimalisasi keuangan
              pribadi atau bisnis Anda. Kami menyediakan panduan, tips, dan
              informasi terbaru untuk membuat keputusan keuangan yang bijak.
              Bergabunglah dengan komunitas kami dan mulai mengelola keuangan
              Anda dengan lebih baik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
