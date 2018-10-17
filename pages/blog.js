import Page from '../components/Page'
import PostCollection from '../components/PostCollection'
import Link from 'next/link'
import {
  Container
} from 'reactstrap'


function getPosts () {
  return [
    { id: 'blogpost-1', title: 'Sample Post 1', image: '/static/images/slider-1.jpg'},
    { id: 'blogpost-2', title: 'Sample Post 2', image: '/static/images/slider-2.jpg'},
    { id: 'blogpost-3', title: 'Sample Post 3', image: '/static/images/slider-3.jpg'},
  ]
}

const Blog = () => (
  <Page
    title="Blog"
    heroBannerTitle="This ain't a blog"
    heroBannerDescription="This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information."
    heroBannerBackgroundImage='/static/images/blog-banner-1.jpg'
  >
    <Container>
      <PostCollection
        posts={getPosts()}
      />
    </Container>
  </Page>
)

export default Blog
