import React from "react"
import { Navbar, Nav,Container, Form, Button, FormControl } from "react-bootstrap"
import { FaRegUser,FaHeart,FaShoppingBag } from "react-icons/fa";
import "./Navbar.css"
import Searchbar from "./Searchbar";
const NavbarTop = () => {
    return (
        <Navbar expand="lg" bg="black" variant="dark" color="white" p="20px">
            <Container fluid>
                <Navbar.Brand href="#" className="brand_name">asos</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">MEN</Nav.Link>
                        <Nav.Link href="#action2">WOMEN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                  <Searchbar/>
                <Nav.Link href="/login"><FaRegUser/></Nav.Link>
                <Nav.Link href="#action2"><FaHeart /></Nav.Link>
                <Nav.Link href="#action2"><FaShoppingBag /></Nav.Link>
            </Container>
        </Navbar>
    )
}

export default NavbarTop;