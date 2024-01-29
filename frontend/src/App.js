import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import Welcome from "./components/Welcome";
const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
	const [word, setWord] = useState("");
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);

	const fetchImages = () => {
		setIsLoading(true);
		fetch(
			`https://api.unsplash.com/search/photos?page=${page}&query=${word}&client_id=${UNSPLASH_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				setImages(page === 1 ? data.results : [...images, ...data.results]);
				setIsLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setIsLoading(false);
			});
	};

	const handleSearchSubmit = (e) => {
		if (e) e.preventDefault();
		setPage(1); 
		setImages([]); 
		fetchImages();
	};

	const handleLoadMore = () => {
		setPage((prevPage) => prevPage + 1);
	};

	useEffect(() => {
		if (word) {
			fetchImages();
		}
	}, [page, word]);

	const handleDeleteImage = (id) => {
		setImages(images.filter((image) => image.id !== id));
	};

	return (
		<div>
			<Header title="Images Gallery" />
			<Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
			<Container className="mt-4">
				{isLoading ? (
					<Spinner animation="border" />
				) : images.length ? (
					<>
						<Row xs={1} md={2} lg={3}>
							{images.map((image, i) => (
								<Col key={i} className="pb-3">
									<ImageCard image={image} deleteImage={handleDeleteImage} />
								</Col>
							))}
						</Row>
						<div className="text-center my-3">
							<Button onClick={handleLoadMore}>Load More</Button>
						</div>
					</>
				) : (
					<Welcome />
				)}
			</Container>
		</div>
	);
};

export default App;
