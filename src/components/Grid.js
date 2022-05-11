import React, { Component } from "react";
import styled from "styled-components";
import Box from "./Box";

class Grid extends Component {
  state = {
    column: "1fr"
  };

  setfullWidth = () => {
    if (this.props.large) {
      return true;
    } else {
      return false;
    }
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
        cliente
      } = item.acf;
      return (
        <Box
          key={item.id}
          image={url}
          title={language === "es" ? nombre_del_proyecto : project_name}
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
    grid-template-columns: ${this.setfullWidth() ? "1fr 1fr 1fr" : "1fr 1fr 1fr"};
      
      & div:last-child:nth-child(odd) {
        grid-column: 1 / 5;
      }
      &.full {
        grid-column: 1 / 5;
      }
    `;

    return <Wrap>{this.renderBoxes()}</Wrap>;
  }
}

export default Grid;
