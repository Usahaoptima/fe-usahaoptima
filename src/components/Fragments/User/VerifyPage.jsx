import { useState, Fragment, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function VerifyPage() {
  const [validUrl, setValidUrl] = useState("loading");
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:3000/api/v1/auth/${param.id}/verify/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl("true");
      } catch (error) {
        console.log(error);
        setValidUrl("false");
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center verification wrapper-full">
      <Fragment>
        {validUrl == "loading" ? (
          <>
            <img src="/assets/img/register/loading.gif" alt="success" />
            <h1 className="label-filter big">Loading......</h1>
          </>
        ) : validUrl == "true" ? (
          <>
            <img src="/assets/img/register/success.gif" alt="success" />
            <h1 className="label-filter big">Account Verified</h1>
            {(window.location.href = "/login")}
          </>
        ) : (
          <>
            <img src="/assets/img/register/error.gif" alt="error" />
            <h1 className="label-filter big">Invalid Link</h1>
          </>
        )}
      </Fragment>
    </div>
  );
}

export default VerifyPage;
