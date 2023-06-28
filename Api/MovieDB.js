import axios from "axios";

const apiKey = "bafae81704b31fb7f244577e1321f20f";

//Endpoints
const apiBaseURL = "https://api.themoviedb.org/3";
const TrendingMoviesEndpoint = `${apiBaseURL}/trending/movie/day?api_key=${apiKey}`;
const UpcomingMoviesEndpoint = `${apiBaseURL}/trending/movie/upcoming?api_key=${apiKey}`;
const TopRatedMoviesEndpoint = `${apiBaseURL}/trending/movie/top_rated?api_key=${apiKey}`;

//PosterPath
export const image500 = posterPath=> posterPath? 'https://image.tmdb.org/t/p/w500'+posterPath : null;
export const image342 = posterPath=> posterPath? 'https://image.tmdb.org/t/p/w342'+posterPath : null;
export const image185 = posterPath=> posterPath? 'https://image.tmdb.org/t/p/w185'+posterPath : null;
//apiCall

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    return response.data;
  } 
  catch(error){
    console.error(error)
  }
    
  }


export const fetchTrendingData = () => {
  return apiCall(TrendingMoviesEndpoint);
};

export const fetchUpcomingData = () => {
  return apiCall(UpcomingMoviesEndpoint);
};

export const fetchTopRatedData = () => {
  return apiCall(TopRatedMoviesEndpoint);
};
