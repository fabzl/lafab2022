import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import VideoHome from "../components/VideoHome";
import Grid from "../components/Grid";
import translations from "../translations";
import { colors } from "../styles/globals";
import Main from "../components/Main";
import LeftraruStar from "../components/LeftraruStar";
import BGColorChange from "../components/BGColorChange";
import { Reveal, Tween } from 'react-gsap';


const TitleHolder = styled.h2`
  color: ${colors.white}
  text-align:center;
  font-size:2rem;
  margin-bottom:3px;
`;
const IntroTextHolder = styled.p`
  color: ${colors.white}
  text-align:center;
  font-size:2rem;
  margin-bottom:3px;
  padding: 0 25% 10% 25%;

  &:before {

  }

`;


const AllWork = styled.div`
  padding: 0;
  background: linear-gradient(
    135deg,
    ${colors.orange} 0%,
    ${colors.violet} 100%
  );
  text-align: center;
`;

const H3 = styled.h3`
  margin: 0;
  font-weight: 700;
  font-style: italic;
  line-height: 1.2em;
  font-size: 2rem;
  text-transform: uppercase;
`;

const LinkTo = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  display: inline-block;
  position: sticky;
  top: 20px;
  padding: 5.5rem 0 4.5rem;
  transition: all 1s;
  &:hover {
    color: ${colors.black};
  }
`;




const Home = props => (
  <div>
    <BGColorChange/>
    <Main></Main>
    <VideoHome
      video={props.dataHome.videos}
      title={
        props.language === "es"
          ? props.dataHome.intro_text_español
          : props.dataHome.intro_text_english
      }
    />
    <LeftraruStar/>       
  
    <Reveal repeat>
      <Tween from={{ opacity: 0 }} duration={2}>
        <div>
          <TitleHolder>
              {props.language === "es" ? "Proyectos Narrativos" : "Storytelling Projects"}
          </TitleHolder>
          <IntroTextHolder>
              {props.language === "es" ? "No hay agonía mas grande que una historia no contada. Aquí nuestra carpeta de proyectos." : "There is no bigger agony that an untold story. Here our developing project folder"}
          </IntroTextHolder>
         </div>
      </Tween>
    </Reveal>

  
    <Grid data={props.data} language={props.language} gridType="STORYTELLING"/>


    <LeftraruStar/>

    <Reveal repeat>
      <Tween from={{ opacity: 0 }} duration={2}>
        <div>
         <TitleHolder>
            {props.language === "es" ? "Proyectos Interactivos" : "Interactive Projects"}
         </TitleHolder>
         <IntroTextHolder>
            {props.language === "es" ? "Trabajamos con múltiples lenguajes de programación para crear fabulosas webs, apps y proyectos experimentales a pedido." : "We work with multiple programming languages to create amazing websites, apps and experimental projects on demand."}
          </IntroTextHolder>
         </div>
      </Tween>
    </Reveal>
  
    
    <Grid data={props.data} language={props.language} gridType="INTERACTIVE"/>
    
    <LeftraruStar/>

    <Reveal repeat>
      <Tween from={{ opacity: 0 }} duration={2}>
        <div>
        <TitleHolder>
          {props.language === "es" ? "Identidad" : "Branding"}
        </TitleHolder>
        <IntroTextHolder>
          {props.language === "es" ? "Trabajamos con nuestros clientes para construir una experiencia de marca única." : "We work with our customers to build a unique brand experience."}
        </IntroTextHolder>
        </div>
      </Tween>
    </Reveal>


    <Grid data={props.data} language={props.language} gridType="BRANDING"/>
    
    <LeftraruStar/>  

    <Reveal repeat>
      <Tween from={{ opacity: 0 }} duration={2}>
        <div>
          <TitleHolder>
              {props.language === "es" ? "Juegos de Mesa" : "Board Games"}
          </TitleHolder>
          <IntroTextHolder>
              {props.language === "es" ? "En la Fabulosa soñamos con crear juegos de mesa.  Aquí algunos de nuestros prototipos.": "La Fabulosa makes boardgames, here some of our prototypes."}
          </IntroTextHolder>
         </div>
      </Tween>
    </Reveal>
   
    <Grid data={props.data} language={props.language} gridType="GAMES"/>
    
    <LeftraruStar/>
    <Reveal repeat>
      <Tween from={{ opacity: 0 }} duration={2}>
        <div>
          <TitleHolder>
              {props.language === "es" ? "Proyectos Comerciales" : "Comercial Projects"}
          </TitleHolder>
          <IntroTextHolder>
              {props.language === "es" ? "Trabajamos para cumplir las mas altas exigiencias de nuestros clientes.": "We work to meet the highest demands of our customers."}
          </IntroTextHolder>
       </div>
      </Tween>
    </Reveal>
    
    
    <Grid data={props.data} language={props.language} gridType="COMERCIAL"/>
  
    <LeftraruStar/>
    <AllWork>
      <H3>
        <LinkTo to="/graphics">{translations.home.link[props.language]}</LinkTo>
      </H3>
    </AllWork>
    <AllWork>
      <H3>
        <LinkTo to="/about">{props.language === "es" ? "Conoce nuestros servicios.": "Get to know our services."}
</LinkTo>
      </H3>
      <H3>
        <LinkTo to="/services">{props.language === "es" ? "¿Qué es La Fabulosa?": "What is la Fabulosa?"}</LinkTo>
      </H3>
      
    </AllWork>
  </div>
);

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    dataHome: state.data.pages[2].acf,
    dataContact: state.data.pages[0].acf,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(Home);
