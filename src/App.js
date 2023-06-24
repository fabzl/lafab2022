import React, { Component, Suspense, lazy } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

// Components
import Header from "./components/Header";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Fade from "./components/Fade";
import Footer from "./components/Footer";

// Redux Actions
import { fetchData, loaderLoading, contentLoaded, loaderVisible } from "./redux/actions";

// Styled Components
const Wrap = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: 100vw;
  flex-direction: column;
  height: 100%;
  top: 0;
`;

// Lazy loaded Components
const Home = lazy(() => import('./pages/Home'));
const Work = lazy(() => import('./pages/Work'));
const ShowWork = lazy(() => import('./pages/ShowWork'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));

class App extends Component {
  constructor(props) {
    super();
    props.fetchData();
    props.loaderLoading();
  }

  setToDestroy = props => {
    this.props.contentLoaded();
  };

  render() {
    if (this.props.posts.length === 0) return <Loader />;

    return (
      <Wrap {...this.props}>
        {this.setToDestroy()}
        <Loader />
        <Fade in={this.props.showVideo}>
          <Modal />
        </Fade>
        <Router>
          <div style={{ display: "flex", flex: 1 }}>
            <Header />
            <div style={{ flex: 1 }}>
              <Suspense fallback={<Loader />}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/work" component={Work} />
                  <Route exact path="/work/:link" component={ShowWork} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/services" component={Services} />
                </Switch>
              </Suspense>
            </div>
          </div>
        </Router>
        <Footer />
      </Wrap>
    );
  }
}

const mapStateToProps = state => ({
  showVideo: state.video.showVideo,
  scrollY: state.video.scrollY,
  pages: state.data.pages,
  posts: state.data.posts,
  loading: state.data.loading,
  loaded: state.loader.loaded,
  visible: state.loader.visible
});

export default connect(mapStateToProps, {
  fetchData,
  loaderLoading,
  loaderVisible,
  contentLoaded
})(App);