import { useState, Fragment, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function VerifyPage() {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();
  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:5000/api/user/verify/${param.id}/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center verification">
      <Fragment>
        {validUrl ? (
          <>
            <img src="/assets/img/register/success.gif" alt="success" />
            <h1>Account Verified</h1>
            {(window.location.href = "/login")}
          </>
        ) : (
          <>
            <img src="/assets/img/register/error.gif" alt="error" />
            <h1>Invalid Link</h1>
          </>
        )}
      </Fragment>
    </div>
  );
}

export default VerifyPage;
