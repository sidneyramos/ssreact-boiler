import Link from 'next/link'
import { Component, Fragment } from 'react'
import gql from "graphql-tag";
import { graphql } from "react-apollo";
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

export const posts = gql`
  query getPosts {
    posts {
      title
      image
    }
  }
`

class PostCollection extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    console.log(this.props.data);
    const { props } = this;

    return (
      <div className="post-collection">
        <Row>
          {/*props.posts.map((post) => (
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
          ))*/}
          <Col md={4} sm={12}>
            <h2>Sample</h2>
          </Col>
        </Row>
      </div>
    );
  }
}

export default graphql(posts)(PostCollection)
