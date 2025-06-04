import React from 'react'
import { useState, useEffect } from 'react'
import MovieCard from '../../components/MovieCard'
import axios from 'axios'




const HomePage = () => {

    // Definisco la variabile di stato
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/movies').then((resp) => {
            setMovies(resp.data)
            console.log(resp.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <h1 className='text-primary'>Movie</h1>
            <h2>
                <i>List</i>
            </h2>
            <div className="row gy-4">
                {movies.map((movie) => {
                    return (
                        <MovieCard movie={movie} key={`movie -${movie.id}`} />
                    )
                })}

            </div>
        </>
    )
}

export default HomePage