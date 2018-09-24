import Link from 'next/link'
import Layout from '../components/Layout.js'
import PostLink from '../components/PostLink.js'

import "../styles/main_styles.css"
import "../styles/responsive.css"


// function getPosts () {
//   return [
//     { id: 'blogpost-1', title: 'Sample Post 1', description: 'This is the first blog post of this blog.'},
//     { id: 'blogpost-2', title: 'Sample Post 2', description: 'This is the second blog post of this blog.'},
//     { id: 'blogpost-3', title: 'Sample Post 3', description: 'This is the third blog post of this blog.'},
//   ]
// }

export default () => (
  <Layout title={"Homepage"}>
    {/*<h1>My Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post}/>
      ))}
    </ul>*/}
    <h3>This is a homepage</h3>
  </Layout>
)
