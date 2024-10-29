import "../css/header.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <header id="header" className="header flex items-center fixed-top">
      {/* {logo} */}
      <Logo />

      {/* {search} */}
      
    </header>
  );
};

export default Header;
