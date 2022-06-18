import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { playVideo } from "../redux/actions";
import { colors } from "../styles/globals";
import CloseBtn from "../icons/close-times.svg";

const LinkTo = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  display: inline;
  position: relative;
  padding: 3px;

 
`;


const Close = styled.img`
  width: 60px;
  height: 60px;
  position: fixed;
  z-index: 500;
  left: 90px;
  font-size: 1.2rem;
  bottom:90px;
  &:hover {
    transform:scale(1.2);
  }
  transition: all 0.3s;
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
  justify-content: center;
  background: transparent;
  top:0;
  bottom: 90px;

  
  & svg {
    transition: all 0.3s;
    margin-bottom: 75px;
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
      <Close src={CloseBtn} alt="CloseBtn" />
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
