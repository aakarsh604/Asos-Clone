import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import "./Navbar.css";
import Searchbar from "./Searchbar";
const NavbarTop = () => {
  return (
    <Navbar expand="lg" bg="black" variant="dark" color="white">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="brand_name">
          asos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/men">MEN</Nav.Link>
            <Nav.Link as={Link} to="/women">WOMEN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Searchbar />
        <Nav.Link as={Link} to="/login">
          <FaRegUser />
        </Nav.Link>
        <Nav.Link href="#action2">
          <FaHeart />
        </Nav.Link>
        <Nav.Link href="/cart">
          <FaShoppingBag />
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
