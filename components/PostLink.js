import Link from 'next/link'

const PostLink = ({post}) => (
  <li>
    <Link href={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>
  </li>
)

export default PostLink
