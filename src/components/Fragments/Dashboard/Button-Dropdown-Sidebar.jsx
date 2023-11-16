/* eslint-disable react/prop-types */

const ButtonDropdownSidebar = (props) => {
  const {
    id1,
    id2,
    controls,
    image,
    title,
    dropdownImage1,
    dropdownTitle1,
    dropdownImage2,
    dropdownTitle2,
  } = props;
  return (
    <>
      <li className="nav-item">
        <a
          className="nav-link mb-3 d-flex justify-content-between align-items-center"
          data-bs-toggle="collapse"
          href={id1}
          role="button"
          aria-expanded="false"
          aria-controls={controls}
        >
          <div>
            <img src={image} className="me-1" />
            <span>{title}</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </a>
      </li>
      <div className="collapse aside-dropdown" id={id2}>
        <ul className="dropdown-list">
          <li className="pb-3 aside-list">
            <img src={dropdownImage1} className="me-1" />
            <span>{dropdownTitle1}</span>
          </li>
          <li className="pb-3 aside-list">
            <img src={dropdownImage2} className="me-1" />
            <span>{dropdownTitle2}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ButtonDropdownSidebar;
