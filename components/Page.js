import React from 'react';
import Link from 'next/link'
import Layout from '../components/Layout.js'
import PostLink from '../components/PostLink.js'
import classNames from 'classnames';
import posed from 'react-pose';
import {
  Jumbotron,
  Container,
  Button } from 'reactstrap';

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isVisible: true };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    return (
      <Layout title={this.props.title}>
        <div className={classNames({"col-lg-6": !this.props.headerFullWidth})}>
          <Jumbotron className={classNames("transparent", "clear-padding")}>
              <h1 className="display-4">{this.props.heroBannerTitle}</h1>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Jumbotron>
        </div>
        <Box className="box" pose={this.state.isVisible ? 'visible' : 'hidden'} />
        {this.props.children}
      </Layout>
    );
  }
}

export default Page
