import React from "react";
import HeaderRegisterPage from "../components/Layouts/Register-Page/Header-Register-Page";
import ImageContent from "../components/Layouts/Register-Page/Image-Content";
import FormContent from "../components/Layouts/Register-Page/Form-Content";
import "../../public/assets/css/RegisterPage.css";

function registerpage() {
  return (
    <>
      <HeaderRegisterPage />
      <div className="container mt-5 pt-5">
        <div className="row">
          <ImageContent />
          <FormContent />
        </div>
      </div>
    </>
  );
}

export default registerpage;
