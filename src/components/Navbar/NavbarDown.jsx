import React from "react"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import "./Navbar.css"
const NavbarDown = () => {
    return (
        <div>
            <Navbar bg="black" expand="lg" variant="dark" className="main_navbar">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                                <NavDropdown title="Sale" id="navbarScrollingDropdown" className="active_class" renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="New in" id="navbarScrollingDropdown"  renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Clothing" id="navbarScrollingDropdown"  renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Dresses" id="navbarScrollingDropdown"  renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Shoes" id="navbarScrollingDropdown"  renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Sportwear" id="navbarScrollingDropdown"  renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Accessories" id="navbarScrollingDropdown"  renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Sammer" id="navbarScrollingDropdown"  renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Trending now" id="navbarScrollingDropdown"  renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Topshop" id="navbarScrollingDropdown"  renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Face+Body" id="navbarScrollingDropdown"  renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Brands" id="navbarScrollingDropdown"  renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Outlet" id="navbarScrollingDropdown" className="active_class"  renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Marketplace" id="navbarScrollingDropdown"  renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                </NavDropdown>
                       </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div >
    )
}

export default NavbarDown;