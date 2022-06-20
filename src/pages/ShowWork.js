import React from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import translations from "../translations";
import { connect } from "react-redux";
import MainImage from "../components/MainImage";
import ProjectImage from "../components/ProjectImage";
//import Desc from "../components/Desc";
//import translations from "../translations";
import laurel from "../img/laurels_black.svg";
import { Waypoint } from 'react-waypoint';
import { colors } from "../styles/globals";
import ReactHtmlParser from 'react-html-parser'; 




const InfoSmall = styled.h5`
  color: ${colors.white};
  text-transform: uppercase;
  position: fixed;
  font-size:0.7rem;
  z-index: 500;

  &.category {
    top: 145px;
    left: 0px;
    transform: rotate(90deg);
    font-size:0.9rem;
  }
  &.country {
    top: 90px;
    right:20px;
    transform: rotate(90deg);
  }
  &.year {
    bottom: 260px;
    right: 20px;
    transform: rotate(90deg);
  }
`;




const Section = styled.div`
  padding: 4rem 0 2rem;
  width:100vw;
  background-color:${colors.black};
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

const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  color: ${colors.white};
  text-align: left;
 
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
};

const DescriptionText = styled.p`
padding: 0 90px;`;

const H2 = styled.h2`
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  line-height: 1em;
  margin: 2rem 0 0.6em;
  letter-spacing: 130%;
  text-align: center;
  font-size: 1.2rem;
  padding: 0 10%;
  width:100%;
  @media (min-width: 520px) {
    font-size: 1.8rem;
	margin-bottom: 20px;
    padding: 0;
  }
  @media (min-width: 1424px) {
	font-size: 2.2rem;
  }

  &.dark {
    color: ${colors.black};
  }
`;

const PrizeNameText = styled.p`
    flex-direction: column;
    max-width: 40%; 
    margin:  0 auto 5% auto;
    font-size: 1.6rem;
    font-weight:900;
    @media (max-width: 720px) {
      font-size: 1.2rem;
    }
	

`;
const PrizeWrapper = styled.div`
    flex-direction: column;
    display:flex;
    justify-content:center;
`;



const Prize= styled.div`
  display: flex;
  text-align:center;
  flex-direction: column;
  align-self:  center;
  width:100%;
`;

const Prizes = styled.div`
  margin: 25 auto;
  display: block;
  color: ${colors.black};
  flex-direction: row;
 
`;

 const Box = styled.div`

  padding: 15px 0;
  width: 100vw;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;


  background: linear-gradient(
    45deg,
    ${colors.orange} 0%,
    ${colors.violet} 100%
  );
  @media (min-width: 1200px) {
    min-height: 20vw;
  }
`;

const Item = ({ item  }) => 
      <Prize> 
         <div>
            <PrizeNameText>{item.split("/").join('\n')}</PrizeNameText>
         </div> 
         <Laurel src={laurel}/> 
    </Prize>;



const Laurel = styled.img`
  width:60%;
  position:absolute;
  text-align: center;
  left: 0; 
  right: 0; 
  top:50%;
  margin-left: auto; 
  margin-right: auto;
  transform: translateY(-50%);
  
  @media (min-width: 520px) {
  
	margin-top: 20px;

  }


  @media (min-width: 1024px) {
  }

