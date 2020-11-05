const initialState = {
    name : "Abhishek"
}

const reducer = (state = initialState , action) => {
    if(action.type === "ABHI"){
        return {
            ...state,
            name : action.name
        }
    }
    return state
}

export default reducer