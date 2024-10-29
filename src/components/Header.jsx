import "../css/header.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header id="header" className="header flex items-center fixed-top">
      {/* {logo} */}
      <Logo />

      {/* {search} */}
      <SearchBar />
    </header>
  );
};

export default Header;
