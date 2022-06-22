import { connect } from "react-redux";
//import VideoHome from "../components/VideoHome";
import React from 'react';
import { Waypoint } from 'react-waypoint';
import styled from "styled-components";
import LeftraruStar from "../components/LeftraruStar";
import { colors } from "../styles/globals";

import IconStorytelling from "../img/storytelling.svg";
import IconContent from "../img/content.svg";
import IconInteractive from "../img/interactive.svg";
import IconBrand from "../img/brands.svg";
import IconStrategy from "../img/strategy.svg";
import IconMarketing from "../img/marketing.svg";



const TitleHolder = styled.h2`
  color: ${colors.black}
  text-align:center;
  font-size:2rem;
  margin-bottom:3px;
`;
const IntroTextHolder = styled.p`
  color: ${colors.black}
  text-align:center;
  font-size:2rem;
  margin-bottom:3px;
  padding: 0 25% 10% 25%;

  &:before {
  }
`;


const IconContainer = styled.img`
margin: 0 auto;
max-width: 150px;
max-height: 150px;
transition: all .7s;
margin-top:50px;
&.out {
  transform: rotate(20deg) scale(0.5);
  opacity:0;
}

&.in {
  opacity:1;
  transform: rotate(0deg);
}

&.leave {
  transform: rotate(20deg) scale(0.5);
  opacity:0;
}
&:hover {
  transform: rotate(0deg) scale(1.2);
  opacity:0.8;
}

}`;

const ServiceHeader = styled.div`
  background-color: #282c34; 
  color: ${colors.white}
  height: 100%;
h2 {
      text-align:center;
      margin: 0;
      padding: 100px;
  }
    flex-direction: row;
`;


const  ServiceGroup = styled.div`
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr )); 
align-self: center;

@media (min-width: 1200px) {
     
      grid-template-columns: 1fr 1fr 1fr;
}
justify-content: space-between;
display:grid;
padding: 10vw;
color: ${colors.white};
background: ${colors.black};

h4 {
  font-size: 1.1rem;
}

    ul {
      list-style: none;
      padding: 0px;
      font-size: 0.9rem;
      line-height: 300%; 
  }

  ul li:before
  {
      content: '';
      margin: 0 1em;
      
  }
`;

const smoothScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 0) {
    setTimeout(() => {
      window.scrollTo(0, scrollY - 30 >= 0 ? window.scrollY - 30 : 0);
      smoothScroll();
    }, 10);
  }
};


const  _handleWaypointEnterMain = e => {
  smoothScroll()
  //console.log ("_handleWaypointEnterMain", e);
}

const  _handleWaypointEnter = e => {
    //console.log ("_handleWaypointEnter", e);
  }

  const  _handleWaypointLeave = e => {
    //console.log ("_handleWaypointLeave", e);

  }
  const _handlePositionChange = e => {
    ///console.log ("_handlePositionChange", e);
  }

