import React from "react";
import styled from "styled-components";
import { colors } from "../styles/globals";
import Parser from "html-react-parser";




const Section = styled.section`
  height: ${props => (props.contact ? 80 : 100)}vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-height: 540px;
  overflow: hidden;
`;

const Vcenter = styled.div`
  justify-content: center;
  display:flex;
`;


const VLine = styled.div`
  border: 3px solid black;  
  left: 50%;
  margin-left: -3px;
  height: 50vh;
  width: 6px;
`;

const Video = styled.video`
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Text = styled.div`
  z-index: 20;
  pointer-events: none;
  transition: opacity 1.3s;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  color: ${colors.white};

  .headline-container {
  max-width: 50%;
  margin: auto
}
.headline {
    display: inline;
    font-size: 2rem;
    @media (max-width: 940px) {
      font-size: 1.5rem;

    }
    @media (min-width: 1340px) {
      font-size: 3rem;

    }
    font-weight: 700;
    line-height: 1.5;
    color: #fff;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
}
.headline--themovement {
    background-color: black;
    box-shadow: 8px 1px 0 3px black, -8px 1px 0 3px black;
    color: pink;
}
.headline {
    line-height: 1.44;
}
.desktop-article__hero-main .headline {
    position: relative;
    z-index: 2;
}`;

export default props => {
  let videoOverride = props.video;
  let videosArray = videoOverride.split("||");
  let randomValue = Math.floor(Math.random() * videosArray.length);
  let video = videosArray[randomValue];

  return (
    <Section {...props}>
      <VideoContainer>
        <Video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </Video>
      </VideoContainer>

      <Text>

        <div class="headline-container"><h1 class="headline headline--themovement headline--large">{Parser(props.title)}</h1></div>
        <Vcenter><VLine></VLine></Vcenter>
      </Text>
    </Section>
  );
};


