import React from "react"
import { Navbar, Nav, NavDropdown, Container,Row,Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Navbar.css"
const NavbarDown = () => {
    return (
        <div>
            <Navbar bg="black" expand="lg" variant="dark" className="main_navbar">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            <NavDropdown title="Sale" id="navbarScrollingDropdown" className="active_class" renderMenuOnMount={true}>
                                <NavDropdown.Item as={Link} to="/products/shoes">Shoes</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Flip flops</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="New in" id="navbarScrollingDropdown" renderMenuOnMount={true}>
                                <NavDropdown.Item href="#action3">Watches</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products/shoes">Shoes</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">accesories</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Clothing" id="navbarScrollingDropdown"  renderMenuOnMount={true}>
                                <Container fluid className="expnadeclass">
                                    <Row>
                                        <Col>
                                        <NavDropdown.Item as={Link} to="/products/mensclothing">Men Clothes</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/products/womensclothing">Women Clothes </NavDropdown.Item>
                                        </Col>
                                        <Col>
                                        <NavDropdown.Item href="#action3">T Shirts</NavDropdown.Item>
                                        <NavDropdown.Item href="#action3">Swim Wears</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Shorts</NavDropdown.Item>
                                        </Col>
                                        <Col>
                                        <NavDropdown.Item href="#action3">Hoddies</NavDropdown.Item>
                                        <NavDropdown.Item href="#action3">Designers</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Jackets</NavDropdown.Item>
                                        </Col>
                                        <Col><NavDropdown.Item href="#action3">Joggers</NavDropdown.Item>
                                        <NavDropdown.Item href="#action3">Jeans</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Body fit</NavDropdown.Item>
                                        </Col>
                                    </Row>
                                </Container>
                                
                            
                            </NavDropdown>
                            <NavDropdown title="Dresses" id="navbarScrollingDropdown" renderMenuOnMount={true}>
                                <NavDropdown.Item href="#action3">Shorts</NavDropdown.Item> 
                                <NavDropdown.Item href="#action4">Trainers</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Shoes" id="navbarScrollingDropdown" renderMenuOnMount={true}>
                                <NavDropdown.Item as={Link} to="/products/shoes">Shoes</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Flip flops</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Sportwear" id="navbarScrollingDropdown" renderMenuOnMount={true}>
                                <NavDropdown.Item href="#action3">Joggers</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Tights</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Accessories" id="navbarScrollingDropdown" renderMenuOnMount={true}>
                                <NavDropdown.Item href="#action3">Jewellary</NavDropdown.Item>
                                <NavDropdown.Item href="#action">Watches</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Sammer" id="navbarScrollingDropdown" renderMenuOnMount={true}>
                                <NavDropdown.Item href="#action3">Vest</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Half pants</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Trending now" id="navbarScrollingDropdown" renderMenuOnMount={true}>
                                <NavDropdown.Item href="#action3">Hoodies</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Chilly evenings</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Topshop" id="navbarScrollingDropdown" renderMenuOnMount={true}>
                                <NavDropdown.Item href="#action3">Caps</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Hats</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Face+Body" id="navbarScrollingDropdown" renderMenuOnMount={true}>
                                <NavDropdown.Item href="#action3">SunsCream</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Lotions</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Brands" id="navbarScrollingDropdown" renderMenuOnMount={true}>
                                <NavDropdown.Item href="#action3">Louis Vitton</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Zara</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Outlet" id="navbarScrollingDropdown" className="active_class" renderMenuOnMount={true}>
                                <NavDropdown.Item href="#action3">Gifts</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Jackets</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Marketplace" id="navbarScrollingDropdown" renderMenuOnMount={true}>
                                <NavDropdown.Item href="#action3">Addidas</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Puma</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default NavbarDown;