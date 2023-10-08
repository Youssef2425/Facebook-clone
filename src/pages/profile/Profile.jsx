import './profile.scss';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sideBar/SideBar'
import Share from '../../components/share/Share';
import { UsersPosts } from '../../data';
import Posts from '../../components/posts/Posts';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Contacts from '../../components/contacts/Contacts';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Profile() {

  const [isOpen, setIsOpen] = useState(false);
  const [clickedImageSrc, setClickedImageSrc] = useState('');

  function handleImageClick(e) {
    const src = e.target.src;
    setClickedImageSrc(src);
    setIsOpen(true);
  }

  return (
    <>

      {isOpen && ( <>
        <div className="popupOverlay" onClick={() => setIsOpen(false)}></div>
        <div className="popupBox">
          <img src={clickedImageSrc} alt="" />
          <span className='closeButton' onClick={() => setIsOpen(false)}> X </span>
        </div>
       </> )}

      <div className="profile">
        <Navbar />
        <div className="profileContainer">
          <div className="profileSidebar">
            <SideBar />
          </div>
          <div className="profileInfo">
            <div className="profilePhotos">
            <img src="/photos/cover.jpeg" alt="coverPhoto" className='coverPhoto' onClick={handleImageClick} />
            <img src="/photos/persons/person.jpg" alt="profilePicture" className='profilePicture' onClick={handleImageClick} />
            </div>
            <div className="profileData">
              <div className="intro">
                <h3> Youssef Omar </h3>
                <span> Front-End Developer </span>
                <Link to='/profile/edit'>
                  <button>Edit Profile</button>
                </Link>
              </div>
              <div className="details">
                <div className='left'>
                  <div className="email">
                    <span> <MailIcon /> </span>
                    <span className='infoKey'>  E-mail : </span>
                    <span className='infoValue'> yo600700@gmail.com </span>
                  </div>
                  <div className="phone">
                    <span> <PhoneIcon /> </span>
                    <span className='infoKey'>  Phone : </span>
                    <span className='infoValue'> +20 1122107120 </span>
                  </div>
                  <div className="form">
                    <span> <PlaceIcon /> </span>
                    <span className='infoKey'>  From : </span>
                    <span className='infoValue'> Cairo, Egypt </span>
                  </div>
                </div>
                <div className='right'>
                  <div className="relationship">
                    <span> <FavoriteIcon /> </span>
                    <span className='infoKey'>  Relationship : </span>
                    <span className='infoValue'> Single </span>
                  </div>
                  <div className="followers">
                    <span> <RssFeedIcon /> </span>
                    <span className='infoKey'>  Followed by : </span>
                    <span className='infoValue'> 2000 people </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="profilePosts">
            <Share />
            {
            UsersPosts.map((p) =>(
              <Posts key={p.id} Posts={p} />
            ))
          }
            </div>
          </div>
          <div className="profileRightbar">
            <h3> Friends </h3>
            <div className="friends">
              <div className="friend">
                <img src="/photos/persons/person-6.jpg" alt="Nicholas Ros profile" onClick={handleImageClick} />
                <span> Nicholas Ros </span>
              </div>
              <div className="friend">
                <img src="/photos/persons/person-12.jpg" alt="Janet Stephen profile" onClick={handleImageClick} />
                <span> Janet Stephen </span>
              </div>
              <div className="friend">
                <img src="/photos/persons/person-10.jpg" alt="Emily Jason profile" onClick={handleImageClick} />
                <span> Emily Jason </span>
              </div>
              <div className="friend">
                <img src="/photos/persons/person-18.jpg" alt="Rachel Matthew profile" onClick={handleImageClick} />
                <span> Rachel Matthew  </span>
              </div>
              <div className="friend">
                <img src="/photos/persons/person-4.jpg" alt="Joseph Morgan profile" onClick={handleImageClick} />
                <span> Joseph Morgan </span>
              </div>
              <div className="friend">
                <img src="/photos/persons/person-16.jpg" alt="Jessica Randy profile" onClick={handleImageClick} />
                <span> Jessica Randy </span>
              </div>
            </div>
          <Contacts />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile