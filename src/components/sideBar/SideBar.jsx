import React, { useContext } from 'react'
import './sideBar.scss';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MenuLink from '../menuLink/MenuLink';
import EventIcon from '@mui/icons-material/Event';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FlagIcon from '@mui/icons-material/Flag';
import CampaignIcon from '@mui/icons-material/Campaign';
import BarChartIcon from '@mui/icons-material/BarChart';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { DarkModeContext } from '../../context/darkModeContext';

function SideBar() {

  const seeMore = () => {
    document.querySelector(".showMore").style.display = 'block';
    document.querySelector(".seeMore").style.display = 'none';
  }
  const seeLess = () => {
    document.querySelector(".showMore").style.display = 'none'
    document.querySelector(".seeMore").style.display = 'flex';
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  const { dispatch } = useContext(DarkModeContext)
  return (
    <>
      <div className="sideBar">
        <div className="sidebarInfo">
          <Link className='profileImg' to='/profile' onClick={scrollToTop}>
            <MenuLink
            Img={<img src='/photos/persons/person.jpg' alt='personImage' />}
            text='Youssef Omar' />
          </Link>
          <MenuLink Icon={<RssFeedIcon className='menuIcon' />} text='Feeds' />
          <MenuLink Icon={<GroupIcon className='menuIcon' />} text='Friends' />
          <span onClick={() => dispatch({ type: "TOGGEL" })}>
            <MenuLink Icon={<DarkModeIcon className='menuIcon darkMode' />} text='Light / Dark' />
          </span>
          <MenuLink Icon={<GroupsIcon className='menuIcon' />} text='Groups' />
          <MenuLink Icon={<StoreIcon className='menuIcon' />} text='Market Place' />
          <MenuLink Icon={<OndemandVideoIcon className='menuIcon' />} text='Video' />
          <MenuLink Icon={<SportsEsportsIcon className='menuIcon' />} text='Play Games' />
          <MenuLink Icon={<WaterDropIcon sx={{ color: red[600] }} fontSize="large" />} text='Blood Donations' />

          <div className='seeMore menuLink'>
            <KeyboardArrowDownIcon fontSize="large" />
            <button onClick={seeMore} className='sidebarButton'>See more</button>
          </div>

          <div className="showMore">
            <MenuLink Icon={<EventIcon className='menuIcon' />} text='Events' />
            <MenuLink Icon={<BookmarkIcon className='menuIcon' />} text='Saved' />
            <MenuLink Icon={<FlagIcon className='menuIcon' />} text='Pages' />
            <MenuLink Icon={<CampaignIcon className='menuIcon' />} text='Ad Center' />
            <MenuLink Icon={<BarChartIcon className='menuIcon' />} text='Ads Manger' />
            <Link to='/login' className='logoutLink'>
              <MenuLink Icon={<LogoutIcon className='menuIcon' />} text='Logout' />
            </Link>
            <div className='menuLink'>
            <KeyboardArrowUpIcon fontSize="large" />
            <button onClick={seeLess} className='sidebarButton'>See less</button>
          </div>
          </div>
 
          <hr />
          <h3> Your shortcuts </h3>
          <div className='menuLink'>
            <img className='shortcutImg' src="/photos/Upwork.jpg" alt="Upwork Group" />
            <span> Freelancers Of Upwork </span>
          </div>
          <div className='menuLink'>
            <img className='shortcutImg' src="/photos/Front-End developers.jpg" alt="Front-End Group" />
            <span> Front-End developers </span>
          </div>
          <div className='menuLink'>
            <img className='shortcutImg' src="/photos/8 Ball Pool.png" alt="Upwork Group" />
            <span> 8 Ball Pool </span>
          </div>

        </div>
      </div>
    </>
  )
}

export default SideBar