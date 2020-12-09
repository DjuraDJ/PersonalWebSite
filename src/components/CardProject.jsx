import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


class CardProject extends Component {
    state = {  }
    render() {
       
    

        return (
        
        <Flippy
            class = "CardProj" 
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
          >
        <FrontSide id = "FrontCardProject1">
         C++ Projects 
        </FrontSide>
        <BackSide id = "BackCardProject1">
          Employee Database 
        </BackSide>

        <FrontSide id = "FrontCardProject2">
          Java Projects 
        </FrontSide>
        <BackSide id = "BackCardProject2">
          AmazeBot 
        </BackSide>
           
        <FrontSide id = "FrontCardProject3">
          REACT Projects 
        </FrontSide>
        <BackSide id = "BackCardProject3">
          Personal WebSite 
        </BackSide>

      </Flippy>


      



            
              );
    }
}
 
export default CardProject;