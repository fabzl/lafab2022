import React, { Component } from "react";
import styled from "styled-components";
import Box from "./Box";


class Grid extends Component {
  state = {
    column: "1fr"
  };
 

  renderBoxes = () => {
  
        const { language, data, gridType } = this.props;

        const type = gridType;        

        
    return data.map((item, key) => {
      // Si no existe acf implementado
      if (!item.acf.avatar_picture) return null;
      if (!item.acf.category === "BRANDING") return null;

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
        border: 6px solid white;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr )); 
        justify-content: space-around;


    `;

    return <Wrap>
      {this.renderBoxes()}</Wrap>;
  }
}

export default Grid;
