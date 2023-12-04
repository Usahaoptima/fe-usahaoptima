/* eslint-disable react/prop-types */
const ButtonSidebar = (props) => {
  const { image, title, active } = props;

  const buttonStyle = {
    backgroundColor: active ? "#146c94" : "",
    color: active ? "#ffffff" : "",
  };

  const imgStyle = {
    filter: active ? "invert(50%) brightness(200%)" : "",
  };

  return (
    <>
      <li className={`nav-item mb-2 ${active ? "active" : ""}`}>
        <div
          className="nav-link collapsed"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
          style={buttonStyle}
        >
          <img src={image} className="me-1" style={imgStyle} />
          <span>{title}</span>
        </div>
      </li>
    </>
  );
};

export default ButtonSidebar;
