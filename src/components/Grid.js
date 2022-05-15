import React, { Component } from "react";
import styled from "styled-components";
import Box from "./Box";


class Grid extends Component {
  state = {
    column: "1fr"
  };
 

  renderBoxes = () => {
    const { language, data } = this.props;

    return data.map((item, key) => {
      // Si no existe acf implementado
      if (!item.acf.avatar_picture) return null;
      const {
        avatar_picture: { url },
        nombre_del_proyecto,
        project_name,
        categoria,
        category,
        cliente,
        boxtype,
        pais,
        country
      } = item.acf;
      return (
        <Box
          boxtype={boxtype}
          key={item.id}
          pais={pais}
          country={country}
          image={url}
          title={language === "es" ? nombre_del_proyecto : project_name}
          country={language === "es" ? pais : country}
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
   
    padding: 2vw;
    column-gap: 2vw;
    row-gap: 2vw;
    display: grid;
    align-self:center;
    grid-template-columns:  1fr 1fr 1fr;

    @media screen and (max-width: 576px) {
      grid-template-columns:  1fr 1fr;
    }
    @media screen and (min-width: 1400px) {
      grid-template-columns:  1fr 1fr 1fr 1fr;
    }
    @media screen and (min-width: 1700px) {
      grid-template-columns:  1fr 1fr 1fr 1fr 1fr;
    }
    `;

    return <Wrap>
      {this.renderBoxes()}</Wrap>;
  }
}

export default Grid;
