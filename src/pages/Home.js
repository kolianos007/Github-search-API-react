import React, { useContext } from 'react'
import Alert from '../components/Alert'
import Card from '../components/Card'
import Search from '../components/Search'
import { GithubContext } from '../context/github/githubContext'

const Home = () => {
    const {loading, users} = useContext(GithubContext)
    console.log(users)
    return (
        <div>
            <Alert />
            <Search />
            <div className="cards mt-4">
                <div className="row">
                    {loading 
                        ? <p className="center">Загрузка...</p>
                        : users.map(user => (
                            <div className="col-3" key={user.id}>
                                <Card user={user} />
                            </div> 
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home