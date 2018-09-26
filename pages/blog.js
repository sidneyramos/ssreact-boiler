import Page from '../components/Page'
import PostLink from '../components/PostLink.js'
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
  >
    <Container>
      <h1>Blog Posts</h1>
      <ul>
        {getPosts().map((post) => (
          <PostLink key={post.id} post={post}/>
        ))}
      </ul>
    </Container>
  </Page>
)

export default Blog
