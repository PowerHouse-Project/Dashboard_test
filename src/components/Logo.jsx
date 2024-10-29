import "../css/logo.css";

const Logo = () => {
  const handleToggleSideBar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };

  return (
    <div className="flex items-center justify-center">
      <a href="/" className="logo flex items-center">
        <span className="font-jetBrainsExtraBold text-main-light-blue-dark text-[26px]">
          PowerHouse
        </span>
      </a>
      <i
        className="bi bi-list toggle-sidebar-btn text-main-light-blue-dark"
        onClick={handleToggleSideBar}
      ></i>
    </div>
  );
};

export default Logo;
