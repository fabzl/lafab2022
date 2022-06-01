import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Logo from "../img/fabulosa-estrella-star.svg";
import { Waypoint } from 'react-waypoint';


const Star = styled.img`
  align-self:center;
  max-width: 100px;
  max-height: 100px;
  &.active {
    opacity:1;
    border: 1px solid green; 
  }
  &:hover {
    opacity:.8;
  }
  opacity:0;
  transition: all 2.7s;
`;

const ContainerStar = styled.div`
  justify-content:space-around;
  display:flex;
 
`;



const _handleWaypointEnter = () => {
  console.log ("_handleWaypointEnter") 
 
}
const _handleWaypointLeave = () => {
 // console.log ("_handleWaypointLeave") 
 activeElement  = false;
}
const _handlePositionChange = () => {
  console.log ("_handlePositionChange") 
  activeElement  = true;
}

let activeElement  = false;


const LeftraruStar = props => {


  return (
    <ContainerStar>    
    <Waypoint
  onEnter={this._handleWaypointEnter}
  onLeave={this._handleWaypointLeave}
  onPositionChange={this._handlePositionChange}
>
      <Star className={"logo "+(activeElement)?  "active": ""} src={Logo} alt="Estrella de Leftraru"/>
  </Waypoint>
    </ContainerStar>
  );
};

const mapStateToProps = state => {
  return {
    loaded: state.loader.loaded,
    visible: state.loader.visible
  };
};

export default connect(mapStateToProps)(LeftraruStar);


