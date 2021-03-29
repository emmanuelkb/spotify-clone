import NavigationItems from "./NavigationItems";
const Navigation = () => {
  return (
    <ul className="links">
      <NavigationItems name="Premium" />
      <NavigationItems name="Support" />
      <NavigationItems name="Download" />
      <p>| </p>
      <NavigationItems name="Sign Up" />
      <NavigationItems name="Log in" />
    </ul>
  );
};

export default Navigation;
