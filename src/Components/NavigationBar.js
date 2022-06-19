import React from 'react'
import { Container, Nav, Navbar, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

function NavigationBar(props) {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Estore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/product">Laptop</Nav.Link>
                        <Nav.Link as={Link} to="/product">Smartphone</Nav.Link>
                        <Nav.Link as={Link} to="/product">Personal Computer</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/chart">Cart <Badge pill bg="danger">{props.cartReducer.length}</Badge></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const mapStateToProps = state => ({
    cartReducer: state.cartReducer
});

export default connect(mapStateToProps)(NavigationBar);
