import './contacts.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';
import { friendsOnline } from '../../data';

function Contacts() {
  return (
    <>
      <div className="contacts">
        <div className="contactsIcon">
        <h4> Contacts </h4>
        <IconButton className='editIcon' >
          <MoreHorizIcon />
        </IconButton>
        </div>
        <ul className="online">
          {
            friendsOnline.map((f) => (
              <li key={f.id}>
                <img src={f.profilePicture} alt="profilePicture" className={f.class} /> 
                <span> {f.name} </span>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Contacts