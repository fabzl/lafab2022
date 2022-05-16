import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Logo from "../img/logo_white_simple.svg";
import Garden from "../img/image-garden-dark.jpg";
//import translations from "../translations";

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

const Hashtag = styled.h1`

  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-family:  Helvetica, Arial, sans-serif;
  position:absolute;
  font-size: 2.2rem;
  left:0;
  top:0;
  margin:0;
  transform: rotate(90deg);
  transform-origin: 0% 80%; 
  opacity: 0.8;
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



const CentralText = props => {

  return (
    <div>
    <MainBlock>
        <LogoWhite className="logo" src={Logo} alt="la fabulosa" width="750px" height="600px" />
        <Hashtag>#LAFABULOSAREPUBLICADELAMONTAÑA</Hashtag>
    </MainBlock>
    <InTouch><h2>AGENCIA CREATIVA</h2></InTouch>  
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loaded: state.loader.loaded,
    visible: state.loader.visible
  };
};

export default connect(mapStateToProps)(CentralText);


