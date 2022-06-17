import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { playVideo } from "../redux/actions";
import { colors } from "../styles/globals";


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


const Close = styled.a`
  width: 50px;
  height: 50px;
  position: fixed ;
  z-index: 500;
  left: 8vw;
  bottom: 10vh;
  font-size: 1.2rem;
 
  &:hover {
    transform:scale(1.2);
  }
  transition: all 0.7s;
  &:click {
    transform:scale(1.2);
  }
  & svg {
    transition: all 0.3s;
    margin-bottom: 3vw;
    padding-bottom: 2vw;
    transform-origin: center;
  }


`;




const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 30vh;
  width: 80vw;
  align-items: center;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
  color: ${colors.white};
  font-size: 1.6rem;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 3.2rem;
  line-height: 1em;
  text-transform: uppercase;
  font-weight: 700;
  font-style: italic;
  text-align: center;
  transform: translateY(-10vh);
  max-width:80vw;
 
  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

const Arrow = styled(Link)`
  color: ${colors.white};
  height: 100%;
  align-items: end;
  position: fixed ;
  z-index: 500;
  display: flex;
  width: 60px;
  justify-content: center;
  background: transparent;
  top:0;
  
  & svg {
    transition: all 0.3s;
    margin-bottom: 3vw;
    padding-bottom: 2vw;

  }
  &.prev {
    left: 0;
    &:hover {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0)
    );
    & svg {
      margin-left: 1.5rem;
    }
  }

  }
  &.next {
    right: 0;
    &:hover {
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0)
    );
    & svg {
      margin-right: 1.5rem;
    }
  }
  }
`;





const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width:80vw;
`;

const Play = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  & i {
    width: 0.5em;
  }
`;

const MainImage = props => (
  <Wrap src={props.url}>
    <Arrow className="prev" to={props.prevLink}>
      <i className="fas fa-chevron-left fa-4x" />
    </Arrow>
   
    <LinkTo to="/">
      <Close >
      <i className="fas fa-times-circle fa-4x" />
      </Close>
    </LinkTo>
   


    <Center>
      <H1>{props.nombre_del_proyecto}</H1>
      <Play onClick={() => props.playVideo(props.videoUrl)}>
        <i className="far fa-play-circle fa-5x" />
      </Play>
    </Center>

    <Arrow className="next"to={props.nextLink}>
      <i className="fas fa-chevron-right fa-4x" />
    </Arrow>
  </Wrap>
);

export default connect(
  null,
  { playVideo }
)(MainImage);
