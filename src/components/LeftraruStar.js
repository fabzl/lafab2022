import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Logo from "../img/fabulosa-estrella-star.svg";
import { Waypoint } from 'react-waypoint';


const Star = styled.img`
  align-self:center;
  max-width: 100px;
  max-height: 100px;
`;

const ContainerStar = styled.div`
  justify-content:space-around;
  display:flex;
  opacity:0;
  transition: all 0.7s;
`;



const _handleWaypointEnter = () => {
  //console.log ("_handleWaypointEnter") 
}
const _handleWaypointLeave = () => {
 // console.log ("_handleWaypointLeave") 

}
const _handlePositionChange = () => {
  console.log ("_handlePositionChange") 

}

const LeftraruStar = props => {



  return (
    <ContainerStar>    
    <Waypoint
  onEnter={this._handleWaypointEnter}
  onLeave={this._handleWaypointLeave}
  onPositionChange={this._handlePositionChange}
>
      <Star className="logo" src={Logo} alt="la fabulosa" width="750px" height="600px" />
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


