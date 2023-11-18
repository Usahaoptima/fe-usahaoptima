import { Link } from "react-router-dom";

function ImageLogin() {
  return (
    <>
      <div className="col-md-6 col-md-6 d-flex align-items-center">
        <div className="text-wrapper">
          <h2>Login ke</h2>
          <p>USAHAOPTIMA</p>
          <span className="mt-3">
            Pertama kali menggunakan ini?{" "}
            <Link to="/register" className="link-text">
              Buat Akun
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default ImageLogin;
