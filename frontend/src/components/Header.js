import React from "react";
import { Navbar, Container } from "react-bootstrap";

const navbarStyle = {
	backgroundColor: "#2196f3", //#045c8a
};
const Header = ({ title }) => {
	return (
		<Navbar style={navbarStyle} variant="light">
			<Container>
				<Navbar.Brand href="/">{title}</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default Header;
