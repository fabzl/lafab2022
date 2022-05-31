import React, { Component } from "react";
import styled from "styled-components";
import Box from "./Box";


class Grid extends Component {
  state = {
    column: "1fr"
  };
 

  renderBoxes = () => {
  
        const { language, data, gridType } = this.props;
        console.log("gridType", gridType);
        let type = gridType;        
     
        
    return data.map((item, key) => {
      // Si no existe acf implementado
      
      if (!item.acf.category.toString() == type.toString())return null;
      if (!item.acf.avatar_picture) return null;
     
      console.log(item.acf.project_name, type.toString(), item.acf.category.toString() == type.toString())
     
     
     

      const {
        avatar_picture: { url },
        nombre_del_proyecto,
        project_name,
        categoria,
        category,
        cliente,
        boxtype,
        pais,
        country,
        countryname,

      } = item.acf;
     if (item.acf.category.toString() == type.toString()) 
      return (
        <Box
        
          boxtype={boxtype}
          key={item.id}
          pais={pais}
          country={country}
          image={url}
          title={language === "es" ? nombre_del_proyecto : project_name}
          countryname={language === "es" ? pais : country}
          category={language === "es" ? categoria : category}
          client={cliente}
          videoUrl={item.acf.vimeourl}
          link={this.props.link ? item.slug : null}
        />
      );
    });
  };

  render() {
    const Wrap = styled.div`
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr )); 
        justify-content: space-between;
       display:grid;

    `;

    return <Wrap>
      {this.renderBoxes()}</Wrap>;
  }
}

export default Grid;
