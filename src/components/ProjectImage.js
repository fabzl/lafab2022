import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { playVideo } from "../redux/actions";
import { colors } from "../styles/globals";
import CloseBtn from "../icons/close-times.svg";


const Wrap = styled.div`

  width: 100vw;
  align-items: center;
  //background: url(${props => props.src}) no-repeat center;
  background-color:${colors.black};
  background-size: cover;
 
  font-size: 1.6rem;
`;

const HeroImg = styled.img`
  object-fit: contain;
  max-height:75vh;
`;


const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:100vw;
`;


const ProjectImage = props => (
  <Wrap >
  
    <Center>

    <HeroImg src={props.url} alt={props.nombre_del_proyecto}/>

    </Center>

  </Wrap>
);

export default connect(
  null,
  { playVideo }
)(ProjectImage);
