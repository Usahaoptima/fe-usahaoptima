import React from "react";
import HeaderRegisterPage from "../components/Layouts/Auth-Page/Header-Register-Page";
import "../../public/assets/css/RegisterPage.css";
import ImageContent from "../components/Layouts/Auth-Page/Image-Content-Login";
import InputLogin from "../components/Layouts/Auth-Page/Input-Login";
function registerpage() {
  return (
    <>
      <div className="image-pseudo mt-0" style={{ height: "100vh" }}>
        <HeaderRegisterPage />
        <div className="container p-5">
          <div className="d-flex justify-content-center align-items-center">
            <ImageContent />
            <InputLogin />
          </div>
        </div>
      </div>
    </>
  );
}

export default registerpage;
