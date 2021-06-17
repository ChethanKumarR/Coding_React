import { combineReducers } from "redux";
import movies from "./movie_reducer";


const rootReducers = combineReducers({
    movies
});


export default rootReducers;