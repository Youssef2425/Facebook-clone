import React, { useContext } from 'react'
import './navbar.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { DarkModeContext } from '../../context/darkModeContext';

function Navbar() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  const { dispatch } = useContext(DarkModeContext)
  return (
    <>
      <header>
        <div className="navbarLeft">
          <Link className='logo' to='/'>
            <h1> facebook </h1>
            <FacebookOutlinedIcon className='facebookIcon' />
          </Link>
          <div className="searchInput">
            <SearchOutlinedIcon fontSize="small" color="action" />
            <input type="text" placeholder='Search Facebook' />
          </div>
          <span onClick={() => dispatch({ type: "TOGGEL" })}>
            <DarkModeIcon className='darkMode' />
          </span>
        </div>
        <div className="navbarCenter">
          <div className='icons HomeIcon'>
            <Link to='/'>
              <HomeIcon className='navIcons firstIcon'/>
            </Link>
          </div>
          <div className='icons VideoIcon'>
            <OndemandVideoIcon className='navIcons' />  
          </div>
          <div className='icons StorefrontIcon'>
            <StorefrontIcon className='navIcons' /> 
          </div>
          <div className='icons GroupsIcon'>
            <GroupsIcon className='navIcons' /> 
          </div>
        </div>
        <div className="navbarRight">
          <Link className='logIn' to='/register'>
            <span> Log in </span>
            <LoginIcon sx={{ fontSize: 27 }} />
          </Link>
          <div className='rightChild AppsIcon'> <AppsIcon sx={{ fontSize: 26 }} /> </div>
          <div className='rightChild ChatBubbleIcon'> <MapsUgcIcon sx={{ fontSize: 21 }} /> </div>
          <div className='rightChild NotificationsIcon'> <NotificationsIcon sx={{ fontSize: 25 }} /> </div>
          <Link to='/profile' onClick={scrollToTop}>
            <div className='rightChild profileImg'> <img src="/photos/persons/person.jpg" alt="personImage" /> </div>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Navbar