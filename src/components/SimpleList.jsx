import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
/* Author: Djura Djurickovic 
    Date: 10/4/2020
    Purpose: The purpose of this react app is to demonstration of skills with reactjs
*/
import React, { Component } from "react";
import "../indexStyle.css";

import { useDencrypt } from "use-dencrypt-effect";
import { text } from "@fortawesome/fontawesome-svg-core";

/* An array of strings then use of list to create list*/

class SimpleList extends Component {
  render() {
    const programmingList = [
      { description: "Java", key: 1 },
      { description: "C/C++" },
      { description: "JavaScript" },
      { description: "Html5/Css3" },
      { description: "ASP.Net" },
      { description: "React" },
    ];
    const prgrmTitle = [{ description: "Programming Languages: " }];

    const prgmlist2 = [
      { description: "PhP", key: 2 },
      { description: "ASP.Net" },
      { description: "SQL" },
      { description: "VBA/VB.Net" },
      { description: "XML/JSON" },
      { description: "Cobol" },
    ];

    return (
      <div>
        {prgrmTitle.map((title) => {
          return (
            <h2 class="pl" key={title.key}>
              {title.description}
            </h2>
          );
        })}

        <ol
          style={{
            display: "line-block",
            listStyle: "none",
            overflow: "none",
            height: "110px",
            width: "250px",
            paddingLeft: "38%",
          }}
        >
          {programmingList.map((programming) => {
            return <li key={programming.key}>{programming.description}</li>;
          })}
        </ol>

        <ol class="pl1">
          {prgmlist2.map((programming2) => {
            return (
              <li id="pl2" key={programming2.key}>
                {programming2.description}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default SimpleList;
