/* eslint-disable jsx-a11y/anchor-is-valid */
const CardFilter = ({ filterChange }) => {
  return (
    <div className="filter">
      <a href="#" className="icon pl-3" data-bs-toggle="dropdown">
        <i className="bi bi-three-dots"></i>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <li className="dropdown-header text-start font-jetBrains text-[20px]">
          <h6>Filter</h6>
        </li>
        <li>
          <a className="dropdown-item font-jetBrains text-[13px]" onClick={() => filterChange("Today")}>
            Today
          </a>
        </li>
        <li>
          <a
            className="dropdown-item font-jetBrains text-[13px]"
            onClick={() => filterChange("This Month")}
          >
            This Month
          </a>
        </li>
        <li>
          <a
            className="dropdown-item font-jetBrains text-[13px]"
            onClick={() => filterChange("This Year")}
          >
            This Year
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CardFilter;
