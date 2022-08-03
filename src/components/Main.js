
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
//import Logo from "../img/logo_white_simple.svg";
//import Logo from "../img/logo_white_anim.svg";
import Garden from "../img/image-garden-dark.jpg";
import { Waypoint } from 'react-waypoint';
import translations from "../translations";
import { NavLink } from "react-router-dom";
import { colors } from "../styles/globals";

import IconStorytelling from "../img/storytelling.svg";
import IconContent from "../img/content.svg";
import IconInteractive from "../img/interactive.svg";
import IconBrand from "../img/brands.svg";
import IconStrategy from "../img/strategy.svg";
import IconMarketing from "../img/marketing.svg";

import Canvas from "./Canvas"


const InTouch = styled.div`
  height: 20vh;
  width: 100%;
  background-color: ${colors.black};
  color: #000000;
  justify-content: space-around;
  display: flex;
  overflow:hidden;
  position:relative;
  align-items: center;
}`;


const IconContainer = styled.img`
width: 10vw;
height: 10vw;
transform-origin: center;
min-width: 50px;
min-height: 50px;
max-width: 15vh;
max-height: 15vh;
transition: all .7s;
padding: 10px;
justify-content: space-around;

}`;




const LinkTo = styled(NavLink)`
  position: relative;
  text-indent: 0;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5rem;
  margin: 0 2rem;
  align-items: center;
  line-height: 2rem;
  text-transform: uppercase;
  transition: 1s all;
  background: transparent;
  font-weight: 750;
  color: ${colors.white};


  &.active,
  &:hover {
	color: 000000;
  }

  &:hover::before {
	transform-origin: left;
	transform: scaleX(1);
  }

  &::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: #FFF;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}



  
`;

const TransmediaText = styled.h2`

  text-transform: uppercase;
  font-size: 2.7rem;

  @media (max-width: 840px) {
     
	font-size: 1.7rem;
 }
 @media (max-width: 500px) {
     
	font-size: 1rem;
 }




  margin:0 auto;
  letter-spacing: 170%;
  animation: fadeIn 4s ease-out;
  user-select:none;
@keyframes fadeIn {
  0% {  opacity: 0;
		transform: translate(0,100%);  
  }
  
  50%{
	opacity: 0% ;
	transform: translate(0,100%) ;
  }
  90%{
	opacity: 100% ;
	transform: translate(0,-5%) ;
  }
  98%{
	opacity: 100% ;
	transform: translate(0,2%) ;
  }
  100%{
	opacity: 100% ;
	transform: translate(0,0) ;
  }
}
`;

const Hashtag = styled.h1`

  text-transform: uppercase;
  letter-spacing: 0.8px;
  position:absolute;
  font-size: 0.7rem;
  left:20px;
  top:50px;
  margin:0;
  transform: rotate(90deg);
  transform-origin: 0% 80%; 
  opacity: 1;
  color:goldenrod;
`;

