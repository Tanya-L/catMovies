import {MovieInfo} from "../pages/movies/movieInfo";
import utilStyles from "../styles/utils.module.css";

export default function MovieInfoComponent({movieInfo}: { movieInfo: MovieInfo }) {
    if (movieInfo) {
        return (<div>
                <h1 className={utilStyles.headingXl}>{movieInfo.Title} ({movieInfo.Year})</h1>
                <div
                    className={utilStyles.lightText}>
                     {movieInfo.Released} | {movieInfo.Runtime} | {movieInfo.Genre}</div>
                <img src={movieInfo.Poster}/>
                <p>{movieInfo.Plot}</p>
                <div>
                    <p className={utilStyles.highlight}>Director: {movieInfo.Director}</p>
                    <p className={utilStyles.highlight}>Cast: {movieInfo.Actors}</p>
                </div>
            </div>
        )
    }
    return (
        <span>Loading...</span>
    )
}
