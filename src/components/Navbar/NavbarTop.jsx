import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux"
import "./Navbar.css";
import Searchbar from "./Searchbar";
import { logoutReq } from "../../store/auth/auth.actions";
const NavbarTop = () => {
  const dispatch=useDispatch();
  const {isAuth,profile} =useSelector((state)=>state.auth);
  console.log(isAuth,profile)
  const handledLogout=()=>{
    console.log("logout")
    dispatch(logoutReq())
  }
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
            <Nav.Link as={Link} to="/men">
              MEN
            </Nav.Link>
            <Nav.Link as={Link} to="/women">
              WOMEN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Searchbar />
        <NavDropdown
          title={<FaRegUser />}
          id="navbarScrollingDropdown"
          renderMenuOnMount={true}
         >
          {isAuth ? (
            <div>
            <NavDropdown.Item href="#action4">{profile}</NavDropdown.Item>
            <NavDropdown.Item onClick={handledLogout}>Logout</NavDropdown.Item>
            </div>
          ) : (
            <NavDropdown.Item as={Link} to="/login">
              Login/Signup
            </NavDropdown.Item>
          )}
        </NavDropdown>
        <Nav.Link as={Link} to="/favourite">
          <FaHeart />
        </Nav.Link>
        <Nav.Link as={Link} to="/cart">
          <FaShoppingBag />
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
