import { RETRIEVE_COMMENTS, RETRIEVE_POST } from "../actions";
const initialState = {
    list_post: [],
    comments: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RETRIEVE_POST:
            return {
                ...state,
                list_post: action.payload
            }
        case RETRIEVE_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        default:
            return state
    }
}

export default postsReducer