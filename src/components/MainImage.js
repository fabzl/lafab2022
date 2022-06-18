import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { playVideo } from "../redux/actions";
import { colors } from "../styles/globals";
import CloseBtn from "../icons/close-times.svg";

const LinkTo = styled(Link)`
  text-decoration: none;
  position: relative;
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

  width: 100vw;
  align-items: center;
  //background: url(${props => props.src}) no-repeat center;
  background-color:${colors.black};
  background-size: cover;
 
  font-size: 1.6rem;
`;

const HeroImg = styled.img`
width: 100%;
display:block;
margin: 0;
max-height: 80vh;
object-fit: contain;
`;


const H1 = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  font-style: italic;
  text-align: center;
  width: 100vw;
  padding: 5vh;
  background-color:${colors.black};
  color: ${colors.white};
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
  width:100vw;
`;


const MainImage = props => (
  <Wrap >
    <Arrow className="prev" to={props.prevLink}>
      <i className="fas fa-chevron-left fa-4x" />
    </Arrow>
   
    <LinkTo to="/">
      <Close src={CloseBtn} alt="CloseBtn" />
    </LinkTo>

    <Center>

    <HeroImg src={props.url} alt={props.nombre_del_proyecto}/>

    </Center>

 

    <H1>{props.nombre_del_proyecto}</H1>
    <Arrow className="next"to={props.nextLink}>
      <i className="fas fa-chevron-right fa-4x" />
    </Arrow>
  </Wrap>
);

export default connect(
  null,
  { playVideo }
)(MainImage);
