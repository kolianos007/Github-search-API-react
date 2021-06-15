import React from 'react'

const Repo = ({repo}) => {
    console.log(repo.name)
    return (
        <>
            {repo.map(el => (
                <div className="card mb-3" key={el.id}>
                    <div className="card-body">
                        <h5>
                            <a href={el.html_url} target="_blank" rel="noreferrer">{el.name}</a>
                        </h5>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Repo