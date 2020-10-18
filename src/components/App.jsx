/* Author: Djura Djurickovic 
    Date: 10/4/2020
    Purpose: The purpose of this react app is to demonstration of skills with reactjs
*/
import React from "react";
//import Footer from "./Footer";
//import Navbar from "./Navbar";
//import MainContent from "./MainContent";
import Header from "./Header";
import Myinfo from "./Myinfo";
import Navbar from "./Navbar";
import SimpleList from "./SimpleList";



import "../indexStyle.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <Header /> {/* Image display */}
      <Navbar /> {/* Nav bar */}
      <Myinfo /> {/* my information about  */}
      <SimpleList /> {/* List of all programming languages */}
    
    </div>
  );
}

export default App;
