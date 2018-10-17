import Link from 'next/link'
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col
} from 'reactstrap';
import Header from './Header'

const PostCollection = (props) => (
  <div className="post-collection">
    <Row>
    {props.posts.map((post) => (
      <Col md={4} sm={12}>
        <Link href={`/p/${post.id}`}>
          <a>
            <Card style={{backgroundImage: `url('${post.image}')`}}>
              <CardBody>
                <CardTitle>{post.title}</CardTitle>
              </CardBody>
            </Card>
          </a>
        </Link>
      </Col>
    ))}
    </Row>
  </div>
)

export default PostCollection
