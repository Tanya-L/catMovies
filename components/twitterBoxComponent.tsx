import {Timeline} from "react-twitter-widgets";
import React from "react";


export const TwitterBoxComponent = () => (
    <Timeline
        dataSource={{ sourceType: "profile", screenName: "IMDbTV" }}
        options={{ dnt: true, width: "400", height: "600" }}
    />
);
// <Hashtag
//     hashtag={"catsmovie"}
//     options={{
//         height: '400'
//     }}
// />