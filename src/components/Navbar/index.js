// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png"
import "./style.css";

function OffCanvas() {

    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid id="canvasNav">
                        <Navbar.Brand href="#">
                            <img src={logo} id="logo" alt="" />
                            {/* Logo */}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <NavLink to="/"
                                        href="/"
                                    >
                                        Logo
                                    </NavLink>{" "}
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavLink to="/home"
                                        href="/home"
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/yourWork"
                                        href="/yourWork"
                                    >
                                        Your Work
                                    </NavLink>
                                    <NavLink
                                        to="/misc"
                                        href="/misc"
                                    >
                                        Miscellaneous
                                    </NavLink>



                                    {/* <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item
                                            href="#action3">
                                            Action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="#action4">
                                            Another Action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown> */}

                                </Nav>

                                {/* <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search" className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search
                                    </Button>
                                </Form> */}

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffCanvas;
