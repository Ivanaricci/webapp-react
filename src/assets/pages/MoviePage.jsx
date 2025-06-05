import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewCard from '../../components/ReviewCard'
import axios from 'axios'



const MoviePage = () => {

    const { id } = useParams();



    const [movie, setMovie] = useState(null);

    // funzione che recupera l'array che ha l'id passato come parametro
    const fetchMovie = () => {
        axios.get(`http://127.0.0.1:3000/api/movies/${id}`).then((resp) => {
            setMovie(resp.data);
        })
            .catch((err) => console.log(err));
    };

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
                        <div className="col-12">
                            <div className="d-flex justify-content-between">
                                <h3>Recensioni</h3>
                            </div>
                        </div>
                        {movie.reviews.map((review) => (
                            <div className="row gy-3" key={`review -${review.id}`}>
                                <ReviewCard review={review} />
                            </div>
                        ))}
                    </>
                )}
            </div>

        </>

    )
}

export default MoviePage