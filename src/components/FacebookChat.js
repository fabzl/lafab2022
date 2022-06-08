import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';

class FacebookChat extends React.Component {

   state ={ 
    stylesObj : "#373B44"
  }
  render() {
    const stylesObj = {
      background: this.state.color
    };

    return (
      <MessengerCustomerChat
         pageId="798282260458080"
         htmlRef="<REF_STRING>"
         ></MessengerCustomerChat>
    )
  }
};

const mapStateToProps = state => {
  return {
    loaded: state.loader.loaded,
    visible: state.loader.visible
  };
};

export default connect(mapStateToProps)(FacebookChat);





