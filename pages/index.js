import Link from 'next/link'
import { Fragment } from 'react'
import {
  Jumbotron,
  Container,
  Button,
  Row,
  Col,
  Media,
  UncontrolledCarousel
} from 'reactstrap';
import Slider from "react-slick";
import Ionicon from 'react-ionicons'

import Page from '../components/Page.js'
import MediaList from '../components/MediaList.js'
import SplitColumnBlock from '../components/SplitColumnBlock.js'
import Background from '../components/Background.js'
import Testimonials from '../components/Testimonials.js'
import withData from '../lib/withData'

export default withData(props => (
  <Page
    title={"Homepage"}
    heroBannerTitle={<span>Unlock your business <span className="highlight">potential</span></span>}
    heroBannerDescription={
      <Fragment>
        <span className="description">Be <span className="highlight">one step</span> ahead of your competitors through digital transformation</span>
        {/*<span className="categories">
          <Ionicon
            icon="ios-build-outline"
            fontSize="40px"
            color="#6a2e35"
          />
          {` Web `}
          <span className="divider">|</span>
          {` Mobile `}
          <span className="divider">|</span>
          {` Chatbot Development`}
        </span>
        <span className="categories">
          <Ionicon
          icon="ios-easel-outline"
          fontSize="40px"
          color="#6a2e35"
          />
          {` UI `}
          <span className="divider">|</span>
          {` UX Design`}
        </span>
        <span className="categories">
          <Ionicon
          icon="ios-paper-outline"
          fontSize="40px"
          color="#6a2e35"
          />
          {` Content `}
          <span className="divider">|</span>
          {` Social Media Management`}
        </span>*/}
      </Fragment>
    }
    heroBannerButton={{
      url: '#',
      text: 'Get started',
      color: 'primary',
      customProps: {
        size: 'lg',
      }
    }}
    headerFullWidth
    headerTextProps={{
      lg: {
        size: 8,
        offset: 2,
      }
    }}
    >

    <Container>
      <Row>
        <Col md="12">
          <h1 className="display-4 bold">We are R<span className="highlight">|</span>202.</h1>
          <h2 className="">We're crazy about three things.</h2>

          <MediaList className="showcase"
            items={[
              {
                icon: {
                  icon: "ios-build-outline",
                  fontSize: "80px",
                  color: "#6a2e35",
                },
                headingText: "Tailor-fit Technology",
                bodyText: "Oh Leela! You're the only person I could turn to; you're the only person who ever loved me."
              },
              {
                icon: {
                  icon: "ios-easel-outline",
                  fontSize: "80px",
                  color: "#6a2e35",
                },
                headingText: "Growth-driven Design",
                bodyText: "Enough about your promiscuous mother, Hermes! We have bigger problems."
              },
              {
                icon: {
                  icon: "ios-paper-outline",
                  fontSize: "80px",
                  color: "#6a2e35",
                },
                headingText: "Purposeful Content",
                bodyText: "Of all the friends I've had… you're the first. You wouldn't. Ask anyway! Wow, you got that off the Internet? In my day, the Internet was only used to download pornography. Why would a robot need to drink?"
              }
            ]}
          />
        </Col>
      </Row>
    </Container>
    <SplitColumnBlock
      heading="Sample "
      leadText="Far far away, behind the word mountains, <a href='#'>far from the countries Neyeyeye and ASDasldjkasld</a>, there live the blind texts. Separated they live in asdasdasd right at the coast of the Semantics, a large language ocean."
      subtitle={
        "<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p><p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>"}
    />
    <Container fluid>
      <Slider
        dots
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        className="carousel"
        >
        <div className="slide-container">
          <img src="/static/images/slider-1.jpg" />
        </div>
        <div className="slide-container">
          <img src="/static/images/slider-2.jpg" />
        </div>
        <div className="slide-container">
          <img src="/static/images/slider-3.jpg" />
        </div>
      </Slider>
    </Container>

    <Background type="light">
      <Container>
        <Row>
          <Col md="12">
            <MediaList className="showcase"
              noBorder
              centerItems
              rowMax={3}
              transparent
              items={[
                {
                  icon: {
                    icon: "ios-ionitron-outline",
                    fontSize: "80px",
                    color: "#d6dadd"
                  },
                  headingText: "Top aligned media",
                  bodyText: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo."
                },
                {
                  icon: {
                    icon: "ios-refresh",
                    fontSize: "80px",
                    color: "#d6dadd"
                  },
                  headingText: "Top aligned media",
                  bodyText: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo."
                },
                {
                  icon: {
                    icon: "ios-pizza-outline",
                    fontSize: "80px",
                    color: "#d6dadd"
                  },
                  headingText: "Top aligned media",
                  bodyText: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo."
                },
                {
                  icon: {
                    icon: "ios-bulb-outline",
                    fontSize: "80px",
                    color: "#d6dadd"
                  },
                  headingText: "Top aligned media",
                  bodyText: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo."
                },
                {
                  icon: {
                    icon: "ios-nutrition-outline",
                    fontSize: "80px",
                    color: "#d6dadd"
                  },
                  headingText: "Top aligned media",
                  bodyText: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo."
                },
                {
                  icon: {
                    icon: "ios-infinite-outline",
                    color: "#d6dadd",
                    fontSize: "80px"
                  },
                  headingText: "Top aligned media",
                  bodyText: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo."
                }
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Background>
    <Container>
      <Testimonials
        items={[
          '“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”',
          "“When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.”",
          "“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”"
        ]}
      />
    </Container>
  </Page>
))
