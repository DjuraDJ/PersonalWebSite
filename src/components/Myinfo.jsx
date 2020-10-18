/* Author: Djura Djurickovic 
    Date: 10/4/2020
    Purpose: The purpose of this react app is to demonstration of skills with reactjs
*/
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Text from "react-text-typing";
import "../indexStyle.css";

import {
  faCss3,
  faJava,
  faJs,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { Scrambler, Cycler } from "react-text-scrambler";
import { List } from "react-content-loader";
{
  /* Displays h1 tag of name with effects of sliding accross screen, as well use of Text and Scrambler componet  */
}
function Myinfo() {
  return (
    <div>
      <div class="name">
        <Text
          class="text-0-2-1 text-d0-0-2-6"
          text="Djura Djurickovic "
          showblink={true}
          componet="h1"
        />
      </div>
      <div class="about">
        <Scrambler
          text="Graduate of the Computer Systems Technician-Software Support Diploma Program
         at Mohawk College with 2+ years’ experience in Software development."
        />
        <br />
        <Scrambler text="In designing/developing/implementation/analysis and testing across multiple environments.As self-started who works well both independently and as part of a team." />
      </div>
      <br />
    </div>
  );
}
export default Myinfo;
