import {Timeline} from "react-twitter-widgets";
import React from "react";

function TwitterBoxComponent() {
    return (
        <Timeline
            dataSource={{sourceType: "profile", screenName: "IMDbTV"}}
            options={{dnt: true, width: "600", height: "600"}}
        />
    );
}

export default TwitterBoxComponent;
