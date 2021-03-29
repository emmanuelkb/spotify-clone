import FooterItems from "./FooterItems";
const FooterBlockNav = () => {
  return (
    <div className="FooterBlock ">
      <div className="FooterBlockItems col1">
        <FooterItems name="COMPANY" />
        <FooterItems item="About" />
        <FooterItems item="Jobs" />
        <FooterItems item="For the Record" />
      </div>
      <div className="FooterBlockItems col2">
        <FooterItems name="COMMUNITIES" />
        <FooterItems item="For Artists" />
        <FooterItems item="Developers" />
        <FooterItems item="Advertsing" />
        <FooterItems item="Investors" />
        <FooterItems item="Vendors" />
      </div>
      <div className="FooterBlockItems col3">
        <FooterItems name="USEFUL LINKS" />
        <FooterItems item="Support" />
        <FooterItems item="Web Player" />
        <FooterItems item="Free Mobile App" />
      </div>
    </div>
  );
};

export default FooterBlockNav;
