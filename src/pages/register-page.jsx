import React from "react";
import HeaderRegisterPage from "../components/Layouts/Auth-Page/Header-Register-Page";
import ImageContent from "../components/Layouts/Auth-Page/Image-Content";
import FormContent from "../components/Layouts/Auth-Page/Form-Content";
import "../../public/assets/css/RegisterPage.css";

function registerpage() {
  return (
    <>
      <div className="image-pseudo mt-0">
        <HeaderRegisterPage />
        <div className="container mt-5 pt-5">
          <div className="row">
            <ImageContent />
            <FormContent />
          </div>
        </div>
      </div>
    </>
  );
}

export default registerpage;
