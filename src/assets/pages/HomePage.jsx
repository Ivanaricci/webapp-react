import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <h1 className='text-primary'>Movie</h1>
            <h2>
                <i>List</i>
            </h2>
            <div className="row gy-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/500/300" alt="Movie" className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>Genere</em>
                            </h4>
                            <p>Descrizione</p>
                            <Link className="btn btn-primary" to="/movies/1">Leggi tutto</Link>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/500/300" alt="Movie" className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>Genere</em>
                            </h4>
                            <p>Descrizione</p>
                            <Link className="btn btn-primary" to="/movies/1">Leggi tutto</Link>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/500/300" alt="Movie" className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>Genere</em>
                            </h4>
                            <p>Descrizione</p>
                            <Link className="btn btn-primary" to="/movies/1">Leggi tutto</Link>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/500/300" alt="Movie" className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>Genere</em>
                            </h4>
                            <p>Descrizione</p>
                            <Link className="btn btn-primary" to="/movies/1">Leggi tutto</Link>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/500/300" alt="Movie" className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>Genere</em>
                            </h4>
                            <p>Descrizione</p>
                            <Link className="btn btn-primary" to="/movies/1">Leggi tutto</Link>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/500/300" alt="Movie" className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>Genere</em>
                            </h4>
                            <p>Descrizione</p>
                            <Link className="btn btn-primary" to="/movies/1">Leggi tutto</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage