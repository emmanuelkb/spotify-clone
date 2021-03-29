import React from "react";
import { NavLink } from "react-router-dom";
const NavigationItems = (props) => {
  let navlinkholder = props.name;
  let navedit = navlinkholder.split(" ").join("").toLowerCase();
  return (
    <li>
      <NavLink to={`/${navedit}`}>{props.name}</NavLink>
      {/* <a href="">{props.name}</a> */}
    </li>
  );
};
export default NavigationItems;
