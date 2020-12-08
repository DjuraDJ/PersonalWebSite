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
              <FrontSide id = "FrontCard">
         C++ Projects 
        </FrontSide>
        <BackSide id = "BackCard">
          Employee Database 
        </BackSide>
      
       
          



      </Flippy>

            
              );
    }
}
 
export default CardProject;