import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
const movieTrailer = require("movie-trailer");
const Row = ({ title, url }) => {
	const [movies, setMovies] = useState();
	const [trailer, setTrailer] = useState();
	useEffect(() => {
		async function fetch() {
			const req = await axios.get(url);
			setMovies(req.data.results);
		}
		fetch();
	}, [url]);
	const handleTrailer = (movie) => {
		if (trailer) setTrailer("");
		else {
			movieTrailer(movie.original_title || "")
				.then((url) => {
					setTrailer(new URLSearchParams(new URL(url).search).get("v"));
				})
				.catch((err) => console.log(err));
		}
	};
	const base = "https://image.tmdb.org/t/p/original/";
	const opt = {
		width: "100%",
		height: "400px",
		playerVars: { autoplay: 1 },
	};
	return (
		<>
			<div className="moviebox">
				<h1>{title}</h1>
				<div className="movielist">
					{movies !== undefined &&
						movies.map((movie) => (
							<img
								className="movie"
								src={`${base}${movie.poster_path}`}
								alt={movie.original_name}
								onClick={() => handleTrailer(movie)}
								key={movie.id}
							/>
						))}
				</div>
			</div>
			{trailer && <YouTube videoId={trailer} opts={opt} />}
		</>
	);
};

export default Row;