`; 


const ShowWork = props => {
  // Filtrar a solamente los que tienen avatar_picture
  // const items = props.data.filter(item => item.acf.avatar_picture);
  const { posts, language } = props;
  const items = posts;



  // Chequear item
  const { link } = props.match.params;
  const key = items.map(element => element.slug).indexOf(link);
  if (key < 0) return <Redirect to="/" />;

  const {
    avatar_picture: { url},
    ano_del_proyecto,
    awards,
    boxtype,
    categoria,
    category,
    category_display,
    cliente,
    country,
    descripcion_del_proyecto,
    descripcion_del_proyecto_2,
    descripcion_del_proyecto_3,
    descripcion_del_proyecto_4,
    descripcion_del_proyecto_5,
    file_download,
    nombre_del_proyecto,
    pais,
    picture_five: { url5, title5, heigth5, width5 },
    picture_four: { url4, title4, heigth4, width4 },
    picture_three: { url3, title3, heigth3, width3 },
    picture_two: { url2, title2, heigth2, width2 },
    premios,
    project_description,
    project_description_2,
    project_description_3,
    project_description_4,
    project_description_5,
    project_name,
    vimeourl,
    web,

  } = items[key].acf;



  // const postContentData = items[key].content.rendered;

  // Sacar los Prev o nextLink
  const prevLink =
    key === 0 ? items[items.length - 1].slug : items[key - 1].slug;
  const nextLink =
    key === items.length - 1 ? items[0].slug : items[key + 1].slug;

  return (

    <Waypoint
    onEnter={_handleWaypointEnterMain}
  >
    <Section>

      <MainImage
        nombre_del_proyecto={
          language === "es" ? nombre_del_proyecto : project_name
        }
        url={url}
        prevLink={prevLink}
        nextLink={nextLink}
      />
      
      <InfoSmall className="category">  {(language === "es") ? categoria  : category_display } 
      </InfoSmall>
      <InfoSmall className="country">  {(language === "es") ? pais  : country }</InfoSmall>
      <InfoSmall className="year"> {ano_del_proyecto} </InfoSmall>
        
 




     <Container>

     <DescriptionText>
     { ReactHtmlParser (
     ( language === "es" ) ? 
     
      (descripcion_del_proyecto !== "" ) ? descripcion_del_proyecto : ""
     : 
      (project_description !== "" ) ?   project_description : ""
      ) }
      </DescriptionText>


{/* desc2  */}
      <DescriptionText>
     { ReactHtmlParser (
     ( language === "es" ) ? 
     
      (descripcion_del_proyecto_2 !== "" ) ? descripcion_del_proyecto_2 : ""
     : 
      (project_description_2 !== "" ) ?   project_description_2 : ""
      ) }
      </DescriptionText>

    { (items[key].acf.picture_two.url !== false )? 
      <ProjectImage
        url={items[key].acf.picture_two.url}
      /> : ""
    }

    {/* desc3  */}
    <DescriptionText>
     { ReactHtmlParser (
     ( language === "es" ) ? 
     
      (descripcion_del_proyecto_3 !== "" ) ? descripcion_del_proyecto_3 : ""
     : 
      (project_description_3 !== "" ) ?   project_description_3 : ""
      ) }
      </DescriptionText>
    
    
      { (items[key].acf.picture_three.url !== false )? 
      <ProjectImage
        url={items[key].acf.picture_three.url}
      /> : ""
    } 

{/* desc4  */}
<DescriptionText>
     { ReactHtmlParser (
     ( language === "es" ) ? 
     
      (descripcion_del_proyecto_4 !== "" ) ? descripcion_del_proyecto_4 : ""
     : 
      (project_description_4 !== "" ) ?   project_description_4 : ""
      ) }
      </DescriptionText>


      { (items[key].acf.picture_four.url !== false )? 
      <ProjectImage
        url={items[key].acf.picture_four.url}
      /> : ""
    }


{/* desc5  */}
<DescriptionText>
     { ReactHtmlParser (
     ( language === "es" ) ? 
     
      (descripcion_del_proyecto_5 !== "" ) ? descripcion_del_proyecto_5 : ""
     : 
      (project_description_5 !== "" ) ?   project_description_5 : ""
      ) }
      </DescriptionText>

      { (items[key].acf.picture_five.url !== false )? 
      <ProjectImage
        url={items[key].acf.picture_five.url}
      /> : ""
    }
      {/* {if (vimeourl) {
        <Play onClick={() => props.playVideo(props.videoUrl)}>
          <i className="far fa-play-circle fa-5x" />
        </Play>
      } */}
      



      {/* <Desc
        title={language === "es" ? nombre_del_proyecto : project_name}
        desc={
          language === "es" ? descripcion_del_proyecto : project_description
        }
        client={cliente}
        web={web}
        language={language}
      /> */}


      </Container>


        {(!awards  || !premios ) ? "": 
        <Prizes>
        <Box>
            <H2 className="dark">
              {translations.about.prizes[props.language]} 
            </H2>
            <PrizeWrapper>
                <Item item={ props.language === "es" ? premios : awards}  />
             </PrizeWrapper>
        </Box>
      </Prizes>}


    </Section>

    </Waypoint>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.data.posts,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(ShowWork);
