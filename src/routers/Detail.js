import React from 'react';
import Proptypes from 'prop-types';
import './Detail.css';

class Detail extends React.Component {
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
                // <div>
                //     {location.state.title}
                // </div>

                <div className ="movies">
                    <div className = "detail">
                        <img src = {location.state.poster} alt = {location.state.title} title = {location.state.title} />
                        <div className = "detail__data">
                            <div className = "detail__title">{location.state.title}</div>
                            <div className = "detail__year">{location.state.year}</div>
                            <ul className = "detail__genres">
                                {
                                    location.state.genres.map((genre, index) => {
                                        return(
                                            <li key={index} className = "detail__genre">{location.state.genre}</li>
                                        )
                                    })
                                }
                            </ul>
                            <p className = "detail_summary">{location.state.summary}</p>

                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }

        
    }
}

Detail.propTypes = {
    year : Proptypes.number.isRequired,
    title : Proptypes.string.isRequired,
    summary : Proptypes.string.isRequired,
    poster : Proptypes.string.isRequired,
    genres : Proptypes.arrayOf(Proptypes.string).isRequired,
}


export default Detail;