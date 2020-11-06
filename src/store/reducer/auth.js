import * as actionTypes from '../actions/actionTypes'
const initialState = {
    signedIn : false,
    signedUp : false
}

const reducer = (state = initialState , action) => {
    if(action.type === actionTypes.IS_SIGNED_IN){
        return {
            ...state,
            signedIn : action.data
        }
    }
    return state
}

export default reducer