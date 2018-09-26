import Link from 'next/link'
import Page from '../components/Page.js'
import {
  Jumbotron,
  Container,
  Button,
  Media
} from 'reactstrap';
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
    heroBannerBackgroundStyle={{
      backgroundPositionY: `calc(100% - 130px)`,
      backgroundSize: '100%',
    }}
    heroBannerParallax
    >

    <Container>
      <MediaList className="showcase">
        <Media tag="li">
          <Media left top href="#">
            <Media object src="/static/images/about.jpeg" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Top aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>

        <Media tag="li">
          <Media left top href="#">
            <Media object src="/static/images/about.jpeg" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Top aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>

        <Media tag="li">
          <Media left top href="#">
            <Media object src="/static/images/about.jpeg" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Top aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>

        <Media tag="li">
          <Media left top href="#">
            <Media object src="/static/images/about.jpeg" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Top aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>

        <Media tag="li">
          <Media body>
            <Media heading>
              Media heading
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
          <Media right href="#">
            <Media object src="/static/images/about.jpeg" alt="Generic placeholder image" />
          </Media>
        </Media>
      </MediaList>

    </Container>
  </Page>
)
