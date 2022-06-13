import { connect } from "react-redux";
import VideoHome from "../components/VideoHome";
import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import styled from "styled-components";

import { colors } from "../styles/globals";

import translations from "../translations";


const  ServiceGroup = styled.div`
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr )); 
justify-content: space-between;
display:grid;
padding: 10vw;
color: ${colors.white};
background: ${colors.black};



    ul {
      list-style: none;
      padding: 0px;
  }

  ul li:before
  {
      content: '';
      margin: 0 1em;   
  }
`;



const  _handleWaypointEnter = () => {
  //  console.log ("_handleWaypointEnter")
  }

const Services = props => (

  <Waypoint
          onEnter={_handleWaypointEnter}
          >
            <ServiceGroup>
          <div className="service-block">
            <h4>Storytelling</h4>
            <ul>
              <li>Concept design</li>
              <li>Project Development</li>
              <li>Scriptwriting</li>
              <li>Storyboarding</li>
              <li>Animatic</li>
            </ul>
          </div>
          <div className="service-block">
            <h4>Content Creation</h4>
            <ul>
              <li>Animation </li>
              <li>Filmaking</li>
              <li>Illustration</li> 
              <li>Photography</li>
              <li>Drone Filming</li>
            </ul>
            </div>


            
        <div className="service-block">
        <h4>Interactive</h4>
        <ul>
          <li>Web Design</li>
          <li>Coding</li>
          <li>Apps</li>
          <li>Videogames</li>
          <li>Boardgames</li>
        </ul>
        </div>

        <div className="service-block">
            <h4>Brand</h4>
            <ul>
              <li>Identity Creation</li>
              <li>Brand Guidelines</li>
              <li>Art Direction</li>
              <li>Logo Design</li>
              <li>Experience</li>
            </ul>
            </div>

          <div className="service-block">
            <h4>Strategy</h4>
            <ul>
              <li>Brand Positioning </li>
              <li>Messaging</li>
              <li>Workshops</li>
              <li>Research & Analysis</li>
              <li>Marketing Plans</li>
            </ul>
            </div>




        <div className="service-block">
        <h4>Marketing</h4>
        <ul>
          <li>Print & Publishing</li>
          <li>Creative Consulting</li>
          <li>Digital Design</li>
          <li>Digital Strategy</li>
          <li>UI/UX Design</li>
          <li>Social Media Design</li>
        </ul>
        </div>
  </ServiceGroup>
  </Waypoint>

  );
 
const mapStateToProps = state => {
  return {
    data: state.data.posts,
    language: state.data.language,
    dataContact: state.data.pages[0].acf
  };
};

export default connect(mapStateToProps)(Services);
