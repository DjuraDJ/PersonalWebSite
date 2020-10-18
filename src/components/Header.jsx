/* Author: Djura Djurickovic 
    Date: 10/4/2020
    Purpose: The purpose of this react app is to demonstration of skills with reactjs
*/
import React from "react";
import "../indexStyle.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
/* use of Carousel component for of images. Ability to interchange images with other images  */

function Header() {
  return (
    <div class="carousel-slide">
      <AliceCarousel autoPlay autoPlayInterval="5000">
        <img
          class="beach"
          src="https://i.pinimg.com/originals/5d/97/b8/5d97b8478ab7fefd6af1b85225640e6d.jpg"
          alt=""
        />
        <img
          class="beach"
          src="https://cdn.wallpapersafari.com/14/33/DwNWfd.jpg"
          alt="Beach"
        />
        <img
          class="beach"
          src="https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"
          alt=""
        />
        <img
          class="beach"
          src="https://www.blue-safari.com/wp-content/uploads/2019/11/beach-calm-clouds-457878.jpg"
          alt=""
        />
      </AliceCarousel>
    </div>
  );
}
export default Header;
