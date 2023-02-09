import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
// import db from "./firebase";
// import FlipMove from "react-flip-move";

function Feed() {
  return (
    <div className="feed">
        <div className="feed_header">
            <h2>Home</h2>
            </div>

        {/* TweetBox */}
        <TweetBox />

        {/* Post */}
        <Post 
        displayName="Mallory Shackford"
        username='mb_shack'
        verified
        text="It's working!"
        image="https://media.giphy.com/media/YFkpsHWCsNUUo/giphy.gif"
         />
        <Post 
        displayName="Mallory Shackford"
        username='mb_shack'
        verified
        text="It's working!"
        image="https://media.giphy.com/media/YFkpsHWCsNUUo/giphy.gif"
         />
        <Post 
        displayName="Mallory Shackford"
        username='mb_shack'
        verified
        text="It's working!"
        image="https://media.giphy.com/media/YFkpsHWCsNUUo/giphy.gif"
         />
      {/* <FlipMove> */}
      {/* </FlipMove> */}
    </div>
  );
}

export default Feed;
