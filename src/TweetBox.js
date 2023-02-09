import React from 'react';
import './TweetBox.css';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

function TweetBox() {
  return (
    <div className="tweetBox">
    <form>
        <div className="tweetBox_input">
            <Avatar />
            <input placeholder="What's happening?" type="text" />
        </div>
            <input 
                className="tweetBox_imageInput" 
                placeholder="Optional: Enter image URL" 
                type="text" />

            <Button className="tweetBox_tweetBtn">Tweet</Button>
    </form>
    </div>
  )
}

export default TweetBox