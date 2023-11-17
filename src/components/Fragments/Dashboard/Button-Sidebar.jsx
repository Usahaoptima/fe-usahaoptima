/* eslint-disable react/prop-types */
const ButtonSidebar = (props) => {
  const { image, title } = props;
  return (
    <>
      <li className="nav-item mb-2">
        <div
          className="nav-link collapsed"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <img src={image} className="me-1" />
          <span>{title}</span>
        </div>
      </li>
    </>
  );
};

export default ButtonSidebar;
