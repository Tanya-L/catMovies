import {MovieInfo} from "../interfaces/movieInfo";
import utilStyles from "../styles/utils.module.css";

export default function MovieInfoComponent({movieInfo}: { movieInfo: MovieInfo }) {
    if (movieInfo) {
        return (<div>
                <h1 className={utilStyles.headingXl}>{movieInfo.Title} ({movieInfo.Year})</h1>
                <div
                    className={utilStyles.lightText}>
                     {movieInfo.Released} | {movieInfo.Runtime} | {movieInfo.Genre} | {movieInfo.Awards}</div>
                <img src={movieInfo.Poster}/>
                <p>{movieInfo.Plot}</p>
                <div>
                    <p className={utilStyles.highlight}>Director: {movieInfo.Director}</p>
                    <p className={utilStyles.highlight}>Writer: {movieInfo.Writer}</p>
                    <p className={utilStyles.highlight}>Cast: {movieInfo.Actors}</p>
                </div>
                <span className={utilStyles.colorInherit}>Production: {movieInfo.Production}</span>
                <br />
                <span className={utilStyles.colorInherit}>Country: {movieInfo.Country}</span>
            </div>
        )
    }
    return (
        <span>Loading...</span>
    )
}