const LogoWhite = styled.div`
  align-self:center;
  justify-content:space-around;
  fill: #FFFFFF;
  
  .logo-group {
 	 transform: scale(0.75);
	 transform-origin: center;
  }

  &.sto .in {
	animation-fill-mode: backwards;   
	animation-play-state: running;
  }

  /***************************************************

   **************************************************/
  
  @-webkit-keyframes animate-svg-fill-1 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  @keyframes animate-svg-fill-1 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  .svg-elem-1 {
	-webkit-animation: animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
			animation: animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
  }
  
  @-webkit-keyframes animate-svg-fill-2 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  @keyframes animate-svg-fill-2 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  .svg-elem-2 {
	-webkit-animation: animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
			animation: animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
  }
  
  @-webkit-keyframes animate-svg-fill-3 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  @keyframes animate-svg-fill-3 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  .svg-elem-3 {
	-webkit-animation: animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
			animation: animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
  }
  
  @-webkit-keyframes animate-svg-fill-4 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  @keyframes animate-svg-fill-4 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  .svg-elem-4 {
	-webkit-animation: animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
			animation: animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
  }
  
  @-webkit-keyframes animate-svg-fill-5 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  @keyframes animate-svg-fill-5 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  .svg-elem-5 {
	-webkit-animation: animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s both;
			animation: animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s both;
  }
  
  @-webkit-keyframes animate-svg-fill-6 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  @keyframes animate-svg-fill-6 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  .svg-elem-6 {
	-webkit-animation: animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
			animation: animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
  }
  
  @-webkit-keyframes animate-svg-fill-7 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  @keyframes animate-svg-fill-7 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  .svg-elem-7 {
	-webkit-animation: animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s both;
			animation: animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s both;
  }
  
  @-webkit-keyframes animate-svg-fill-8 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  @keyframes animate-svg-fill-8 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  .svg-elem-8 {
	-webkit-animation: animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
			animation: animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
  }
  
  @-webkit-keyframes animate-svg-fill-9 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  @keyframes animate-svg-fill-9 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  .svg-elem-9 {
	-webkit-animation: animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
			animation: animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
  }
  
  @-webkit-keyframes animate-svg-fill-10 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  @keyframes animate-svg-fill-10 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  .svg-elem-10 {
	-webkit-animation: animate-svg-fill-10 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s both;
			animation: animate-svg-fill-10 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s both;
  }
  
  @-webkit-keyframes animate-svg-fill-11 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  @keyframes animate-svg-fill-11 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  .svg-elem-11 {
	-webkit-animation: animate-svg-fill-11 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
			animation: animate-svg-fill-11 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
  }
  
  @-webkit-keyframes animate-svg-fill-12 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  @keyframes animate-svg-fill-12 {
	0% {
	  fill: transparent;
	}
  
	100% {
	  fill: rgb(255, 255, 255);
	}
  }
  
  .svg-elem-12 {
	-webkit-animation: animate-svg-fill-12 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s both;
			animation: animate-svg-fill-12 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s both;
  }
  
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

class Main extends React.Component {
  

  state ={ 
	 activeElement : "out"
  }

  
   _handleWaypointEnter = () => {
   console.log ("_handleWaypointEnter")

	this.setState({ activeElement: "in" });
	
  }
   _handleWaypointLeave = () => {
   console.log ("_handleWaypointLeave") 
	this.setState({ activeElement: "out" });
  }
   _handlePositionChange = () => {
   // console.log ("_handlePositionChange") 
	this.setState({ activeElement: "leave" });
  }

  render() {
	const { language } = this.props;
	
	return (
	<div>
	<MainBlock>

  <Canvas></Canvas>
	<Waypoint
	  onEnter={this._handleWaypointEnter}
	  onLeave={this._handleWaypointLeave}
	  onPositionChange={this._handlePositionChange}
	>
		  <LogoWhite className={`${this.state.activeElement}`}>
				  <svg version="1.1" id="Layer_1" xlink="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1190.76 538.3"  xmlSpace="preserve" width="100vw" height="75vh">
					<g className="logo-group">
			<path className={`${"st0 svg-elem-1 "+this.state.activeElement.toString()}`} d="M265.66,414.48c0-11.41-10.37-12.66-10.37-12.66c0,5.53-4.11,14.51-8.65,18.99
			  c-4.64,4.57-8.54,12.83-39.76,12.83c-33.23,0-46.34-12.79-86.45-38.73c-19.73-12.76-35.83-19.6-49.91-21.45
			  c30.67-13.38,35.19-43.26,32.85-80.01c-2.67-41.86-2.67-96.19,0-113.12c2.67-16.92,12.47-43.64,36.52-42.75
			  c24.05,0.89,16.03,30.28,16.03,30.28s20.49-9.8,24.05-20.49c3.56-10.69,5.34-19.6,0-20.49c-5.34-0.89-40.08-18.7-66.8,4.45
			  C92.19,149.5,80.2,175.86,80.2,175.86s-9.35-0.39-15.14,18.15c-7.13,22.82-0.82,63.32,1.78,80.19c7.34,47.7,2.98,80.59-8.84,94.24
			  c-1.61,1.86-2.76,3.6-3.59,5.12c-8.01,1.27-15.46,4.37-22.76,9.09c-19.68,12.73-15.13,28.17-13.12,32.87
			  c0.15,0.34,0.64,0.29,0.72-0.07c0.24-1.19,1.01-3.12,3.18-5.9c1.34-1.71,2.8-3.93,5.25-6.11c12.45-11.07,33.28-11.22,47.91-3.86
			  c15.63,7.87,28.81,19.15,45.01,35.47c25.49,25.69,40.63,30.9,60.34,31.94s29.4-11.93,29.4-11.93s28.81,2.75,42.3-10.04
			  C266.12,432.23,265.66,425.89,265.66,414.48z"></path>
			<path className="st0 svg-elem-2" d="M160.54,181.53c3.39,16.37-2.04,34.21-5.64,50.97c-7.81,36.37-12.8,55.45-25.35,90.47
			  c-2.4,6.7-8.32,23.74-12.42,29.55c-2.32,3.29-8.2,6.56-14.15,8.97c11.63,4.95,24.17,9.6,37.53,13.64
			  c-1.1-8.24-0.68-16.63,0.6-25.01c2.76,2.9,6.29,5.21,10.55,6.78c-3.6-3.3-7.07-14.94-6.61-20.71c0.44-5.6,2.22-14.05,13.8-24.88
			  c5.48-5.12,16.96-9.05,28.43-10.91c2.28,30.5,4.49,63.83,3.34,69.76c-1.37,7.05-4.32,11.73-8.07,14.88
			  c19.51,3.31,40.26,5.04,62.04,4.48c0.96-0.02,1.96-0.06,2.94-0.09c-3.19-1.9-6.21-4.05-8.73-6.76c-7.29-7.85-9.4-19.06-11.02-29.64
			  c-2.53-16.55-4.58-33.17-6.21-49.83c2.39,0.9,4.24,1.75,5.3,2.26c22.6,12.15,26.18,29.55,26.26,46.45
			  c1.85,0.31,3.99-5.66,4.49-7.13c4.34-14.77,2.43-32.35-6.88-44.91c-7.98-9.79-19.22-17.76-31.27-21.84
			  c-0.85-12.07-1.48-24.16-1.86-36.25c-0.51-16.49-0.1-34.35,7.87-48.33C202.39,192,180.65,187.65,160.54,181.53z M173.91,279.7
			  c-5.92,2.24-10.98,4.67-15.47,7.73c7.1-22.73,14.43-45.38,22.01-67.95c-0.22,3,2.35,20.73,3.04,31.28
			  c0.33,4.99,1.07,14.42,1.96,25.91C181.28,277.42,177.27,278.43,173.91,279.7z"></path>
			<path className="st0 svg-elem-3" d="M428.7,366.35c16.9-3.54,34.14-7.53,51.55-12c0.6-0.15,1.2-0.31,1.8-0.46c-4.35-10.92-7.89-22.1-9.31-33.73
			  c-1.05-8.58-0.91-17.26-0.97-25.89c-0.04-11.81-0.09-23.63-0.13-35.44c-0.1-33.4-2.15-66.23,4.58-98.67
			  c-15.19,3.85-24.76,6.79-39.56,9.93c-1.86,0.4-3.72,0.78-5.58,1.17c-0.72,0.15-1.44,0.3-2.15,0.45c-7.57,1.55-15.07,3.02-22.48,4.4
			  c-0.53,0.1-0.81,0.65-0.61,1.15c0.96,2.41,1.54,5.05,1.74,7.5c1.52,18.76-4.37,37.25-10.18,55.15c-1.68,5.18-3.37,10.37-5.05,15.55
			  c-1.69,0.1-3.38,0.28-5.06,0.56c-14.19,2.39-23.57,5.34-34.46,15.16c-6.2,5.59-11.75,12.15-14.8,19.92
			  c-3.05,7.77-3.35,16.89,0.55,24.26c3.91,7.38,12.46,12.44,20.68,10.98c-5.79-6.55-6-16.73-2.36-24.67
			  c3.64-7.94,10.49-13.98,17.74-18.86c3.64-2.45,6.95-3.81,10.35-4.69c-6.9,21.25-13.8,42.5-20.7,63.75
			  c-4.01,12.34-8.06,24.79-12.93,36.83c-0.24,0.6,0.25,1.23,0.89,1.14c13.21-1.89,26.87-4.08,40.88-6.58
			  c0.54-0.1,0.83-0.66,0.62-1.16c-2.12-4.93-3.39-10.3-3.78-15.61c-0.98-13.33,2.59-26.53,6.13-39.42
			  c3.75-13.66,7.51-27.33,11.26-40.99c8.02,1.47,15.93,6.67,20,13.33c2.46,4.01,3.39,8.4,3.56,13.1c0.24,6.57-1.33,9.39-6.25,13.75
			  c4.1-0.13,7.43-1.49,10-4.3c-0.88,21.52-2.27,38.02-2.86,41.41C431.05,357.76,430,362.09,428.7,366.35z M412.23,258.34
			  c5.43-19.76,10.85-39.51,16.28-59.27c0.03-0.13,0.04-0.26,0.01-0.39c0.01,0.06,0.03,0.13,0.04,0.19
			  c5.28,17.89,6.89,47.6,6.89,76.26C429.63,267.39,421.39,261.6,412.23,258.34z"></path>
			<path className="st0 svg-elem-4" d="M371.32,441.93c-2.93,1.54-9,5.01-14.59,3.37c-8.62-2.53-26.12-30.66-27.56-55.18
			  c-0.82-14.04-0.67-81.52-1.25-139.12c11.65-6.03,22.45-11.55,23.57-11.99c5.18-2.03,9.17-3.8,14.73-3.95
			  c3.59-0.09,6.25,0.26,9.28,2.2c3.03,1.94,4.65,6.47,2.35,9.23c2.78-2.84,5.54-5.85,7.04-9.53c1.5-3.68,1.51-8.22-0.94-11.35
			  s-7.72-4-10.46-1.11c1.1-7.77-8.17-16.58-16-17.2c-7.82-0.62-13.98,0.32-20.28,5.01c-3.49,2.6-6.69,5.08-9.73,7.51
			  c-0.51-28.75-1.36-50.71-2.83-54.93c-0.56-1.6-1.22-3.15-1.99-4.62c45.82-15.87,85.8-34.75,143.45-34.41
			  c10.6,0.06,15.54,1.34,24.8,6.51c9.48,5.3,10.84,9.07,12.58,13.5c7.7-13.63,2.66-32.63-7.73-41.14
			  c-13.76-11.27-28.77-10.75-36.03-5.77c-4.87-5.41-18.91-14.67-41.27-10.5c-51.77,9.67-103.9,40.76-122.38,50.33
			  c-13.91,7.2-32.82,15.74-48.48,15.83c-12.65,0.07-25.02-6.78-28.49-18.95c-7.82,2.73-11.27,12.86-8.54,20.68
			  c2.73,7.82,10.12,13.26,17.96,15.93c14.81,5.05,41.5,3.24,56.68-0.6c3.27-0.83,6.47-1.7,9.65-2.59
			  c0.46,16.45,1.21,45.45,1.77,76.19c-5.28,4.58-12.78,11.41-18.06,12.6c-6.33,1.43-11.68,2.05-15.91,0.51
			  c-6.09-2.22-10.51-7.15-6.47-12.23c-6.3,4.85-6.4,15.17-1.4,21.35c5,6.18,13.66,8.49,21.56,7.6c7.35-0.83,14.19-4.04,20.65-7.68
			  c0.45,31.45,0.57,62.02-0.14,80.32c-2,51.16-0.48,70.78-12.45,95.56c-11.97,24.77-26.82,23.76-26.82,23.76l-10.06,0.01
			  c0,0,1.17,5.78,7.18,10.36c6.13,4.67,17.18,8.14,24.09,8.37c10.99,0.37,21.41-4.08,26.2-10.65c4.79-6.57,6.43-9.84,6.43-9.84
			  s19.25,8.17,36.01,0.59s22.89-19.59,25.28-23.64C373.57,440.83,372.91,441.1,371.32,441.93z"></path>
			<path className="st0 svg-elem-5" d="M609.32,284.75c2.49,8.94,8.4,17.46,17.13,20.59c3.85,1.38,8.23,2.34,12.32,2.37
			  c4.87,0.03,10.84,0.04,15.48-1.45c8.37-2.69,18.43-8.56,22.75-16.62c4.15-7.75,5.87-14.82,10.6-22.23c2-3.13,3.33-4.99,6.34-7.17
			  c3.01-2.18,10.24-4.37,10.81-4.24c0,0-4.04-0.91-5.72-1.79c-7.84-4.1-6.88-39-6.88-47.86c0-22.34-0.44-45.99-0.35-67.93
			  c0.1-24.45-1.33-25.11,8.26-43.76c-9.91,3.23-23.95,7.51-34.25,10.85c1.63,2.78,2.34,5.02,2.94,7.67
			  c8.14,36.15,4.52,145.38-2.32,162.42c-1.44,3.58-3.21,7.19-6.6,9.29c-1.98,1.22-4.38,1.7-6.58,0.97
			  c-4.36-1.46-5.97-6.57-6.29-11.03c-3.24-45.5-1.24-98.67-0.88-144.66c0.07-8.33,1.66-13.79,5.1-19.08
			  c0.15-0.24-0.07-0.54-0.34-0.45c-19.98,6.43-40.48,12.93-61.23,19.3c-0.9,0.28-1.09,1.49-0.29,2c5.15,3.32,9.33,8.43,11.93,14.03
			  c4.39,9.48,5.09,20.2,5.57,30.64c1.23,26.81,1.45,53.66,0.66,80.49C607.2,266.36,606.83,275.81,609.32,284.75z"></path>
			<path className="st0 svg-elem-6" d="M931.92,281.49c9.7-9.7,10.76-24.92,5.25-37.13c-6.6-15.07-23.77-14.5-31.24-11.09c0,0,11.5,4.07,11.5,12.45
			  c0,8.38-5.03,18.2-18.44,27.06c-17.83,11.69-62.59,8.57-106.1-2.87c-25.94-6.85-46.14-12.02-62.67-11.52
			  c12.44-12.31,23.87-29.79,23.87-46.92c0-15.99,0.96-74.24,0.96-74.24s1.01-38.13,8.5-61.6c0.22-0.69-0.43-1.33-1.11-1.12
			  c-15.18,4.8-31.28,10.01-48.08,15.48c-0.67,0.22-0.81,1.08-0.26,1.53c0.44,0.36,0.82,0.77,1.12,1.22c1.58,2.39,2.36,5.54,2.86,8.35
			  c3.51,19.62,1.87,39.98,1.63,59.91c-0.35,29.41-0.72,59.07-7.15,87.76c-1.14,5.1-2.52,10.23-4.47,15.07
			  c-4.23,2.26-8.19,5.26-11.95,9.19c-5.27,6.16-7.09,16.55-6.61,22.3s3.03,11.42,4.81,11.02c-3.01-17.93,13.57-32.32,36.32-30.55
			  c34.25,2.37,88.58,33.15,99.36,38.18c10.78,5.03,27.07,12.04,47.91,12.04c20.84,0,34.71-19.94,34.71-19.94s4.12-5.25,4.12-11.71
			  c0-6.47-1.04-7.81-1.04-7.81S922.22,291.19,931.92,281.49z"></path>
			<path className="st0 svg-elem-7" d="M491.3,351.58c2.37-1.01,4.99-1.9,7.76-2.71c18.72-5.46,44.68-9.78,60.29-15.79
			  c13.73-5.28,24.47-13.49,31.87-26.2c3.09-5.31,5.6-13.88,7.09-19.84c3.98-15.96,0.21-36.34-8.04-50.58
			  c-4.11-7.09-12.24-13.05-20.2-15.01c13.78-6.66,22.23-22.43,21.2-37.69c-1.03-15.26-5.88-30.47-19.45-37.55
			  c-5.3-2.76-13.18-6.34-22.85-4.9c-5.78,0.87-26.14,7.06-43.11,11.95c-6.94,1.87-13.86,3.71-20.76,5.48
			  c-0.14,0.04-0.27,0.07-0.41,0.1c0.04,0.06,0.08,0.11,0.13,0.17c1.4,1.9,9.49,19.67,9.49,35.1c0,34.51,2.41,138.63-2.17,154.76
			  L491.3,351.58z M563.33,275.37c-0.48,18.24-4.79,31.65-16.05,42.67c-6.43,6.29-17.54,9.61-25.89,11.31
			  c1.39-2.16,2.53-4.49,3.4-6.88c3.02-8.32,3.27-17.35,3.49-26.2c0.31-12.57,1.31-53.96,1.36-62.08c3.85,0.1,8.23,0.77,12.37,2.67
			  C553.03,241.89,563.81,257.13,563.33,275.37z M537.66,163.41c3.09,0.6,6.12,1.83,8.44,3.97c1.75,1.61,3.03,3.68,4.07,5.82
			  c2.31,4.77,3.53,10.06,3.54,15.35c0.01,3.65-0.57,7.35-2.16,10.63c-2.8,5.78-8.39,9.65-14.02,12.75c-2.53,1.39-5.12,2.67-7.76,3.85
			  c-0.25-15.47-1.66-36.27-7.41-46.4c-0.86-1.51-1.69-3.01-2.68-4.41C525.58,163.33,531.69,162.25,537.66,163.41z"></path>
			<circle className="st0 svg-elem-8" cx="842.74" cy="149.79" r="11.38"></circle>
			<path className="st0 svg-elem-9" d="M795.85,81.25c-16.29,19.81-27.11,50.18-27.11,80.64c0,22.7,2.99,44.47,12,59.54
			  c14.82,24.79,41.15,35.89,62,35.89c33.53,0,74-48.65,74-108.67c0-60.02-34.01-95.74-67.54-95.74
			  C832.69,52.92,811.66,62.03,795.85,81.25z M847.23,69.9c18.85,0,29.28,36.53,29.28,86.58c0,50.05-15.28,84.16-34.13,84.16
			  c-18.85,0-34.13-34.11-34.13-84.16C808.25,106.43,828.38,69.9,847.23,69.9z"></path>
			<path className="st0 svg-elem-10" d="M1020.08,257.33c0-20.44-7.79-40.02-12.53-49.21c-5.17-10.03-28.78-41.51-37.83-55.22
			  c-9.97-15.09-19.2-30.44-21.27-40.35c-2.29-10.93-0.93-18.25,1.95-23.67c3.19-6,9.89-10.28,18-10.11
			  c15.43,0.32,32.15,17.68,33.43,26.68c0.74,5.2,0.32,7.56-0.16,8.63c-0.21,0.47,0.29,0.93,0.76,0.71
			  c4.66-2.22,15.77-14.39,18.54-23.09c2.31-7.28,5.47-22.19-17.36-32.8c-22.83-10.61-39.23-5.14-42.12-3.86
			  c-2.89,1.29-18.1,8.75-26.44,22.72c-8.22,13.77-11.3,25.89-8.15,45.83c0.12,0.79,5.12,18.63,5.12,18.63s-8.47,3.16-7.18,12.16
			  s0.64,18.97,29.58,61.73c28.94,42.76,27.3,70.44,27.3,79.49c0,63.4-56.4,101.84-98.07,101.84c-48.14,0-71.18-30.54-71.18-49.39
			  c0-19.14,10.35-22.15,10.35-22.15s-4.63-9.74-16.54-9.65c-11.9,0.09-26.89,10.41-27.24,28.41c-0.35,18,10.29,33,13.17,34.02
			  c2.87,1.02,1.89,2.29,1.89,2.29s-3.05,7.98,0.66,15.77c3.71,7.79,18.48,50.28,88.9,50.28c126.09,0,122.86-138.62,122.86-138.62
			  S1020.08,300.1,1020.08,257.33z"></path>
			<path className="st0 svg-elem-11" d="M1173.82,337.31c0,0-11.48,21.39-31.52,21.22c-15.67-0.13-34.52-4.98-41.83-9.94c-1.01-0.69-2-1.36-2.97-2.02
			  c18.05-8.85,16.87-24.26,16.87-24.26v-39.52v-74.03c8.91,5.29,15.11,12.88,17.09,15.49c14.67,21.04,10.01,38.19,2.45,53.3
			  c1.51,1.11,26.33,1.38,26.33-44.62c0-24.61-20.37-37.95-35.87-46.29c-3.2-1.7-6.56-3-10-4.01v-73.35c0-0.05,0.35-2.59,1.13-3.82
			  s2.26-1.9,2.26-1.9c0.09-0.15,0.03-0.33-0.13-0.4c-6.53-2.69-58.67-21.87-67.52-24.86c-0.24-0.08-0.45,0.18-0.33,0.4
			  c1.65,2.99,3.12,5.88,4.24,8.49c6.32,14.75-42.05,113.4-42.05,113.4c-0.03,0.08,2.93,4.51,2.98,4.59
			  c4.09,6.65,8.06,15.91,10.79,26.1c0.26,0.96,1.01,5.5,1.12,6.41c0.03,0.29,0.43,0.33,0.53,0.07l6.38-16.47
			  c0.77,5.36,3.24,10.47,7.37,14.91c-1.72-4.57,0.44-16.52,3.45-21.46c2.92-4.79,8.33-11.53,23.54-15.97
			  c0.65-0.19,1.34-0.35,2.06-0.48l2.47,132.14c-3.38-1.96-6.62-3.68-9.9-5.2c-9.13-4.21-12.91-5.83-22.15-5.83
			  c-25.38,0-24.3,26.47-24.3,26.47s6.25-12.29,15.9-12.29c9.89,0,13.62-0.66,23.99,9.64c13.91,13.82,34.79,41.86,66.32,41.86
			  c15.3,0,20.86-10.45,20.86-10.45s14.41,3.25,23.73-6.35C1176.44,358.69,1173.82,337.31,1173.82,337.31z M1057.32,184.96
			  c-5.37,2.99-9.8,6.34-13.33,9.91l24.42-63.01c0.11-0.28,0.53-0.21,0.53,0.09l0.9,48.2
			  C1065.63,181.12,1061.47,182.65,1057.32,184.96z"></path>
			<path className="st0 svg-elem-12" d="M767.11,320.79c-1.07-2.21-2.75-4.37-4.93-6.07c-5.44-4.25-9.03-5.92-15.43-7.01
			  c-31.55-5.37-68.33,9.43-99.95,22.23c-38.03,15.39-69.29,34.72-115.3,52.25c-38.37,14.61-99.71,30.93-140.69,24.08
			  c-12.7-2.12-19.59-13.03-21.87-19.49c0,0-1.06,0.79-1.51,1.24c-6.28,6.31-6.6,24.91,12.74,39.3c16.72,12.44,51.17,5.13,87.7-3.76
			  c8.98,5.97,26.53,12.95,53.65,4.24c31.38-10.09,77.35-34.79,109.18-52.89c0,0,19.53-11.26,25.93-15.03
			  c25.72-15.16,63.97-33.86,75.89-36.47c7.67-1.68,13.34-1.83,17.5-1.49c7.88,0.64,10.42,3.72,11.61,6.03
			  c1.82,3.53,1.43,6.22,1.29,8.14c-0.31,4.12-1.87,5.6-1.87,5.6c2.87-1.1,8.13-2.98,7.68-14.33
			  C768.67,326.45,768.18,323.01,767.11,320.79z"></path>
		  </g>
		  </svg>
	  </LogoWhite>

	  {/* <LogoWhite className="logo" src={Logo} alt="la fabulosa" width="750px" height="600px" /> */}
	  </Waypoint>
		<TransmediaText>transmedia productions</TransmediaText>
		<Hashtag>LA FABULOSA REPÚBLICA DE LA MONTAÑA</Hashtag>
	</MainBlock>
	<InTouch>
	
			  <LinkTo onClick={this.checkMobileNav} to="/contact">

				<IconContainer src={IconStorytelling} alt="Storytelling Icon"/>
				<IconContainer src={IconContent} alt="Content Icon"/>
				<IconContainer src={IconInteractive} alt="Interactive Icon"/>
				<IconContainer src={IconBrand} alt="Brand Icon"/>
				<IconContainer src={IconStrategy} alt="Strategy Icon"/>
				<IconContainer src={IconMarketing} alt="Marketing Icon"/>
		  </LinkTo>
 	 </InTouch>  
	</div>
	 )
	}
  };
  
  const mapStateToProps = state => {
	return {
	  loaded: state.loader.loaded,
	  visible: state.loader.visible,
	  language: state.data.language
	};
  };
  
  export default connect(mapStateToProps)(Main);
  