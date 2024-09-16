export const RETRIEVE_USER = 'RETRIEVE_USER'
export const RETRIEVE_EXPERIENCES = 'RETRIEVE_EXPERIENCES'
export const RETRIEVE_POST = 'RETRIEVE_POST'
export const RETRIEVE_JOBS = 'RETRIEVE_JOBS'
export const SET_SEARCH = 'SET_SEARCH'
export const RETRIEVE_SEARCH = 'RETRIEVE SEARCH'
export const SET_SELECTED = 'SET_SELECTED'
export const RETRIEVE_COMMENTS = 'RETRIEVE_COMMENTS'
export const SET_TOKEN = 'SET_TOKEN'


export const RetrieveUserAction = (token) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.ok) {
                const user = await response.json()
                console.log(user)
                dispatch({
                    type: RETRIEVE_USER,
                    payload: user
                })
            } else {
                throw new Error('ooops')
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export const RetrieveExperiencesAction = (token) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/66deae8e4d0def0015cef0fc/experiences', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.ok) {
                const experiences = await response.json()
                console.log(experiences)
                dispatch({
                    type: RETRIEVE_EXPERIENCES,
                    payload: experiences
                })
            } else {
                throw new Error('ooops')
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export const RetrievePostAction = (token) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/posts/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.ok) {
                const posts = await response.json()
                console.log(posts)
                dispatch({
                    type: RETRIEVE_POST,
                    payload: posts
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export const RetrieveJobsAction = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://strive-benchmark.herokuapp.com/api/jobs')
            if (response.ok) {
                const jobs = await response.json()
                console.log(jobs)
                dispatch({
                    type: RETRIEVE_JOBS,
                    payload: jobs.data
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export const SetSearchAction = (search) => {
    return {
        type: SET_SEARCH,
        payload: search,
    }
}

export const RetrieveSearchAction = (query) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://strive-benchmark.herokuapp.com/api/jobs?search=' + query)
            if (response.ok) {
                const jobs = await response.json()
                console.log(jobs)
                dispatch({
                    type: RETRIEVE_SEARCH,
                    payload: jobs.data
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export const SetSelectedAction = (id) => {
    return {
        type: SET_SELECTED,
        payload: id
    }
}

export const RetrieveCommentsAction = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUzZWVmZDgwMDY3ZDAwMTUxMjQzYWUiLCJpYXQiOjE3MjYyMTM4ODUsImV4cCI6MTcyNzQyMzQ4NX0.-6HygptQjzgl39s0PLA-uqo1jkPfjHs6Dtw8XH6oPfI"
                }
            })
            if (response.ok) {
                const comments = await response.json()
                console.log(comments)
                dispatch({
                    type: RETRIEVE_COMMENTS,
                    payload: comments
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export const SetTokenAction = (token) => {
    return {
        type: SET_TOKEN,
        payload: token
    }
}