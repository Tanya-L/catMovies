import {MovieRating} from "../pages/movies/movieRating";
import utilStyles from "../styles/utils.module.css";
import {MovieInfo} from "../pages/movies/movieInfo";
import React from "react";

export default function MovieRatingComponent({movieInfo}: { movieInfo: MovieInfo }) {
    function formatMovieRating(r: MovieRating) {
        return <div className={utilStyles.listItem}>
            <p>{r.Source}: {r.Value}</p>
        </div>
    }

    if (movieInfo) {
        return (
            <div>
                <p className={utilStyles.lightText}> Ratings:
                    {movieInfo.Ratings.map(formatMovieRating)}</p>
            </div>
        )
    }
    return (
        <span>Loading...</span>
    )
}
