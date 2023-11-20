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
      <div className="col-md-6 mt-md">
        <form id="form" className="form " onSubmit={handlerSubmit}>
          <h2 className="auth">Login</h2>
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
            <div className="mt-4 mr-3 text-right register">
              <Link to="/" className="link-text my-3">
                Lupa Password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block mt-5 col-12 button-auth"
          >
            Login
          </button>
        </form>
        <div className="icon-wrapper mt-5 text-center">
          <p className="mt-2 text-center">lanjutkan menggunakan</p>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
            >
              <ellipse
                cx="20.7287"
                cy="19.0703"
                rx="18.1376"
                ry="18.1376"
                fill="url(#paint0_linear_1_41)"
              />
              <path
                d="M27.4832 26.2756L28.2889 21.1563H23.2488V17.8357C23.2488 16.4348 23.9515 15.0685 26.209 15.0685H28.5019V10.7102C28.5019 10.7102 26.4219 10.3643 24.4342 10.3643C20.2815 10.3643 17.5697 12.8167 17.5697 17.2546V21.1563H12.9554V26.2756H17.5697V38.6518C18.4961 38.7936 19.4438 38.8662 20.4092 38.8662C21.3747 38.8662 22.3224 38.7936 23.2488 38.6518V26.2756H27.4832Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_41"
                  x1="20.7287"
                  y1="0.932785"
                  x2="20.7287"
                  y2="37.1003"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#18ACFE" />
                  <stop offset="1" stopColor="#0163E0" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
            >
              <path
                d="M39.3253 21.1316C39.3253 19.6403 39.2018 18.552 38.9346 17.4235H21.5579V24.1544H31.7576C31.5521 25.8272 30.4416 28.3463 27.9739 30.039L27.9393 30.2644L33.4335 34.4355L33.8141 34.4728C37.31 31.3087 39.3253 26.6534 39.3253 21.1316"
                fill="#4285F4"
              />
              <path
                d="M21.5568 38.8663C26.5538 38.8663 30.7488 37.254 33.8129 34.4729L27.9727 30.0392C26.4099 31.1073 24.3123 31.8529 21.5568 31.8529C16.6626 31.8529 12.5086 28.689 11.0279 24.3158L10.8108 24.3339L5.09793 28.6668L5.02322 28.8703C8.06667 34.7953 14.3182 38.8663 21.5568 38.8663Z"
                fill="#34A853"
              />
              <path
                d="M11.029 24.3159C10.6383 23.1874 10.4121 21.9781 10.4121 20.7287C10.4121 19.4791 10.6383 18.27 11.0084 17.1415L10.9981 16.9011L5.21354 12.4986L5.02428 12.5869C3.76992 15.0455 3.05017 17.8065 3.05017 20.7287C3.05017 23.6508 3.76992 26.4117 5.02428 28.8704L11.029 24.3159"
                fill="#FBBC05"
              />
              <path
                d="M21.5569 9.60431C25.0321 9.60431 27.3764 11.0755 28.7131 12.3049L33.9364 7.30694C30.7285 4.38478 26.5539 2.59117 21.5569 2.59117C14.3182 2.59117 8.06669 6.66201 5.02322 12.5869L11.0074 17.1415C12.5087 12.7684 16.6626 9.60431 21.5569 9.60431"
                fill="#EB4335"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default InputLogin;
