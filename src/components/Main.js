import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Logo from "../img/logo_white.svg";
import Garden from "../img/image-garden-dark.jpg";
//import translations from "../translations";

//import { colors } from "../styles/globals";
const InTouch = styled.div`
  height: 20vh;
  width: 100%;
  background-color: aquamarine;
}`;


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

  h1 {
    color: #ffffff;
    font-size: 2rem;
    display: none;
  }

  h2 {
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-family:  Helvetica, Arial, sans-serif;
  }
}
`;



const Main = props => {

  return (
    <div>
    <MainBlock>
        <LogoWhite className="logo" src={Logo} alt="la fabulosa" width="750px" height="600px" />
    </MainBlock>
    <h1>AGENCIA CREATIVA</h1>
    <InTouch><h2>#LAFABULOSAREPUBLICADELAMONTAÑA</h2> </InTouch>
   
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


