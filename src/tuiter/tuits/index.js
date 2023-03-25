import React from "react";
import TuitItem from "./tuit-summary-item";
import {useSelector} from "react-redux";

const TuitsList = () =>{
    const tuitsArray = useSelector(state => state.homeTuits)
    console.log(tuitsArray);
    return(
        <ul className="list-group">
        {
            tuitsArray.map(homeTweet =>
                <TuitItem
                    key={homeTweet._id} homeTweet={homeTweet}/> )
        }
        </ul>
    );
};

export default TuitsList;