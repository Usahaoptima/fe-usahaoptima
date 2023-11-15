/* eslint-disable react/prop-types */
const ButtonSidebar = (props) => {
  const { image, title } = props;
  return (
    <>
      <li className="nav-item mb-2">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <img src={image} className="me-1" />
          <span>{title}</span>
        </a>
      </li>
    </>
  );
};

export default ButtonSidebar;
