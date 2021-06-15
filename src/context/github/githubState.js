import React, { useReducer } from 'react'
import axios from 'axios'
import { CLEAN_USER, GET_REPO, GET_USER, SEARCH_USERS, SET_LOADING } from '../types'
import { GithubContext } from './githubContext'
import { GithubReducer } from './githubReducer'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIEN_SECRET = process.env.REACT_APP_CLIENT_SECRET

const withCreds = url => {
    return `${url}client_id=${CLIENT_ID}&clien_secret=${CLIEN_SECRET}`
}

export const GithubState = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        repo: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    const getUser = async name => {
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}?`)
        )
        console.log(response.data)
        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }

    const search = async (value) => {
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/search/users?q=${value}&`)
        )

        console.log(response.data)

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }

    const getRepo = async (name) => {
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`)
        )
        dispatch({
            type: GET_REPO,
            payload: response.data
        })
    }

    const cleanUser = () => {
        dispatch({
            type: CLEAN_USER
        })
    }

    const setLoading = () => {
        dispatch({type: SET_LOADING})
    }
    
    const {users, user, repo, loading} = state

    return (
        <GithubContext.Provider value={{
            getUser, getRepo, search, cleanUser, setLoading, users, user, repo, loading
        }}>
            {children}
        </GithubContext.Provider>
    )
}