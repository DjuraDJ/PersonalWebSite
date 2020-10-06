/* Author: Djura Djurickovic 
    Date: 10/4/2020
    Purpose: The purpose of this react app is to demonstration of skills with reactjs
*/
import { ReactNavbar } from "react-responsive-animate-navbar";
import React, { Component } from "react";
import { icon } from "@fortawesome/fontawesome-svg-core";
{
  /* Use of ReactNavbar component to manage menu as well as social media links*/
}
const Navbar = () => {
  return (
    <div class="navbar">
      <ReactNavbar
        color="black"
        menu={[
          { name: "HOME", to: "/" },
          { name: "ABOUT ME", to: "/about" },
          { name: "CONTACT", to: "/contact" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com",
            icon: ["fab", "facebook"],
          },
          {
            name: "Twitter",
            url: "https://www.twitter.com",
            icon: ["fab", "twitter"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com",
            icon: ["fab", "instagram"],
          },
        ]}
      />
    </div>
  );
};

export default Navbar;
