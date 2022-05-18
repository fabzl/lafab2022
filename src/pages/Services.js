import React from "react";
import { connect } from "react-redux";
import VideoHome from "../components/VideoHome";

// import translations from "../translations";

const Services = props => (
  <div>

    Strategy

Brand Positioning

Content & Messaging

Brand Workshops

Research & Analysis

Brand 

Naming

Identity Creation

Guardianship

Livery Design

Brand Guidelines

Art Direction

Image Making

Marketing

Print & Publishing

Creative Consulting

Digital Design

Digital Strategy

UI/UX Design

EDM Design

Social Media Design

Environmental 

Place Experience

Interior Strategies

Venue Brand Touchpoints

Wayfinding

Content

Content & Messaging

Marketing Plans

Illustration & Image Making

Photography

Videography / Animated GIFs

Customer Experience
  </div>
);

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    language: state.data.language,
    dataContact: state.data.pages[0].acf
  };
};

export default connect(mapStateToProps)(Services);
