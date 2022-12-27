import axios from "axios";

export const GET_MOVIES = 'GET_MOVIES';
export const Load_More_Movies = 'Load_More_Movies';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';


const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = '515b42374e9b4ebad08ce1866a94d4ff';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;


export const getMovies = () => {
    try {
      return async dispatch => {
        const res = await axios.get(`${BASE_URL}`);
        if (res.data) {
          dispatch({
            type: GET_MOVIES,
            payload: res.data,
          });
        } else {
          console.log('Unable to fetch');
        }
      };
    } catch (error) {
      // Add custom logic to handle errors
    }
  };
export const LoadMoreMovies = (PageNumber) => {
    try {
      return async dispatch => {
        const res = await axios.get(`${API_URL}?api_key=${API_KEY}&page=${PageNumber}`);
        if (res.data) {
          dispatch({
            type: Load_More_Movies,
            payload: res.data,
          });
        } else {
          console.log('Unable to fetch');
        }
      };
    } catch (error) {
      // Add custom logic to handle errors
    }
  };

  export const addFavorite = movie => dispatch => {
    dispatch({
      type: ADD_FAVORITE_ITEM,
      payload: movie,
    });
  };
  export const removeFavorite = movie => dispatch => {
    dispatch({
      type: REMOVE_FAVORITE_ITEM,
      payload: movie,
    });
  };


 