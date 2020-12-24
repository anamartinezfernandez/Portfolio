import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Hero from "../Hero/Hero";

const Header = (props) => {

  return (
    <header className="header" role="banner">
      <HeaderMenu displayMenu={props.displayMenu} menuDisplayed={props.menuDisplayed} active= {props.active} toggleMenuIcon={props.toggleMenuIcon}></HeaderMenu>
      <Hero></Hero>
    </header>
  );
};


export default Header;