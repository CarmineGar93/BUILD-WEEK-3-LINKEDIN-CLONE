import { RETRIEVE_EXPERIENCES } from "../actions";
const initialState = {
    exp_list: []
}

const experiencesReducer = (state = initialState, action) => {
    switch(action.type) {
        case RETRIEVE_EXPERIENCES:
            return {
                ...state,
                exp_list: action.payload
            }
        default:
            return state
    }
}

export default experiencesReducer