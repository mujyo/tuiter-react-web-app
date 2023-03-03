import React from "react";
import tweet from "./tweets.json";
import HomeTweetItem from "./homeTweet";

const HomeComponent = () =>{
    return(
        <ul className="list-group">
        {
            tweet.map(homeTweet =>
                <HomeTweetItem
                    key={homeTweet._id} homeTweet={homeTweet}/> )
        }
        </ul>
    );
};

export default HomeComponent;