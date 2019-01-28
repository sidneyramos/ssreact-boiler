import PostLayout from '../components/Post.js'
import withData from '../lib/withData'


const Post =  withData(props => (
    <PostLayout
      id={props.url.query.id}
      >
    </PostLayout>
))

export default Post
