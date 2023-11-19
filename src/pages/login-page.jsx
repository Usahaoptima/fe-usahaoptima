import React from "react";
import HeaderRegisterPage from "../components/Layouts/Auth-Page/Header-Register-Page";
import "../../public/assets/css/RegisterPage.css";
import ImageContent from "../components/Layouts/Auth-Page/Image-Content-Login";
import InputLogin from "../components/Layouts/Auth-Page/Input-Login";
function registerpage() {
  return (
    <>
      <div className="image-pseudo mt-0">
        <HeaderRegisterPage />
        <div className="container mt-5 pt-5">
          <div className="row">
            <ImageContent />
            <InputLogin />
          </div>
        </div>
      </div>
    </>
  );
}

export default registerpage;
