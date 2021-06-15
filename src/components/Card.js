import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({user}) => {
    return (
        <div className="card mb-4">
            <img src={user.avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{user.login}</h5>
                <Link to={`/profile/`+user.login} className="btn btn-primary">Открить</Link>
            </div>
        </div>
    )
}

export default Card