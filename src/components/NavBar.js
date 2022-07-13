import React from "react";
import Links from "./Links";

function NavBar() {
  const links = ["home", "about", "projects"];
  const arrayElements = links.map((link) => {
    return <a key={link} href={"#" + link }>{link}</a>
  })

  return (<nav>{/* display an <a> tag for each link here */}
 {arrayElements}
  
  
  </nav>);
}

export default NavBar;
