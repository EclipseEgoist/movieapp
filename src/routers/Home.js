import React,{Component} from 'react';
import './Home.css';
// import axios from 'axios';
import Movie from '../components/Movie';

class Home extends Component{
    state = {
        isLoading : true,
        movies : []
    }

    // ------------ axios 방식
    // getMovies = async () => {
    //     const {
    //         data : {
    //             data : {movies}
    //         }
    //     } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');

    //     this.setState({movies, isLoading : false})
    // }

    // ------------- fetch 방식
    getMovies = () => {
        // fetch는 단순히 데이터를 추출하는 것이 아니라 객체 형태로 넘어온다?
        fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
        .then((res) => res.json())
        .catch(err => console.log(err))
        .then((res) =>{
            console.log(res.data.movies);
            this.setState({movies : res.data.movies, isLoading:false})
        })
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return(
            <section className = "container">
                {
                    isLoading? (
                        <div className = "loader">
                            <span className = "loader__text">
                                Loading
                            </span>
                        </div>
                    ) : (
                        <div className = "movies">
                            {
                                movies.map((movie) => {
                                    return(
                                        <Movie  key = {movie.id}
                                                id = {movie.id}
                                                year = {movie.year}
                                                title = {movie.title}
                                                summary = {movie.summary}
                                                poster = {movie.medium_cover_image}
                                                genres = {movie.genres} />
                                    )
                                })
                            }
                        </div>
                    )
                }
            </section>
        )
    }
}

export default Home;