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
      id
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
    const { props } = this;
    const { posts } = this.props.data;

    console.log(posts);

    return (
      <div className="post-collection">
        <Row>
          {
            posts.map((post) => (
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
            ))
          }
        </Row>
      </div>
    );
  }
}

export default graphql(posts)(PostCollection)
