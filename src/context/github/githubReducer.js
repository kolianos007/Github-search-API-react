import { CLEAN_USER, GET_REPO, GET_USER, SEARCH_USERS, SET_LOADING } from '../types'

export const GithubReducer = (state, {type, payload}) => {
    switch(type) {
        case GET_USER:
            return {
                ...state,
                user: payload,
                loading: false
            }
        case GET_REPO:
            return {
                ...state,
                repo: payload,
                loading: false
            }
        case CLEAN_USER:
            return {
                ...state,
                user: []
            }
        case SEARCH_USERS:
            return {
                ...state,
                users: payload,
                loading: false
            }
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}