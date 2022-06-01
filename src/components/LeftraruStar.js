import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Logo from "../img/fabulosa-estrella-star.svg";
import { Waypoint } from 'react-waypoint';


const Star = styled.img`
align-self:center;
max-width: 100px;
max-height: 100px;
transition: all 1s;
&.out {
  transform: rotate(20deg) scale(0.5);
  opacity:0;
}

&.in {
  opacity:1;
  transform: rotate(0deg);
}

&.leave {

}
&:hover {
  transform: rotate(5deg) scale(0.8);
  opacity:0.8;
}

`;

const ContainerStar = styled.div`
  justify-content:space-around;
  display:flex;
  margin: 50px;
`;

class LeftraruStar extends React.Component {
  

  state ={ 
     activeElement : "out"
  }


  
   _handleWaypointEnter = () => {
  //  console.log ("_handleWaypointEnter")

    this.setState({ activeElement: "in" });

  }
   _handleWaypointLeave = () => {
 //  console.log ("_handleWaypointLeave") 
    this.setState({ activeElement: "out" });
  }
   _handlePositionChange = () => {
   // console.log ("_handlePositionChange") 
    this.setState({ activeElement: "leave" });
  }

  render() {
    return (
    <ContainerStar>    
      <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
          onPositionChange={this._handlePositionChange}
>
          <Star className={`${this.state.activeElement}`} src={Logo} alt="Estrella de Leftraru"/>
        </Waypoint>
    </ContainerStar>
    )
  }
};

const mapStateToProps = state => {
  return {
    loaded: state.loader.loaded,
    visible: state.loader.visible
  };
};

export default connect(mapStateToProps)(LeftraruStar);


