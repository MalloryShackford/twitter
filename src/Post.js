import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PublishRoundedIcon from '@mui/icons-material/PublishRounded';


function Post({displayName, username, verified, text, image, avatar}) {
  return  (
  <div className="post">
    <div className="post_avatar">  
      <Avatar src={avatar} />
    </div>
    <div className="post_body">
      <div className="post_header">
        <div className="post_headerText">
        <h3>{displayName}{" "}
        <span className="post_headerSpecial">
        {verified && <VerifiedIcon className="post_badge" />  } @ {username} 
        </span>
         </h3> 
      </div>
      <div className="post_headerDescription">
      <p>{text}</p>
      </div>
    </div>
    <img src={image} alt=""/>
    <div className="post_footer">
      <ChatBubbleOutlineRoundedIcon fontsize="small" />
      <RepeatRoundedIcon fontsize="small"/>
      <FavoriteBorderRoundedIcon fontsize="small"/>
      <BarChartOutlinedIcon fontsize="small"/>
      <PublishRoundedIcon fontsize="small"/>
    </div>
    </div>
    </div>
  );
}

export default Post