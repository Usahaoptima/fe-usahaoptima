import React from "react";

function AboutSection() {
  return (
    <div class="container-fluid px-0" id="about">
      <div class="row">
        <div class="col-md-6 col-sm-6">
          <img
            src="../src/assets/img/landing-page/image-content2.svg"
            alt="image"
            class="img-fluid"
          />
        </div>
        <div class="col-md-6 col-sm-6 d-flex align-content-center flex-wrap text-center">
          <div class="content-right">
            <p class="title-first">ANYTIME</p>
            <p class="title-second">ANYWHERE</p>
            <p class="paragraf">
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
