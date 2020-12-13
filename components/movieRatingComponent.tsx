import {MovieRating} from "../interfaces/movieRating";
import utilStyles from "../styles/utils.module.css";
import {MovieInfo} from "../interfaces/movieInfo";
import React from "react";

export default function MovieRatingComponent({movieInfo}: { movieInfo: MovieInfo }) {
    function formatMovieRating(r: MovieRating) {
        return <span key={r.Source} className={utilStyles.list}>
            <p>{r.Source}: {r.Value}</p>
        </span>
    }

    if (movieInfo) {
        return (
            <div>
                <p className={utilStyles.highlight}> Ratings:
                    {movieInfo.Ratings.map(formatMovieRating)}</p>
                <hr/>
                <span className={utilStyles.colorInherit}>
                   Metascore: {movieInfo.Metascore} | imdb Rating: {movieInfo.imdbRating} |
                    imdb Votes: {movieInfo.imdbVotes} | imdb Id : {movieInfo.imdbID}
                </span>
            </div>
        )
    }
    return (
        <span>Loading...</span>
    )
}