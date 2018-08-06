import Link from 'next/link'
import Layout from '../components/Layout.js'
import PostLink from '../components/PostLink.js'

function getPosts () {
  return [
    { id: 'blogpost-1', title: 'Sample Post 1', description: 'This is the first blog post of this blog.'},
    { id: 'blogpost-2', title: 'Sample Post 2', description: 'This is the second blog post of this blog.'},
    { id: 'blogpost-3', title: 'Sample Post 3', description: 'This is the third blog post of this blog.'},
  ]
}

export default () => (
  <Layout title={"Homepage"}>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post}/>
      ))}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)
