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

export default () => (
  <Page
    title={"Homepage"}
    heroBannerTitle="Hello, world! This is a homepage."
    //headerVideoUrl={"https://storage.googleapis.com/coverr-main/mp4/Travaho.mp4"}
    headerImageUrl={"/static/images/banner-image.jpeg"}
    heroBannerDescription="This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information."
    heroBannerSmallDescription="It uses utility classes for typography and spacing to space content out within the larger container."
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
                headingText: "Top aligned media",
                bodyText: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo."
              },
              {
                icon: {
                  icon: "ios-refresh",
                  fontSize: "80px",
                  color: "#347eff",
                  rotate: true,
                },
                headingText: "Top aligned media",
                bodyText: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo."
              },
              {
                icon: {
                  icon: "md-pizza",
                  fontSize: "80px",
                  color: "orange",
                  shake: true
                },
                headingText: "Top aligned media",
                bodyText: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo."
              },
              {
                icon: {
                  icon: "md-infinite",
                  fontSize: "80px",
                  rotate: true
                },
                headingText: "Top aligned media",
                bodyText: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo."
              }
            ]}
          />
        </Col>
      </Row>
    </Container>
    <SplitColumnBlock
      heading="Good Blabla is a Good blabla"
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
        <div>
          <img src="/static/images/slider-1.jpg" />
        </div>
        <div>
          <img src="/static/images/slider-2.jpg" />
        </div>
        <div>
          <img src="/static/images/slider-3.jpg" />
        </div>
      </Slider>
      {/*<UncontrolledCarousel
        items={[
          {
            src: '/static/images/slider-1.jpg',
            altText: 'Slide 1'
          },
          {
            src: '/static/images/slider-2.jpg',
            altText: 'Slide 2'
          },
          {
            src: '/static/images/slider-3.jpg',
            altText: 'Slide 3'
          }
        ]}
      />*/}
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
)
