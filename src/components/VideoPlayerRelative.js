import React from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player'

const VideoContainer = styled.div`
  
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self:center;
  height: auto;
  margin: 0 auto;
`;


export default props => {
  return (
      <VideoContainer>

          <ReactPlayer url={props.video} />
    
      </VideoContainer>
  );
};
