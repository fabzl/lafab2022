import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from "../img/logo_white_simple.svg";
import translations from "../translations";
import { colors } from "../styles/globals";
import Social from "./Social";

import WhatsAppIcon from "../icons/whatsapp-icon.svg";
import InstagramIcon from "../icons/instagram-icon.svg";
import TwitterIcon from "../icons/twitter-icon.svg";
import LinkedInIcon from "../icons/linkedin-icon.svg";
import YoutubeIcon from "../icons/youtube-icon.svg";
import FacebookIcon from "../icons/facebook-icon.svg";




// import { Link, NavLink } from "react-router-dom";

const Mailto = styled.a`

  text-decoration: none;
  color: #ffffff;
  margin-top: 3rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
  `;



const Manifest = styled.p` 
   font-size: 0.75rem;
   max-width: 50%;
   align-self: center;
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


`;

const Logo = styled.img`
  width: 68%;
  @media (min-width: 500px) {
    min-width: 15rem;
    width: 50%;
  }
  margin: 0 auto;
  display: flex;
  max-width: 30rem;
`;

const Wrap = styled.footer`
 
display: flex;
flex-direction: column;
align-items: center;
background-color: #282c34;
color: #ffffff;
padding: 2rem 0;


z-index: 50;
  padding: 3.5rem 4rem 2rem;
  min-height: 15rem;
  display: block;
  padding-bottom: 2rem;


  @media (max-width: 740px) {
    padding-bottom: 4rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const General = styled.div`
  flex: 3;
  text-align: center;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a > svg {
    vertical-align: middle;
    margin-right: 1rem;
  }
`;

const BackToTop = styled.div`
  flex: 1;
  text-align: right;

  @media (max-width: 740px) {
    display: none;
  }
`;

const Links = styled.div`
  margin-top: 1rem;
  @media (max-width: 740px) {
    flex-direction: column;
    text-align: left;
  }
`;

const LinkTo = styled.a`
  font-weight: 600;
  color: ${colors.white};
  text-decoration: none;
  padding-right: 1rem;
  font-size: 0.9rem;
  letter-spacing: 130%;
  transition: 1s all;
  &:hover {
    color: ${colors.violet};
  }

  @media (max-width: 740px) {
    width: 100%;
    display: block;
    margin-bottom: 1.4rem;
  }
`;

const ToTop = styled.a`
  color: ${colors.white};
  font-size: 1rem;
  display: inline-block;
  overflow: hidden;
  font-weight: 200;
  text-align: center;
  cursor: pointer;
  margin: 2rem 0;
  text-decoration: none;

  > span {
    display: block;
  }

  transition: 1s all;
  &:hover {
    color: ${colors.violet};
  }
`;

export const smoothScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 0) {
    setTimeout(() => {
      window.scrollTo(0, scrollY - 30 >= 0 ? window.scrollY - 30 : 0);
      smoothScroll();
    }, 10);
  }
};

const Footer = props => (
  <Wrap>

   <Content>

      <General>
      <Router>
      <Route to="/">
        <Logo src={logo} 
         alt="La Fabulosa"
         width="400px"
         height="auto"
         />
      </Route>
    </Router>

  <div className="x">X</div>
  <Manifest>Creative boutique and permaculture farm from the foothills of the Andes.</Manifest>
  <Icons>

  <a href="tel:+56930965485" target="_blank">
    
      <Image
        src={WhatsAppIcon}
        alt="whatsapp"
        width="28"
        height="28"
      />
    </a>
    <a href="https://www.instagram.com/_la_fabulosa_" target="_blank"> 
      <Image
        src={InstagramIcon}
        alt="instagram"
        width="28"
        height="29"
      />
    </a>
    <a href="https://twitter.com/holalafabulosa1" target="_blank">
      <Image
        src={TwitterIcon}
        alt="twitter"
        width="28"
        height="28"
      />
    </a>
     <a href="https://www.linkedin.com/in/la-fabulosa-republica-de-la-montana/" target="_blank"> 
      <Image
        src={LinkedInIcon}
        alt="linkedin"
        width="28"
        height="32"
      />
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
      />
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
{/*           <LinkTo href={"tel:" + props.dataContact.telefono_de_contacto}>
            <i className="fas fa-mobile-alt fa-2x" />
            {props.dataContact.telefono_de_contacto}
          </LinkTo> */}
        </Links>
      </General>
      <BackToTop>
        <ToTop onClick={() => smoothScroll()}>
          <span>
            <i className="fas fa-angle-up fa-4x" />
          </span>
          {translations.footer.top[props.language]}
        </ToTop>
      </BackToTop>
    </Content>
  </Wrap>
);

const mapStateToProps = state => {
  return {
    language: state.data.language,
    dataContact: state.data.pages[0].acf
  };
};

export default connect(mapStateToProps)(Footer);
