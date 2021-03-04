import React from 'react';
import './MovieView.css';

class MovieView extends React.Component {
    componentDidMount() {
        const { location, history }  = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const {location} = this.props;
        if (location.state) {
            return(
                <div className ="movie__container">
                    <img src = {location.state.poster} alt = {location.state.title} title = {location.state.title} />
                    <div className = "movie__data">
                        <div className = "movie__title">{location.state.title}</div>
                        <div className = "movie__year">{location.state.year}</div>
                        <ul className = "movie__genres">
                            {
                                location.state.genres.map((genre, index) => {
                                    return(
                                        <li key={index} className = "movie__genre">{genre}</li>
                                    )
                                })
                            }
                        </ul>
                        <p className = "movie__summary">{location.state.summary}</p>

                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default MovieView;