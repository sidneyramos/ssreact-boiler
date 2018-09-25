import Link from 'next/link'
import Page from '../components/Page.js'
import PostLink from '../components/PostLink.js'
import {
  Jumbotron,
  Container,
  Button } from 'reactstrap';

// function getPosts () {
//   return [
//     { id: 'blogpost-1', title: 'Sample Post 1', description: 'This is the first blog post of this blog.'},
//     { id: 'blogpost-2', title: 'Sample Post 2', description: 'This is the second blog post of this blog.'},
//     { id: 'blogpost-3', title: 'Sample Post 3', description: 'This is the third blog post of this blog.'},
//   ]
// }

export default () => (
  <Page
    title={"Homepage"}
    heroBannerTitle="Hello, world! This is a homepage."
    //headerVideoUrl={"https://storage.googleapis.com/coverr-main/mp4/Travaho.mp4"}
    headerImageUrl={"/static/images/banner-image.jpeg"}
    >
    {/*<h1>My Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post}/>
      ))}
    </ul>*/}

  </Page>
)
