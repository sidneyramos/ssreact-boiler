import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Container,
  DropdownItem } from 'reactstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'animate-sass/_animate.scss'
import '../styles/Main.scss'
import '../styles/Footer.scss'

class Footer extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <footer class="bg-light">
        <Container>
          <Row className="mb-5">
            <div class="col-md-4 pr-md-5">
              <div class="block-footer-widget">
                <h3>About</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>

            <Col md="8">
              <Row>
                <Col md="3">
                  <div class="block-footer-widget">
                    <h3>Learn More</h3>
                    <ul class="list-unstyled">
                      <li><a href="#">How it works?</a></li>
                      <li><a href="#">Useful Tools</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="#">Sitemap</a></li>
                    </ul>
                  </div>
                </Col>

                <Col md="3">
                  <div class="block-footer-widget">
                    <h3>Support</h3>
                    <ul class="list-unstyled">
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Help Desk</a></li>
                      <li><a href="#">Knowledgebase</a></li>
                    </ul>
                  </div>
                </Col>

                <Col md="3">
                  <div class="block-footer-widget">
                    <h3>About Us</h3>
                    <ul class="list-unstyled">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Terms of Service</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                    </ul>
                  </div>
                </Col>

              </Row>
            </Col>

          </Row>

          <Row class="pt-5 text-left">
            <Col md="12" class="text-left">
              <p>
                Copyright &copy; {new Date().getFullYear()} All rights reserved - Sidney Ramos
              </p>
            </Col>
          </Row>
      </Container>
    </footer>
    )
  }
}

export default Footer
