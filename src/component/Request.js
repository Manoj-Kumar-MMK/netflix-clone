const API_KEY = "6312b3b8e3bb55ac7f77df30d6a13473";

const request = {
	"Netflix Originals": `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	"Top Rated": `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	Action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	Comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	Horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	Romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	Documentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default request;
