import { useEffect, useState } from "react";
import { Register } from "../../../services/Auth-Services";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function FormContent() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmedVisible, setConfirmedVisible] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");

  useEffect(() => {
    const access_token = document.cookie.replace(
      /(?:(?:^|.*;\s*)access_token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    if (access_token) {
      window.location.href = "/dashboard";
    }
  }, [history]);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const uppercase = /[A-Z]/;
    const digit = /\d/;
    const symbol = /[^A-Za-z0-9]/;
    const lowercasePassword = password.toLowerCase();
    const lowercaseConfirmed = passwordValidation.toLowerCase();

    if (
      !username ||
      !email ||
      !password ||
      !passwordValidation ||
      !businessName ||
      !businessType ||
      !businessDescription
    ) {
      MySwal.fire({
        icon: "error",
        title: "Registrasi Gagal",
        text: "Data Belum lengkap, mohon check lagi",
      });
      return;
    }

    if (
      !uppercase.test(password) ||
      !digit.test(password) ||
      !symbol.test(password)
    ) {
      MySwal.fire({
        icon: "error",
        title: "Registrasi Gagal",
        text: "Password Harus berisikan minimal 1 huruf kapital, numerik dan symbol",
      });
      setPassword("");
      setPasswordValidation("");
      return;
    }

    if (lowercasePassword !== lowercaseConfirmed) {
      MySwal.fire({
        icon: "error",
        title: "Registrasi Gagal",
        text: "Password Tidak Sama",
      });
      setPassword("");
      setPasswordValidation("");
      return;
    }

    const data = {
      username: username,
      password: password,
      email: email,
      business_name: businessName,
      business_type: businessType,
      business_description: businessDescription,
    };

    try {
      const resRegister = await Register(data);
      console.log(resRegister.statusCode);

      if (resRegister.statusCode === 401) {
        MySwal.fire({
          icon: "error",
          title: "Register gagal",
          text: resRegister.message,
        });
      }

      if (resRegister.statusCode === 400) {
        MySwal.fire({
          icon: "error",
          title: "Register gagal",
          text: resRegister.message,
        });
      }

      if (resRegister.statusCode === 500) {
        MySwal.fire({
          icon: "error",
          title: "Register gagal",
          text: resRegister.message,
        });
      }

      if (resRegister.statusCode === 201) {
        MySwal.fire({
          icon: "success",
          title: "Registrasi Berhasil, silahkan verifikasi email anda",
          text: resRegister.data.message,
        }).then(() => {
          // Redirect ke halaman login setelah menutup SweetAlert
          window.location.href = "/login";
        });
      }
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "Gagal Mendaftar",
        text: error,
      });
    }
  };

  const handlePasswordVisible = (field) => {
    if (field === "password") {
      setPasswordVisible(!passwordVisible);
    } else if (field === "confirmed") {
      setConfirmedVisible(!confirmedVisible);
    }
  };
  return (
    <>
      <div className="col-md-6 mt-md">
        <form onSubmit={handlerSubmit} className="form">
          <h2 className="auth">Daftar</h2>
          <div className="form-group mt-5">
            <input
              type="text"
              className="form-control inputs"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              autoComplete="username"
              required
            />
          </div>

          <div className="form-group mt-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control inputs"
              placeholder="Email"
              autoComplete="email@auto.complete"
              required
            />
          </div>

          <div className="form-group mt-5">
            <div className="input-group">
              <input
                type={passwordVisible ? "text" : "password"}
                className="form-control inputs"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                minLength="8"
                maxLength="16"
                autoComplete="new-password"
                required
              />
              <div className="input-group-append">
                <span
                  className="input-group-text bg-light"
                  id="toggle-password"
                  onClick={() => handlePasswordVisible("password")}
                >
                  <i
                    className={
                      passwordVisible ? "fa fa-eye-slash" : "fa fa-eye"
                    }
                    id="toggle-icon"
                  ></i>
                </span>
              </div>
            </div>
          </div>

          <div className="form-group mt-5">
            <div className="input-group">
              <input
                type={confirmedVisible ? "text" : "password"}
                id="confirmed"
                className="form-control inputs"
                value={passwordValidation}
                onChange={(e) => setPasswordValidation(e.target.value)}
                placeholder="Konfirmasi Password"
                minLength="8"
                autoComplete="new-password"
                maxLength="16"
                required
              />
              <div className="input-group-append">
                <span
                  className="input-group-text bg-light"
                  id="toggle-password-confirm"
                  onClick={() => handlePasswordVisible("confirmed")}
                >
                  <i
                    className={
                      confirmedVisible ? "fa fa-eye-slash" : "fa fa-eye"
                    }
                    id="toggle-icon-confirm"
                  ></i>
                </span>
              </div>
            </div>
          </div>

          <div className="form-group mt-5">
            <input
              id="businessName"
              type="text"
              className="form-control inputs"
              placeholder="Nama Bisnis"
              value={businessName}
              required
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>
          <div className="form-group mt-5">
            <select
              id="business_type"
              className="form-control inputs"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              required
            >
              <option value="">Click Untuk Memilih</option>
              <option value="jasa">Jasa</option>
              <option value="barang">Barang</option>
            </select>
          </div>

          <div className="form-group mt-5">
            <label htmlFor="business_description" className="label-auth">
              Desripsikan Bisnis Mu
            </label>
            <textarea
              name="business_description"
              id="business_description"
              cols="30"
              rows="10"
              className="form-control inputs"
              value={businessDescription}
              onChange={(e) => setBusinessDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block mt-5 mb-5 col-12 button-auth"
          >
            Daftar
          </button>
        </form>
      </div>
    </>
  );
}

export default FormContent;
