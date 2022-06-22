import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../styles/globals";
import WhatsAppIcon from "../icons/whatsapp-icon.svg";
import InstagramIcon from "../icons/instagram-icon.svg";
import TwitterIcon from "../icons/twitter-icon.svg";
import LinkedInIcon from "../icons/linkedin-icon.svg";
import YoutubeIcon from "../icons/youtube-icon.svg";
import FacebookIcon from "../icons/facebook-icon.svg";


const Image = styled.img` 

  padding: 5px;
  
`;

class Social extends Component {
  state = {
    display: "none"
  };

  isInTheHeader = () => {
    if (this.props.header) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const Social = styled.div`
      flex: 1;
      justify-content: space-between;
      align-items: center;
      display: ${this.isInTheHeader() ? "none" : "flex"};

      @media (max-width: 740px) {
        display: ${this.isInTheHeader() ? "flex" : "none"};
      
      }
    `;

    const SocialLink = styled.a`
      text-decoration: none;
      color: ${colors.white};
      transition: 1s all;

      &:hover {
        color: ${colors.violet};
      }
    `;

    return (
      <Social>

        <SocialLink>


        <a href="tel:+56930965485" target="_blank" rel="noopener noreferrer">
            
            <Image
              src={WhatsAppIcon}
              alt="whatsapp"
              width="28"
              height="28"
            />
          </a>
          <a href="https://www.instagram.com/_la_fabulosa_" target="_blank" rel="noopener noreferrer"> 
            <Image
              src={InstagramIcon}
              alt="instagram"
              width="28"
              height="29"
            />
          </a>
          <a href="https://twitter.com/holalafabulosa1" target="_blank" rel="noopener noreferrer">
            <Image
              src={TwitterIcon}
              alt="twitter"
              width="28"
              height="28"
            />
          </a>
          <a href="https://www.linkedin.com/in/la-fabulosa-republica-de-la-montana/" target="_blank" rel="noopener noreferrer"> 
            <Image
              src={LinkedInIcon}
              alt="linkedin"
              width="28"
              height="32"
            />
          </a>
          <a
            href="https://www.youtube.com/c/fabianandrade"
            target="_blank" rel="noopener noreferrer"
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
            target="_blank" rel="noopener noreferrer"
          >
            <Image
              src={FacebookIcon}
              alt="facebook"
              width="28"
              height="32"
            />
          </a>
          </SocialLink>
      </Social>
    );
  }
}

export default Social;
