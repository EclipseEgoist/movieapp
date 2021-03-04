import React from 'react';
import './Movie.css';
import Proptypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';

function Movie({year, title, summary, poster, genres}) {
    return (
        <div className = "movie">
            <Link to = { {pathname : '/movie-detail', state : {year, title, summary, poster, genres} } } >
            
            <NavLink to = { {pathname : '/movie-view', state : {year, title, summary, poster, genres} } }>
                <img src = {poster} alt = {title} title = {title} />
            </NavLink>

            <div className = "movie__data">
                <div className = "movie__title">{title}</div>
                <div className = "movie__year">{year}</div>
                <ul className = "movie__genres">
                    {
                        genres.map((genre, index) => {
                            return(
                                <li key={index} className = "movie__genre">{genre}</li>
                            )
                        })
                    }
                </ul>
                <p className = "movie_summary">{summary.slice(0,180)}...</p>

            </div>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    year : Proptypes.number.isRequired,
    title : Proptypes.string.isRequired,
    summary : Proptypes.string.isRequired,
    poster : Proptypes.string.isRequired,
    genres : Proptypes.arrayOf(Proptypes.string).isRequired,
}

export default Movie;