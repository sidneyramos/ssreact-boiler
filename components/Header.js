import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {
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
import '../styles/Header.scss'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.navToggle = this.navToggle.bind(this);
    this.state = {
      isNavbarOpen: false
    };
  }

  navToggle() {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen
    });
  }

  render() {
    return (
      <header>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Sample{this.props.title === "Homepage" ? '' : ` - ${this.props.title}`}</title>
        </Head>
        <Container>
          <Navbar light expand="md">
            <NavbarBrand href="/">Sample</NavbarBrand>
            <NavbarToggler onClick={this.navToggle} />
            <Collapse isOpen={this.state.isNavbarOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem active={this.props.title === "About"}>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem active={this.props.title === "Contact Us"}>
                  <NavLink href="/contact-us">Contact Us</NavLink>
                </NavItem>
                <NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                      Option 1
                      </DropdownItem>
                      <DropdownItem>
                      Option 2
                      </DropdownItem>
                      <DropdownItem>
                      Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </header>
    )
  }
}

export default Header
