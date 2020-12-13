import {MovieInfo} from "../interfaces/movieInfo";
import utilStyles from "../styles/utils.module.css";

export default function MovieTechInfoComponent({movieInfo}: { movieInfo: MovieInfo }) {
    if (movieInfo) {
        return (<div>
                <hr/>
                <span className={utilStyles.margin5px}>
                   Type: {movieInfo.Type} | DVD: {movieInfo.DVD} |
                    Website: {movieInfo.Website}
                </span></div>
        )
    }
    return (
        <span>Loading...</span>
    )
}
