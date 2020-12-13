import {TrailerInfo} from "../interfaces/trailerInfo";
import ReactPlayer from "react-player";
import React from "react";
import utilStyles from "../styles/utils.module.css";

export default function TrailerComponent({trailerInfo}: { trailerInfo: TrailerInfo }) {
    if (trailerInfo) {
        return (
            <div className={utilStyles.margin5px}>
                <ReactPlayer url={trailerInfo.videoUrl}/>
            </div>
        )
    }
    return (
        <span>Loading...</span>
    )
}