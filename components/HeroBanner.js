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

const HeroBanner = (props) => (
  <div className={classNames("hero-banner-background", {"parallax": props.heroBannerParallax})} style={props.heroBannerBackground}>
    <Container className="hero-banner-container">
      <Row className="hero-banner align-items-lg-center">
        <Col lg={!props.headerFullWidth ? 6 : null}>
          <Jumbotron className={classNames("transparent", "clear-padding")}>
            <h1 className="display-4">{props.heroBannerTitle}</h1>
            {
              props.heroBannerDescription &&
              <p className="lead">
              { props.heroBannerDescription }
              </p>
            }
            {
              props.heroBannerSmallDescription &&
              <div>
                <hr className="my-2" />
                <p>{props.heroBannerSmallDescription} </p>
              </div>
            }
            {
              props.heroBannerButton &&
              <p className="lead">
                <Link href={props.heroBannerButton.url}>
                  <Button color="primary">{props.heroBannerButton.text}</Button>
                </Link>
              </p>
            }
          </Jumbotron>
        </Col>
        {
          !props.headerFullWidth &&
          <Col lg="6">
            {(props.playerLoad && props.headerVideoUrl) &&
              <Player
                src={props.headerVideoUrl}
              >
                <BigPlayButton position="center" />
              </Player>
            }
            {props.headerImageUrl &&
              <div className="image-container">
                <img src={props.headerImageUrl} />
              </div>
            }
          </Col>
        }
      </Row>
    </Container>
  </div>
)

export default HeroBanner
