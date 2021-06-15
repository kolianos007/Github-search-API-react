import React, { useContext, useEffect } from 'react'
import Repo from '../components/Repos'
import { GithubContext } from '../context/github/githubContext'

const Profile = ({match}) => {
    console.log(match)
    const {getUser, getRepo, user, repo, loading} = useContext(GithubContext)
    const urlName = match.params.name

    useEffect(() => {
        getUser(urlName)
        getRepo(urlName)
    }, [])

    if(loading) {
        return <p className="text-center">Загрузка...</p>
    }

    const {
        name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists
    } = user

    return (
        <>
            <div className="card text-center">
                {console.log(user, repo)}

                <div className="card-header">
                    {name}
                </div>
                <div className="card-body">
                    <img src={avatar_url} style={{maxWidth: '200px', height: '200px'}}className="card-img" alt="" />
                    {location && <p>Местоположение: {location}</p>}
                    {bio && <>
                        <h3>BIO</h3>
                        <p>{bio}</p>
                    </>}
                    <ul style={{listStyleType: 'none'}}>
                        {login && <li>
                            <strong>Username: </strong> {login}   
                        </li>}
                        {company && <li>
                            <strong>Компания: </strong> {company}   
                        </li>}
                        {blog && <li>
                            <strong>Website: </strong> {blog}   
                        </li>}
                    </ul>
                    <a href={html_url} className="btn btn-primary">Открыть</a>
                </div>
                <div className="card-footer text-muted">
                    <div className="badge bg-primary">Подписчики: {followers}</div>
                    <div className="badge bg-success">Подписан: {following}</div>
                    <div className="badge bg-info">Репозитории: {public_repos}</div>
                    <div className="badge bg-dark">Гисты: {public_gists}</div>
                </div>
            </div>
            <Repo repo={repo} />
        </>
    )
}

export default Profile