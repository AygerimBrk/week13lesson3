import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="warning">
        <Container>
          <Link to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
          <Link to="/counter">
            <Navbar.Brand>Counter</Navbar.Brand>
          </Link>
          <Link to="/add">
            <Navbar.Brand>Add</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
