import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((links, index)=>{
    return <a href={`#${links}`} key={index}>{links}</a>
  }
  )
  return <nav>
   {linkElements}
  </nav>;
}

export default NavBar;

