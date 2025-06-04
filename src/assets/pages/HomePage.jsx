import React from 'react'
import { useState, useEffect } from 'react'
import MovieCard from '../../components/MovieCard'
import axios from 'axios'


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

    useEffect(() => {
        axios.get('http://localhost:3000/api/movies').then((resp) => {
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