import React, {useState, useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

const Search = () => {
    const [value, setValue] = useState('')
    const {show} = useContext(AlertContext)
    const github = useContext(GithubContext)
    const onSubmit = (e) => {
        if(e.key !== 'Enter') {
            return
        }

        if(value.trim()) {
            github.search(value.trim())
        } else {
            show('Введите имя пользователя')
        }
    }
    return (
        <div className="input-group input-group-lg">
            <span className="input-group-text">Введите имя</span>
            <input type="text" onKeyPress={onSubmit} onChange={(e) => setValue(e.target.value)} className="form-control" />
        </div>
    )
}

export default Search