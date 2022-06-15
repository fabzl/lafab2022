import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import VideoHomeSimple from "../components/VideoHomeSimple";
import {Route, Link, Routes, useLocation} from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
// import translations from "../translations";
import WhatsAppIcon from "../icons/whatsapp-icon.svg";
import InstagramIcon from "../icons/instagram-icon.svg";
import TwitterIcon from "../icons/twitter-icon.svg";
import LinkedInIcon from "../icons/linkedin-icon.svg";
import YoutubeIcon from "../icons/youtube-icon.svg";
import FacebookIcon from "../icons/facebook-icon.svg";
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
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  a:not(:last-child) {
    margin-right: 1.5rem;
  }
  .x {
    margin: 1.5rem;
    text-transform: uppercase;
  }

`;


const Image = styled.img` 
  transform: translateY(10px);
`;


const Mailto = styled.a`

  text-decoration: none;
  color: #ffffff;
  margin-top: 3rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
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
    <Icons>
    <a href="tel:+56930965485" target="_blank">
   <Image
     src={WhatsAppIcon}
     alt="whatsapp"
     width="28"
     height="28"
   />
  +56 9 3096 5485
 </a>
 <a href="https://www.instagram.com/_la_fabulosa_" target="_blank"> 
   <Image
     src={InstagramIcon}
     alt="instagram"
     width="28"
     height="29"
   />instagram
 </a>
 <a href="https://twitter.com/holalafabulosa1" target="_blank">
   <Image
     src={TwitterIcon}
     alt="twitter"
     width="28"
     height="28"
   />
   Twitter
 </a>
  <a href="https://www.linkedin.com/in/la-fabulosa-republica-de-la-montana/" target="_blank"> 
   <Image
     src={LinkedInIcon}
     alt="linkedin"
     width="28"
     height="32"
   />
   LinkedIn
 </a>
 <a
   href="https://www.youtube.com/c/fabianandrade"
   target="_blank"
 >
   <Image
     src={YoutubeIcon}
     alt="youtube"
     width="28"
     height="29"
   />
   Youtube
 </a>
 <a
   href="https://www.facebook.com/la.fabulosa.republica.de.la.montana"
   target="_blank"
 >
   <Image
     src={FacebookIcon}
     alt="facebook"
     width="28"
     height="32"
   /> Facebook
 </a>
 </Icons>

     <Links>
       <Mailto
         href={
           "mailto:hola@lafabulosa.org?subject=Contacto%20desde%20lafabulosa"
         }
       >
         <i className="far fa-envelope fa-2x" />
         hola@lafabulosa.org
     
         </Mailto>

     </Links>
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
