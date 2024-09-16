import { RETRIEVE_SEARCH, SET_SEARCH, SET_SELECTED } from "../actions";
const initialState = {
    searched: '',
    list_searched: null,
    selected: '',
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case RETRIEVE_SEARCH:
            return {
                ...state,
                list_searched: action.payload
            }
        case SET_SEARCH:
            return {
                ...state,
                searched: action.payload
            }
        case SET_SELECTED:
            return {
                ...state,
                selected: action.payload
            }
        default:
            return state
    }
}

export default searchReducer