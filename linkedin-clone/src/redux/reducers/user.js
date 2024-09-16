import { RETRIEVE_USER } from "../actions";
const initialState = {
    user_logged: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case RETRIEVE_USER:
            return {
                ...state,
                user_logged: action.payload
            }
        default:
            return state
    }
}

export default userReducer