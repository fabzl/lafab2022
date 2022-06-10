import React from "react";
import { connect } from "react-redux";
import VideoHome from "../components/VideoHomeContact";
import {Route, Link, Routes, useLocation} from 'react-router-dom';

// import translations from "../translations";
console.log('current URL 👉️', window.location.href);

const Contact = props => (




  <div>
    {/* <VideoHomeContact
      video={props.dataContact.video}
      contact
      fontColor
      title={
        props.language === "es"
          ? props.dataContact.frase_contacto
          : props.dataContact.contact_phrase
      }
    /> */}
    {props.dataContact.mail}

  </div>
);


const mapStateToProps = state => {
  return {
    data: state.data.posts,
    language: state.data.language,
    dataContact: state.data.pages[0].acf
  };
};

export default connect(mapStateToProps)(Contact);
