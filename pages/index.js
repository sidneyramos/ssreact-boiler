import Link from 'next/link'
import {
  Jumbotron,
  Container,
  Button,
  Row,
  Col,
  Media
} from 'reactstrap';
import Ionicon from 'react-ionicons'
import Page from '../components/Page.js'
import MediaList from '../components/MediaList.js'

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
      text: 'Learn More',
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
          <MediaList className="showcase overlap-top">
            <Media tag="li">
              <Media left top href="#" className="mb-3">
                <Ionicon icon="md-heart" fontSize="80px" color="red" beat />
              </Media>
              <Media body>
                <Media heading className="mb-4">
                  Top aligned media
                </Media>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
              </Media>
            </Media>

            <Media tag="li">
              <Media left top href="#" className="mb-3">
                <Ionicon icon="ios-refresh" fontSize="80px" color="#347eff" rotate />
              </Media>
              <Media body>
                <Media heading className="mb-4">
                  Top aligned media
                </Media>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
              </Media>
            </Media>

            <Media tag="li">
              <Media left top href="#" className="mb-3">
                <Ionicon icon="md-pizza" shake fontSize="80px" color="orange" />
              </Media>
              <Media body>
                <Media heading className="mb-4">
                  Top aligned media
                </Media>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
              </Media>
            </Media>

            <Media tag="li">
              <Media left top href="#" className="mb-3">
                <Ionicon icon="md-infinite" fontSize="80px" rotate />
              </Media>
              <Media body>
                <Media heading className="mb-4">
                  Top aligned media
                </Media>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
              </Media>
            </Media>
          </MediaList>
        </Col>
      </Row>

    </Container>
  </Page>
)
