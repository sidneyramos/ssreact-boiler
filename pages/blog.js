import Page from '../components/Page'
import Link from 'next/link'
import {
  Container
} from 'reactstrap'


function getPosts () {
  return [
    { id: 'blogpost-1', title: 'Sample Post 1'},
    { id: 'blogpost-2', title: 'Sample Post 2'},
    { id: 'blogpost-3', title: 'Sample Post 3'},
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
      <h1>Blog Posts</h1>
      <ul>
        {getPosts().map((post) => (
          <li>
            <Link href={`/p/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  </Page>
)

export default Blog
