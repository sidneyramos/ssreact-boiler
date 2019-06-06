import Link from 'next/link'
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

import Page from '../components/Page.js'
import MediaList from '../components/MediaList.js'
import SplitColumnBlock from '../components/SplitColumnBlock.js'
import Background from '../components/Background.js'
import Testimonials from '../components/Testimonials.js'
import withData from '../lib/withData'

export default withData(props => (
  <Page
    title={"Homepage"}
    heroBannerTitle="Daylight and everything."
    //headerVideoUrl={"https://storage.googleapis.com/coverr-main/mp4/Travaho.mp4"}
    headerImageUrl={"/static/images/banner-image.jpeg"}
    heroBannerDescription="Bender, this is Fry's decision… and he made it wrong. So it's time for us to interfere in his life. She also liked to shut up! Oh yeah, good luck with that. I haven't felt much of anything since my guinea pig died."
    heroBannerSmallDescription="Quite possible. We live long and are celebrated poopers."
    heroBannerButton={{
      url: '#',
      text: 'Learn More'
    }}
    heroBannerBackgroundImage='/static/images/building.jpeg'
    // heroBannerBackgroundStyle={{
    //   backgroundPositionY: `calc(100% - 130px)`,
    //   backgroundSize: '100%',
    // }}
    heroBannerParallax
    >

    <Container>
      <Row>
        <Col md="12">
          <MediaList className="showcase"
            overlapTop
            items={[
              {
                icon: {
                  icon: "md-heart",
                  fontSize: "80px",
                  color: "red",
                  beat: true
                },
                headingText: "Subjugated, yet honored.",
                bodyText: "Oh Leela! You're the only person I could turn to; you're the only person who ever loved me."
              },
              {
                icon: {
                  icon: "ios-refresh",
                  fontSize: "80px",
                  color: "#347eff",
                  rotate: true,
                },
                headingText: "Your lyrics lack subtlety",
                bodyText: "Enough about your promiscuous mother, Hermes! We have bigger problems."
              },
              {
                icon: {
                  icon: "md-pizza",
                  fontSize: "80px",
                  color: "orange",
                  shake: true
                },
                headingText: "That makes me feel angry",
                bodyText: "Of all the friends I've had… you're the first. You wouldn't. Ask anyway! Wow, you got that off the Internet? In my day, the Internet was only used to download pornography. Why would a robot need to drink?"
              },
              {
                icon: {
                  icon: "md-infinite",
                  fontSize: "80px",
                  rotate: true
                },
                headingText: "This opera's as lousy as it is brilliant",
                bodyText: "You'll have all the Slurm you can drink when you're partying with Slurms McKenzie!"
              }
            ]}
          />
        </Col>
      </Row>
    </Container>
    <SplitColumnBlock
      heading="Maybe I love you so much I love you no matter who you are pretending to be. "
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
