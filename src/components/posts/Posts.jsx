import { Users } from '../../data';
import './posts.scss';
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import { useState } from 'react';


function Posts({ Posts }) {

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

      <div className="posts">
        <div className="postInfo">
          <div className="postTop">
            <div className="postTopLeft">
              <div>
              <img src={Users.filter((u) => u.id === Posts.userId)[0].profilePicture } alt="" onClick={handleImageClick} />
              </div>
              <div>
                <span className="postUsername">
                  {Users.filter((u) => u.id === Posts.userId)[0].name}
                </span>
                <div className="dateAndIcon">
                  <span className="postDate"> {`${Posts.date} `} </span>
                  <PublicIcon className='publicIcon' />
                </div>
              </div>
            </div>
            <div className="postTopRight">
              <IconButton>
                <MoreHorizIcon className='editIcon' />
              </IconButton>
            </div>
          </div>
            <div className="postCenter">
              <span className="postText"> {Posts.body} </span>
              <img src={Posts.image} alt="" onClick={handleImageClick} />
            </div>
            <div className="postBottom">
              <div className='bottomLeft'>
                <ThumbUpIcon className='bottomLeftIcon' style={{color: '#0165E1'}} />
                <FavoriteIcon className='bottomLeftIcon' style={{color: 'red'}} />
                <span className='likeCounter'> {Posts.like} </span>
              </div>
              <div className='bottomRight'>
                <span className='commentText'> {Posts.comment} - comments - share </span>
              </div>
            </div>
            <hr className='postHr' />
            <div className="postFooter">
              <div className="postFooterIcons">
                <ThumbUpOutlinedIcon className='footerIcon' />
                <span className="footerText">Like</span>
              </div>
              <div className="postFooterIcons">
                <ChatBubbleOutlineIcon className='footerIcon' />
                <span className="footerText">Comment</span>
              </div>
              <div className="postFooterIcons">
                <ReplyIcon
                style={{ transform: 'rotateY(180deg)' }}
                  // sx={{
                  //   animation: "spin 2s linear infinite",
                  //   "@keyframes spin": {
                  //     "0%": {
                  //       transform: "rotate(360deg)",
                  //     },
                  //     "100%": {
                  //       transform: "rotate(0deg)",
                  //     },
                  //   },
                  // }}
                 className='footerIcon' />
                <span className="footerText">Share</span>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Posts