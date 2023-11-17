/* eslint-disable react/prop-types */
const Loader = ({ isShow }) => {
  if (!isShow) {
    return null;
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <div id="loading" className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
