import React from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player'

const VideoContainer = styled.div`
  
  width: 80vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self:center;
  margin: 0 auto;
`;


export default props => {
  return (
      <VideoContainer>

          <ReactPlayer url={props.video} />
    
      </VideoContainer>
  );
};
