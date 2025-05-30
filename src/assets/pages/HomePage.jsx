import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


const initialMovies = [
    {
        id: 1,
        title: "Titolo1",
        director: "Direttore1",
        genre: "Action",
        release_year: "2003",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 2,
        title: "Titolo2",
        director: "Direttore2",
        genre: "Action",
        release_year: "2003",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 3,
        title: "Titolo3",
        director: "Direttore3",
        genre: "Action",
        release_year: "2003",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 4,
        title: "Titolo4",
        director: "Direttore4",
        genre: "Action",
        release_year: "2003",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 5,
        title: "Titolo5",
        director: "Direttore5",
        genre: "Action",
        release_year: "2003",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 6,
        title: "Titolo6",
        director: "Direttore6",
        genre: "Action",
        release_year: "2003",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300"
    },
]

const HomePage = () => {

    // Definisco la variabile di stato
    const [movies, setMovies] = useState(initialMovies);

    return (
        <>
            <h1 className='text-primary'>Movie</h1>
            <h2>
                <i>List</i>
            </h2>
            <div className="row gy-4">
                {movies.map((movie) => {
                    return (
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <div className="card-image-top">
                                    <img src={movie.image} alt="Movie" className='img-fluid' />
                                </div>
                                <div className="card-body">
                                    <h3 className='text-primary'>{movie.title}</h3>
                                    <h5>
                                        <em className='text-secondary'>{movie.director}</em>
                                    </h5>
                                    <h4>
                                        <em>{movie.genre}</em>
                                    </h4>
                                    <h6>
                                        <em className='text-secondary'>{movie.release_year}</em>
                                    </h6>
                                    <p>{movie.abstract}</p>
                                    <Link className="btn btn-primary" to="/movies/1">Leggi tutto</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default HomePage