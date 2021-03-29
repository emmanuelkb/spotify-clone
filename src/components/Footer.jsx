import Logo from "./Logo";
import FooterBlockNav from "./FooterBlockNav";
import FooterIcons from "./FooterIcons";
import "./Footer.css";
import FooterItems from "./FooterItems";
const Footer = () => {
  return (
    <footer className="Footer">
      <Logo />
      <FooterBlockNav />
      <FooterIcons />
    </footer>
  );
};

export default Footer;
