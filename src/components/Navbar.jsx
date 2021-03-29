import Navigation from "./Navigation";
import "./Navbar.css";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Logo />
        <Navigation />
      </div>
    </nav>
  );
};
export default Navbar;
