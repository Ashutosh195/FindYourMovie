import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 FIND  YOUR  MOVIE🎥
    </span>
  );
};

export default Header;
