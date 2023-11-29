import { useNavigate } from "react-router-dom";

function HeaderRegisterPage() {
  const navigate = useNavigate();

  const HandleLogo = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img
            src="assets/img/register/logo.svg"
            alt="logo"
            height="70"
            onClick={HandleLogo}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderRegisterPage;
