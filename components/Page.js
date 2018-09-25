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
import PostLink from '../components/PostLink.js'

class Page extends React.Component {

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
        <Row>
          <Col lg={!this.props.headerFullWidth ? 6 : null}>
            <Jumbotron className={classNames("transparent", "clear-padding")}>
              <h1 className="display-4">{this.props.heroBannerTitle}</h1>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Jumbotron>
          </Col>
          {
            !this.props.headerFullWidth &&
            <Col lg="6">
              {(this.state.playerLoad && this.props.headerVideoUrl) &&
                <Player
                  src={this.props.headerVideoUrl}
                >
                  <BigPlayButton position="center" />
                </Player>
              }
            </Col>
          }
        </Row>

        {this.props.children}
      </Layout>
    );
  }
}

export default Page
