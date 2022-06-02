import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Logo from "../img/logo_white_simple.svg";
import Garden from "../img/image-garden-dark.jpg";
//import translations from "../translations";
//const { language, data } = this.props;
import LanguageSelector from "./LanguageSelector";
import { Waypoint } from 'react-waypoint';


//import { colors } from "../styles/globals";
const InTouch = styled.div`
  padding: 0;  
  height: 20vh;
  width: 100%;
  background-color: goldenrod;
  h2 {
    color: #000000;
    margin:0;
  }
}`;


const TransmediaText = styled.h2`

  text-transform: uppercase;
  font-size: 2.3rem;
  margin:0 auto;
  letter-spacing: 150%;
`;

const Hashtag = styled.h1`

  text-transform: uppercase;
  letter-spacing: 0.8px;
  position:absolute;
  font-size: 1rem;
  left:0;
  top:0;
  margin:0;
  transform: rotate(90deg);
  transform-origin: 0% 80%; 
  opacity: 1;
  color:goldenrod;
`;

const LogoWhite = styled.img`
  align-self:center;
  justify-content:space-around;
`;
const MainBlock = styled.div`
flex-direction:column;
display: flex;
background-image: url(${Garden});
background-position: center;
color: #ffffff;
text-align: center;
padding: 2rem 0;
min-height: 80vh;


`;


const _handleWaypointEnter = () => {
  console.log ("_handleWaypointEnter") 
}
const _handleWaypointLeave = () => {
  console.log ("_handleWaypointLeave") 

}
const _handlePositionChange = () => {
  console.log ("_handlePositionChange") 

}

const Main = props => {



  return (
    <div>
    <MainBlock>
        
    <Waypoint
  onEnter={this._handleWaypointEnter}
  onLeave={this._handleWaypointLeave}
  onPositionChange={this._handlePositionChange}
>



 <LogoWhite className="logo" src={Logo} alt="la fabulosa" width="750px" height="600px" />
</Waypoint>
        <TransmediaText>transmedia productions</TransmediaText>
        <Hashtag>LA FABULOSA REPÚBLICA DE LA MONTAÑA</Hashtag>
    </MainBlock>
    <InTouch><h2></h2></InTouch>  
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loaded: state.loader.loaded,
    visible: state.loader.visible
  };
};

export default connect(mapStateToProps)(Main);


