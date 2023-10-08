import React, { useState } from 'react'
import './stories.scss';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Stories() {

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

      <div className='stories'>
        <div className="storiesOrReels">
          <div className='active reelIcon'>
            <ImportContactsIcon className='storyIcon' color="primary" sx={{ fontSize: 25 }} />
            <span> Stories </span>
          </div>
          <div className='reelIcon'>
            <MovieFilterIcon className='storyIcon' color="action" sx={{ fontSize: 25 }}  />
            <span> Reels </span>
          </div>
        </div>

        <div className="storiesPhotos">
          <div className="firstStory" >
            <img src="/photos/persons/person.jpg" alt="myPhoto" onClick={handleImageClick} />

              <AddCircleIcon className='addIcon' color="primary" />
            <span> Create Story </span>
          </div>
          <div className="storiesGroup">
            <img className='storyPhoto' src="/photos/persons/person-5.jpg" alt="story" onClick={handleImageClick} />
            <img className='profilePhoto' src="/photos/persons/person-5.jpg" alt="profile" />
            <span> Janet Stephen </span>
          </div>
          <div className="storiesGroup">
            <img className='storyPhoto' src="/photos/persons/person-7.jpg" alt="story" onClick={handleImageClick} />
            <img className='profilePhoto' src="/photos/persons/person-7.jpg" alt="profile" />
            <span> Isabella Randy </span>
          </div>
          <div className="storiesGroup">
            <img className='storyPhoto' src="/photos/persons/person-2.jpg" alt="story" onClick={handleImageClick} />
            <img className='profilePhoto' src="/photos/persons/person-2.jpg" alt="profile" />
            <span> Beverly Bruce </span>
          </div>
          <div className="storiesGroup lastStory">
            <img className='storyPhoto' src="/photos/persons/person-11.jpg" alt="story" onClick={handleImageClick} />
            <img className='profilePhoto' src="/photos/persons/person-11.jpg" alt="profile" />
            <span> Glenna Philip </span>
          </div>

        </div>

      </div>
    </>  
  )
}

export default Stories