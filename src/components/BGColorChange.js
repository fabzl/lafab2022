import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";


const ContainerColor = styled.div`
  
  background:#373B44;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -10;
  text-align: center;
  transition: all 1500ms ease;
`;
const colorArray = ["#73C8A9","#9A151A","#57ACCA", "#BD5532", "#373B44", "#631814"];
  


class BGColorChange extends React.Component {


  state ={ 
    stylesObj : "#373B44"
  }

  componentDidMount() {
    let colorPos = 0;
    setInterval(() => {
      if(colorArray.length - 1 > colorPos) {
        this.setState({
         color : colorArray[colorPos]
        });
        colorPos++;
      } else {
        this.setState({
          color : colorArray[colorPos]
        });
       colorPos = 0;
      }
    }, 10000)
  }

 changeColor(e) {
   this.setState({
     color: e.target.value
   });
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
    const stylesObj = {
      background: this.state.color
    };

    return (
          <ContainerColor style={stylesObj} className="container"></ContainerColor >    
    )
  }
};

const mapStateToProps = state => {
  return {
    loaded: state.loader.loaded,
    visible: state.loader.visible
  };
};

export default connect(mapStateToProps)(BGColorChange);


