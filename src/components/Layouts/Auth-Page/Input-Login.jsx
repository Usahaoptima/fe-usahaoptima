import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Login } from "../../../services/Auth-Services";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

import React from "react";

function InputLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handlePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

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

    if (!username && !email && !password) {
      MySwal.fire({
        icon: "error",
        title: "Login Gagal",
        text: "Data Belum lengkap, mohon check lagi",
      });
      return;
    }

    const dataLogin = {
      username: username,
      password: password,
    };

    const resLogin = await Login(dataLogin);

    console.log(resLogin.statusCode);

    if (resLogin.statusCode === 200) {
      MySwal.fire({
        icon: "success",
        title: "Login berhasil",
        text: resLogin.message,
      }).then(() => {
        Cookies.set("access_token", resLogin.data.access_token);
        window.location.href = "/dashboard";
      });
      setUsername("");
      setPassword("");
    }
    if (resLogin.statusCode === 400) {
      MySwal.fire({
        icon: "error",
        title: "Login Gagal",
        text: resLogin.message,
      });
    }

    if (resLogin.statusCode === 401) {
      MySwal.fire({
        icon: "error",
        title: "Login Gagal",
        text: resLogin.message,
      });
    }

    if (resLogin.statusCode === 500) {
      MySwal.fire({
        icon: "error",
        title: "Login Gagal",
        text: resLogin.message,
      });
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center login">
        <form
          id="form"
          className="form "
          onSubmit={handlerSubmit}
          style={{ width: "500px" }}
        >
          <div className="text-center">
            <img
              src="assets/img/register/avatar.svg"
              alt="avatar"
              style={{ width: "100px" }}
            />
            <h1 className="auth mt-3">Login</h1>
          </div>
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
          <button
            type="submit"
            className="btn btn-primary mt-3 col-12 button-auth"
          >
            Login
          </button>

          <div className="mt-3 mr-3 text-right register">
            <Link to="/" className="link-text my-3">
              Lupa Password?
            </Link>
          </div>
          <hr />

          <Link to="/register" style={{ textDecoration: "none" }}>
            <button className="btn btn-primary mt-2 col-12 mb-5 button-auth">
              Buat Akun Baru
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default InputLogin;
