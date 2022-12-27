import { ADD_FAVORITE_ITEM,Load_More_Movies, GET_MOVIES, REMOVE_FAVORITE_ITEM } from "./Action";


initialState = {
    movies: [],
    favorites: [],
     PageNumber:0,
  };

  function moviesReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MOVIES:
        return {...state,movies: action.payload.results,PageNumber:action.payload.page
          };
      case Load_More_Movies:
        return {...state,movies: state.movies.concat(action.payload.results),PageNumber:action.payload.page
          };
      case ADD_FAVORITE_ITEM:
        return {...state, favorites: [...state.favorites, action.payload]};
      case REMOVE_FAVORITE_ITEM:
        return {
          ...state,
          favorites: state.favorites.filter(
            movie => movie.id !== action.payload.id,
          ),
        };
      default:
        return state;
    }
  }
  export default moviesReducer;