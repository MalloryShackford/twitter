import React from 'react';
import './Sidebar.css'
import HomeRoundedIcon from '@mui/icons-material/Home';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import SidebarOption from './SidebarOption';
// import { Button } from '@mui/material-next/Button';
import Button from '@mui/material/Button';



function Sidebar() {
  return (
    <div className="sidebar">
       
        <SidebarOption Icon={HomeRoundedIcon} text="Home" active/>
        <SidebarOption Icon={TagRoundedIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsNoneRoundedIcon} text="Notifications"/>
        <SidebarOption Icon={MailOutlineRoundedIcon} text="Messages"/>
        <SidebarOption Icon={BookmarkBorderRoundedIcon} text="Bookmarks"/>
        <SidebarOption Icon={PersonOutlineOutlinedIcon} text="Profile"/>
        <SidebarOption Icon={PendingOutlinedIcon} text="More"/>

        {/*Button -> Tweet */}
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  )
}

export default Sidebar