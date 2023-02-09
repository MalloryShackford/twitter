import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed, 
         TwitterShareButton, 
         TwitterTweetEmbed } 
         from 'react-twitter-embed';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets_input">
        <SearchOutlinedIcon className="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
        </div>
        <div className="widgets_widgetContainer">
          <h2>What's happening</h2>
          <TwitterTweetEmbed tweetId={"1577311631897509889"} />
          <TwitterTimelineEmbed
              sourceType="profile"
              screenName="mb_shack"
              options={{ height: 400  }} />
          <TwitterShareButton
              url={"https://twitter.com/mb_shack"} />
             
        </div>
    </div>
  )
}

export default Widgets