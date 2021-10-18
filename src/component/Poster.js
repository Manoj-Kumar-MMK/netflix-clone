import React, { useEffect, useState } from "react";
import axios from "./axios";
import request from "./Request";
const Poster = () => {
	const base = "https://image.tmdb.org/t/p/original/";
	const [movie, setMovie] = useState();
	const url = request["Netflix Originals"];
	useEffect(() => {
		async function get() {
			const req = await axios.get(url);
			setMovie(
				req.data.results[
					Math.floor(Math.random() * (req.data.results.length - 1))
				]
			);
		}
		get();
	}, [url]);
	return (
		<div
			className="poster"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(${base}${movie?.backdrop_path})`,
				backgroundPosition: "center center",
			}}
		>
			<div className="poster__content justify-content-center">
				<h3 className="poster__title">{movie?.original_name || movie?.name}</h3>
				<div className="button group p-2 m-3">
					<button className="btn btn-secondary p-2 mr-4">Play</button>
					<button className="btn btn-secondary p-2 ">Mylist</button>
				</div>
				<div className="poster__description justify-content-center">
					{movie?.overview}
				</div>
			</div>
		</div>
	);
};

export default Poster;
