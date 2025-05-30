import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

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


const initialReviews = [
    {
        id: 1,
        text: "Lorem ipsum",
        author: "Nome1",
        vote: 3
    },
    {
        id: 2,
        text: "Lorem ipsum",
        author: "Nome2",
        vote: 5
    },
    {
        id: 3,
        text: "Lorem ipsum",
        author: "Nome3",
        vote: 2
    },
]

const MoviePage = () => {

    const { id } = useParams();
    const [movies, setMovies] = useState(initialMovies);
    const [reviews, setReviews] = useState(initialReviews);

    const [movie, setMovie] = useState(null);

    // funzione che recupera l'array che ha l'id passato come parametro
    const fetchMovie = () => {
        movies.forEach((actualMovie) => {
            if (actualMovie.id === parseInt(id)) {
                setMovie(actualMovie);
            }
        })
    }

    useEffect(() => {
        fetchMovie()
    }, []);

    console.log(movie)

    return (
        <>
            <div className='row'>
                {movie === null ? (
                    `Caricamento dati film`
                ) : (
                    <>
                        <div className="col-12 col-md-6 col-lg-4">
                            <img src={movie.image} alt="Movie" className='img-fluid' />
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <h1>{movie.title}</h1>
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
                        </div>
                    </>
                )}
            </div>
            <div className="row gy-4">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h3>Recensioni</h3>
                    </div>
                </div>
                {reviews.map((review) => (
                    <div className="col-12">
                        <div className="card p-4">
                            <p>{review.text}</p>
                            <p>{review.vote}</p>
                            <p>{review.author}</p>
                        </div>
                    </div>
                ))}



            </div>
        </>

    )
}

export default MoviePage