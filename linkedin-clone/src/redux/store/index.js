import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from '../reducers/user'
import experiencesReducer from '../reducers/experiences'
import postsReducer from '../reducers/posts'
import jobsReducer from '../reducers/jobs'
import searchReducer from '../reducers/search'

const mainReducer = combineReducers({
    user: userReducer,
    experiences: experiencesReducer,
    posts: postsReducer,
    jobs: jobsReducer,
    search: searchReducer
})

const store = configureStore({
    reducer: mainReducer
})

export default store