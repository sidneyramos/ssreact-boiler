import React from 'react';
import Link from 'next/link'
import classNames from 'classnames';
import {
  Player,
  BigPlayButton
} from 'video-react';
import {
  Jumbotron,
  Container,
  Button,
  Row,
  Col
} from 'reactstrap';
import Layout from '../components/Layout.js'
import HeroBanner from '../components/HeroBanner.js'
import PostLink from '../components/PostLink.js'

class Post extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      playerLoad: false,
    }
  }

  componentDidMount() {
    this.setState({
      playerLoad: true,
    });
  }

  render() {
    return (
      <Layout title={this.props.title}>
        <HeroBanner 
            heroBannerParallax = {this.props.heroBannerParallax}
            headerFullWidth = {this.props.headerFullWidth}
            heroBannerTitle = {this.props.heroBannerTitle}
            heroBannerDescription = {this.props.heroBannerDescription}
            heroBannerSmallDescription = {this.props.heroBannerSmallDescription}
            heroBannerButton = {this.props.heroBannerButton}
            headerVideoUrl = {this.props.headerVideoUrl}
            headerImageUrl = {this.props.headerImageUrl}
            heroBannerBackground = {this.heroBannerBackground}
            playerLoad = {this.state.playerLoad}
        />

        {this.props.children}
      </Layout>
    );
  }
}

export default Post
