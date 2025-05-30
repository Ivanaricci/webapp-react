import React from 'react'

const MoviePage = () => {
    return (
        <div className='row'>
            <div className="col-12 col-md-6 col-lg-4">
                <img src="https://picsum.photos/500/300" alt="Movie" className='img-fluid' />
            </div>
            <div className="col-12 col-md-6 col-lg-8">
                <h1>Titolo</h1>
                <p>Altre info</p>
            </div>
        </div>
    )
}

export default MoviePage