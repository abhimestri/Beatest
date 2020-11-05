import * as actionTypes from './action'
const initialState = {
    movieList : []
}

const reducer = (state = initialState , action) => {
    if(action.type === actionTypes.ADD_TO_FAVORITES){
        return {
            ...state,
            movieList : state.movieList.concat(action.favorites)
        }
    }
    return state
}

export default reducer