import React from 'react';
import Link from 'next/link'
import classNames from 'classnames';
import {
  Player,
  BigPlayButton
} from 'video-react';
import {
  Jumbotron,
  Container,
  Button,
  Row,
  Col
} from 'reactstrap';
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";
import Layout from '../components/Layout.js'
import HeroBanner from '../components/HeroBanner.js'

const getPost = gql`
  query getPost($id: ID) {
    post(where: {
      id: $id
    }) {
      title
      description
    }
  }
`;

const Post = ({ id, children, ...props }) => (
  <Query query={getPost} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      console.log(data);
      return (
        <Layout title={data.post.title}>
          <HeroBanner
              heroBannerParallax = {props.heroBannerParallax}
              headerFullWidth = {props.headerFullWidth}
              heroBannerTitle = {data.post.title}
              heroBannerDescription = {data.post.description}
              heroBannerSmallDescription = {props.heroBannerSmallDescription}
              heroBannerButton = {props.heroBannerButton}
              headerVideoUrl = {props.headerVideoUrl}
              headerImageUrl = {props.headerImageUrl}
              playerLoad = {false}
          />
          {children}
        </Layout>
      );
    }}
  </Query>
);

export default Post
