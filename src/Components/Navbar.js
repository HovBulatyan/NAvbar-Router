import React, { Component } from 'react'
import { Navbar, Form, Container, Nav } from "react-bootstrap";
import logo from "./Dz.jpg";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class Navigationbar extends Component {
    render() {
        return (
            <div>
                <Navbar
          fixed="top"
          collapseOnSelect
          expand="md"
          bg="light"
          variant="light"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="60"
                width="60"
                className="d-inline-block slign-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" />>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About us</Nav.Link>
              <Nav.Link href="/contacts">Contacts</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Container>
        </Navbar>

            </div>
        )
    }
}