const Services = props => (

  <Waypoint
          onEnter={_handleWaypointEnterMain}
          >
            <div>

    <ServiceHeader>
       <h2>{props.language === "es" ? "Nuestros Fabulosos Servicios": "Our Fabulous Services"} </h2>
    </ServiceHeader> 

    <ServiceGroup>
          <div className="service-block">
          <Waypoint
          onEnter={_handleWaypointEnter}
          onLeave={_handleWaypointLeave}
          onPositionChange={_handlePositionChange}
>
          <IconContainer src={IconStorytelling} alt="Storytelling Icon"/>
        </Waypoint>

            <h4> {props.language === "es" ? "Narrativa" : "Storytelling"}</h4>
            <ul>
              <li>{props.language === "es" ? "Diseño de Conceptos":"Concept design"}</li>
              <li>{props.language === "es" ? "Desarrollo de Proyectos":"Project Development"}</li>
              <li>{props.language === "es" ? "Escritura de Guión":"Scriptwriting"}</li>
              <li>{props.language === "es" ? "Storyboards":"Storyboarding"}</li>
              <li>{props.language === "es" ? "Animatic":"Animatic"}</li>
            </ul>
          </div>
            
          <div className="service-block">
          <Waypoint
          onEnter={_handleWaypointEnter}
          onLeave={_handleWaypointLeave}
          onPositionChange={_handlePositionChange}
>
          <IconContainer src={IconContent} alt="Content Icon"/>
        </Waypoint>
            <h4>{props.language === "es" ? "Creación de Contenidos" : "Content Creation"}</h4>
            <ul>
              <li>{props.language === "es" ? "Animación":"Animation"} </li>
              <li>{props.language === "es" ? "Filmación":"Filmaking"}</li>
              <li>{props.language === "es" ? "Ilustración":"Illustration"}</li> 
              <li>{props.language === "es" ? "Fotográfia":"Photography"}</li>
              <li>{props.language === "es" ? "Filmación con Drone":"Drone Filming"}</li>
            </ul>
            </div>

       
       
        <div className="service-block">
          <Waypoint
          onEnter={_handleWaypointEnter}
          onLeave={_handleWaypointLeave}
          onPositionChange={_handlePositionChange}
>
          <IconContainer src={IconInteractive} alt="Interactive Icon"/>
        </Waypoint>

        <h4>{props.language === "es" ?"Interactividad":"Interactive"}</h4>
        <ul>
          <li>{props.language === "es" ? "Diseño Web":"Web Design"}</li>
          <li>{props.language === "es" ? "Programación":"Coding"}</li>
          <li>{props.language === "es" ? "Aplicaciones Móviles":"Apps"}</li>
          <li>{props.language === "es" ? "Videojuegos":"Videogames"}</li>
          <li>{props.language === "es" ? "Juegos de Mesa":"Boardgames"}</li>
        </ul>
        </div>

        <div className="service-block">
        <Waypoint
          onEnter={_handleWaypointEnter}
          onLeave={_handleWaypointLeave}
          onPositionChange={_handlePositionChange}
>
          <IconContainer src={IconBrand} alt="Brand Icon"/>
        </Waypoint>


            <h4>{props.language === "es" ? "Diseño de Marca": "Brand"}</h4>
            <ul>
              <li>{props.language === "es" ? "Creación de Identidad":"Identity Creation"}</li>
              <li>{props.language === "es" ? "Manual de Marca":"Brand Guidelines"}</li>
              <li>{props.language === "es" ? "Dirección de Arte":"Art Direction"}</li>
              <li>{props.language === "es" ? "Diseño de Logotipo":"Logo Design"}</li>
              <li>{props.language === "es" ? "Experiencia de Marca":"Brand Experience"}</li>
            </ul>
            </div>

          <div className="service-block">
          <Waypoint
          onEnter={_handleWaypointEnter}
          onLeave={_handleWaypointLeave}
          onPositionChange={_handlePositionChange}
>
          <IconContainer src={IconStrategy} alt="Strategy Icon"/>
        </Waypoint>

            <h4>{props.language === "es" ? "Estrategia": "Strategy"}</h4>
            <ul>
              <li>{props.language === "es" ? "Posicionamiento":"Positioning"}</li>
              <li>{props.language === "es" ? "Redacción":"Messaging"}</li>
              <li>{props.language === "es" ? "Talleres":"Workshops"}</li>
              <li>{props.language === "es" ? "Investigación y Analisis":"Research & Analysis"}</li>
              <li>{props.language === "es" ? "Planes de Marketing":"Marketing Plans"}</li>
            </ul>
            </div>


        <div className="service-block">
        <Waypoint
          onEnter={_handleWaypointEnter}
          onLeave={_handleWaypointLeave}
          onPositionChange={_handlePositionChange}
>
          <IconContainer src={IconMarketing} alt="Marketing Icon"/>
        </Waypoint>

        <h4>{props.language === "es" ? "Marketing": "Marketing"}</h4>
        <ul>
          <li>{props.language === "es" ? "Impresos y Publicaciones":"Print & Publishing"}</li>
          <li>{props.language === "es" ? "Consultoría Creativa":"Creative Consulting"}</li>
          <li>{props.language === "es" ? "Campañas Digitales":"Digital Campaigns"}</li>
          <li>{props.language === "es" ? "Mailing":"Mailing"}</li>
          <li>{props.language === "es" ? "Redes Sociales":"Social Media"}</li>
        </ul>
        </div>
  </ServiceGroup>
  <LeftraruStar/>       
    <TitleHolder>
         {props.language === "es" ? "Solicita tu consultoría gratis" : "Ask for your free consultation"}
    </TitleHolder>
    <IntroTextHolder>
         {props.language === "es" ? "Nos gusta ayudar, hacemos proyectos, videos, historias de marca y contenido digital para empresas que necesitan involucrar a clientes y empleados, y para personas que quieren dejar un legado. Pide tu primera reunion gratis." : "We like to help, we make projectsks, videos, brand stories, and digital content for companies that need to engage customers and employees, and for individuals who want to leave a legacy. Ask for your free first meeting."}
    </IntroTextHolder>

  </div>

  </Waypoint>

  );
 
const mapStateToProps = state => {
  return {
    data: state.data.posts,
    language: state.data.language,
    dataContact: state.data.pages[0].acf
  };
};

export default connect(mapStateToProps)(Services);
