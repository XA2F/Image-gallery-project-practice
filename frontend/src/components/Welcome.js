import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const backgroundColor = {
	backgroundColor: "#eeeeee", //#045c8a
};
const Welcome = () => {
	return (
		<Container style={backgroundColor} className="py-5">
			<Row>
				<Col md={12}>
					<h1>Images Gallery!</h1>
					<p>
						This is a simple application that retrieves photos using Unsplash
						API. In order to start, enter any search term in the input field.
					</p>
					<p>
						<Button
							variant="primary"
							href="https://unsplash.com"
							target="_blank"
						>
							Learn More
						</Button>
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Welcome;
