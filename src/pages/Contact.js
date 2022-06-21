import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import VideoHomeSimple from "../components/VideoHomeSimple";
//import {Route, Link, Routes, useLocation} from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
// import translations from "../translations";
import WhatsAppIcon from "../icons/whatsapp-icon.svg";
import { colors } from "../styles/globals";

const Links = styled.div`
  margin-top: 1rem;
  @media (max-width: 740px) {
    flex-direction: row;
    text-align: left;
  }
`;


const Icons = styled.div`
  align-self: center;
  padding-bottom: 1.5rem;
  
`;


const Image = styled.img` 
transform: translateY(10px);
`;


const Mailto = styled.a`

  text-decoration: none;
  color: #ffffff;
  padding-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  
  `;

  const Content = styled.div`
  align-items: center;
  text-align:center;
  color: #ffffff;
  background: ${colors.black}
  a {
    color: white;
    text-decoration:none;
    display: block;
    font-weigth: 750;
  }
`;



const smoothScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 0) {
    setTimeout(() => {
      window.scrollTo(0, scrollY - 30 >= 0 ? window.scrollY - 30 : 0);
      smoothScroll();
    }, 10);
  }
};

const  _handleWaypointEnterMain = e => {
  smoothScroll()
  //console.log ("_handleWaypointEnterMain", e);
};



const Contact = props => (

  <Waypoint
    onEnter={_handleWaypointEnterMain}
  >
  
  <Content>
   <VideoHomeSimple
      video={props.dataContact.video}
      contact
      fontColor
      title={
        props.language === "es"
          ? props.dataContact.frase_contacto
          : props.dataContact.contact_phrase
      }
    />

    <h3>{
        props.language === "es"
          ? props.dataContact.frase_contacto
          : props.dataContact.contact_phrase
      }
    </h3>

    <Links>
       <Mailto
         href={
           "mailto:hola@lafabulosa.org?subject=Contacto%20desde%20lafabulosa"
         }
       >
          hola@lafabulosa.org
         </Mailto>
     </Links>

    <Icons>
    <a href="tel:+56930965485" target="_blank" rel="noopener noreferrer">
    <Image
     src={WhatsAppIcon}
     alt="whatsapp"
     width="28"
     height="28"
   />

   +56 9 3096 5485
  </a>
 </Icons> 
  </Content>

  </Waypoint>
);


const mapStateToProps = state => {
  return {
    data: state.data.posts,
    language: state.data.language,
    dataContact: state.data.pages[0].acf
  };
};

export default connect(mapStateToProps)(Contact);
