import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";

const Welcome = () => {
	return (
		<Container className="py-5">
			<Row className="justify-content-center">
				<Col md={8} lg={6}>
					<Card className="shadow-sm bg-white rounded">
						<Card.Body>
							<Card.Title className="text-center mb-4">
								Welcome to the Images Gallery!
							</Card.Title>
							<Card.Text>
								Discover stunning images from around the world, powered by the
								Unsplash API. Simply enter a search term to explore a vast
								collection of photographs. Perfect for photographers, artists,
								and anyone seeking inspiration.
							</Card.Text>
							<div className="text-center">
								<Button
									variant="primary"
									href="https://unsplash.com"
									target="_blank"
									className="mt-3"
								>
									Learn More About Unsplash
								</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Welcome;
