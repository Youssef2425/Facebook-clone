import './share.scss';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { yellow } from '@mui/material/colors';

function Share() {
  return (
    <>
      <div className='sharePosts'>
        <div className='inputShare'>
          <img src="/photos/persons/person.jpg" alt="personImage" />
          <input type="text" placeholder=" What's on your mind, Youssef? " />
        </div> 
        <div className='iconShare'>
          <div className='shareIcon' >
            <VideoCameraFrontIcon sx={{ color: red[600] }} fontSize="medium" />
            <span> Live Video </span>
          </div>
          <div className='shareIcon'>
            <PhotoLibraryIcon sx={{ color: green[500] }} fontSize="medium" />
            <span> Photo/Video </span>
          </div>
          <div className='shareIcon'>
            <AddReactionIcon sx={{ color: yellow[700] }} fontSize="medium" />
            <span> Feeling/activity </span>
          </div>
          
          
          
        </div>
      </div>
    </>
  )
}

export default Share