// import {withRouter} from 'next/router'
// import Layout from '../components/Layout.js'
//
// const Post = withRouter((props) => (
//     <Layout title={props.router.query.title}>
//        <h1>{props.router.query.title}</h1>
//        <p>This is the blog post content.</p>
//     </Layout>
// ))
//
// export default Post

import PostLayout from '../components/Post.js'
import fetch from 'isomorphic-unfetch'

const Post =  ({post}) => (
    <PostLayout
      title={post.title}
      heroBannerTitle={post.title}
      heroBannerDescription={post.description}
      >
    </PostLayout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://micro-api-ehkmjftwsj.now.sh/`)
  const { data } = await res.json()

  const post = data.reduce((total, item) => {
    let res = total;
    if ( item.id === id ) {
      res = item;
    }
    return res;
  }, null);

  console.log(post);

  return { post }
}

export default Post
