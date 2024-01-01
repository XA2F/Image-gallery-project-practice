import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "../Images/logo.svg";

const Header = ({ title }) => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
			<Container>
				<Navbar.Brand href="#home">
					<Logo alt={title} style={{ maxWidth: "12rem", maxHeight: "2rem" }} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#gallery">Gallery</Nav.Link>
						<NavDropdown title="Categories" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Nature</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Cities</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">People</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#about">About</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#login">Login</Nav.Link>
						<Nav.Link href="#signup">Sign Up</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
