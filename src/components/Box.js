import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { playVideo } from "../redux/actions";
import { Link } from "react-router-dom";
import { colors } from "../styles/globals";

import { Waypoint } from 'react-waypoint';


const Wrap = styled.div`
 
  top: 0px;
  grid-gap: 1rem;
  padding: 2vw;
  position: relative;
  display: inline-grid;
  align-items:stretch;
  
&.normal {
  grid-column: auto / span 1 ;
  padding: 0;
  width:100%;
  :nth-child(even) {
   
  }
}
&.wide {
  grid-column: auto / span 2 ;
  
}


  &:hover {
    > a > div {
      opacity: 1;
      h4 {
        opacity: 1;
      
      }
      h3 {

      }
    }
  }
`;


const TextHolder = styled.div`
  position: relative;
  transform: none;
  border-top: 4px solid white;
  margin-top: 10px;
  text-align:left;
  
`;

const ImageHolder = styled.img`

box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
width: 100%;
position: relative;
overflow: hidden; /* <
//background: url(${props => props.src}) no-repeat center;
background-size:     cover;                     ------ */
background-repeat:   no-repeat;
background-position: center center;              /* optional, center the image */
  .wide {
    transform: rotaition(180deg);
  } 
`;

const LinkTo = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  display: inline;
  position: relative;
  padding: 3px;

  h4 {
  
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    font-style: italic;
    opacity: 1;
    margin: 5px 0 0 -3px;
  
  }

  h3 {
    font-size: 0.8rem;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
    color: ${colors.red};
    margin: 2px 0 0 -3px;
    line-height: 1em;
   
  }

  h3,
  h4 {
    transition: transform 0.8s, opacity 1.2s;
    transition-timing-function: cubic-bezier(0.1, 0.1, 0.2, 1), ease;
  }
`;

class Box extends Component {
  handleLink = e => {
    if (!this.props.link) {
      e.preventDefault();
      this.props.playVideo(this.props.videoUrl);
    }
  };

  contentIn = e => {
    //console.log("contentIn",e);
  }
  contentOut = e => {
   // console.log("contentOut",e);
  }
  render() {
    return (
      <Wrap  style={{ visibility:this.props.visible }}   className={this.props.boxtype} >
     
         <LinkTo
          to={this.props.link ? `/work/${this.props.link}` : "/"}
          onClick={this.handleLink}
      
        >
         
         <Waypoint   onEnter={this.contentIn} onLeave={this.contentOut} >
           <ImageHolder src={this.props.image}/>
         </Waypoint>
            <TextHolder>
              <h4>{this.props.title}   {(!this.props.client)? null : " - " } {this.props.client}</h4>
              <h3>{this.props.category}  {(!this.props.country)? null : " - " } {this.props.country}</h3>
            </TextHolder>
        </LinkTo>
       

      </Wrap>
    );
  }
}

export default connect(
  null,
  { playVideo }
)(Box);
