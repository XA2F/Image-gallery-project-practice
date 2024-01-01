import React from "react";
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const ImageCard = ({ image, deleteImage }) => {
	const imageTitle = image.title || image.alt_description || "No Title";

	return (
		<Card className="shadow-sm mb-4 bg-white rounded">
			<Card.Img
				variant="top"
				src={image.urls.small}
				style={{ height: "200px", objectFit: "cover" }}
			/>
			<Card.Body>
				<Card.Title className="text-truncate" style={{ fontSize: "1rem" }}>
					{imageTitle}
				</Card.Title>
				<Card.Text
					className="text-muted text-truncate"
					style={{ fontSize: "0.85rem" }}
				>
					{image.description || "No Description"}
				</Card.Text>
				<div className="d-flex justify-content-between">
					<OverlayTrigger overlay={<Tooltip>View Full Image</Tooltip>}>
						<Button
							variant="outline-secondary"
							size="sm"
							href={image.urls.regular}
							target="_blank"
							rel="noopener noreferrer"
						>
							View
						</Button>
					</OverlayTrigger>
					<Button
						variant="outline-danger"
						size="sm"
						onClick={() => deleteImage(image.id)}
					>
						Delete
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default ImageCard;
