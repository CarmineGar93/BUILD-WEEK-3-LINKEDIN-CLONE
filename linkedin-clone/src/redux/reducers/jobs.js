import { RETRIEVE_JOBS } from "../actions";

const initialState = {
    jobs_list: null
}


const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RETRIEVE_JOBS:
            return {
                ...state,
                jobs_list: action.payload
            }
        default:
            return state
    }
}

export default jobsReducer