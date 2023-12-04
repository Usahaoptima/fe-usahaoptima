import { Link } from "react-router-dom";

function ImageContent() {
  return (
    <>
      <div className="col-md-6 col-md-6 d-flex align-items-center">
        <div className="text-wrapper">
          <h2 className="auth">Daftar ke</h2>
          <p>USAHAOPTIMA</p>
          <span className="mt-3">
            Sudah punya akun?
            <Link to="/login" className="link-text">
              Login
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default ImageContent;
