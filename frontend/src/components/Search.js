import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import debounce from "lodash.debounce";

const Search = ({ word, setWord, handleSubmit }) => {
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

	const fetchSuggestions = debounce((searchTerm) => {
		if (searchTerm.length > 2) {
			fetch(
				`https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=${UNSPLASH_KEY}`
			)
				.then((response) => response.json())
				.then((data) => {
					const titles = data.results.map(
						(image) => image.alt_description || image.title
					);
					setSuggestions(titles);
					setShowSuggestions(true);
				})
				.catch((error) => console.error("Error fetching suggestions:", error));
		} else {
			setSuggestions([]);
			setShowSuggestions(false);
		}
	}, 300);

	useEffect(() => {
		fetchSuggestions(word);
	}, [word]);

	const clearSearch = () => {
		setWord("");
		setSuggestions([]);
		setShowSuggestions(false);
	};

	const searchInputStyle = {
		marginRight: "0.5rem",
		outline: "none",
		boxShadow: "none",
	};

	const clearButtonStyle = {
		marginRight: "0.5rem",
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	return (
		<Container className="my-4">
			<Row className="justify-content-center">
				<Col xs={12} md={10} lg={8}>
					<Form onSubmit={handleSubmit} className="d-flex align-items-center">
						<Form.Control
							type="text"
							value={word}
							onChange={(e) => setWord(e.target.value)}
							placeholder="Search for images..."
							style={{
								...searchInputStyle,
								boxShadow: isFocused
									? "0 0 0 0.25rem rgba(0, 0, 0, 0.25)"
									: "none",
							}}
							onFocus={handleFocus}
							onBlur={handleBlur}
							className="search-input"
							autoComplete="off"
						/>
						<Button
							variant="outline-secondary"
							className="me-2"
							onClick={clearSearch}
						>
							Clear
						</Button>
						<Button variant="dark" type="submit">
							Search
						</Button>
					</Form>
					{showSuggestions && (
						<ListGroup>
							{suggestions.map((suggestion, index) => (
								<ListGroup.Item
									key={index}
									action
									onClick={() => setWord(suggestion)}
								>
									{suggestion}
								</ListGroup.Item>
							))}
						</ListGroup>
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default Search;
