import { DriveFolderUploadOutlined } from '@mui/icons-material';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sideBar/SideBar';
import './editProfile.scss';

function EditProfile() {
  return (
    <>
      <div className="editProfile">
        <Navbar />
        <div className="container">
          <div className="leftSide">
            <SideBar />
          </div>
          <div className="rightSide">
            <div className="profilePhotos">
              <img src="/photos/cover.jpeg" alt="coverPhoto" className='coverPhoto' />
              <img src="/photos/persons/person.jpg" alt="profilePicture" className='profilePicture' />
            </div>
            <div className="profileData">
                <h3> Youssef Omar </h3>
                <span> Front-End Developer </span>
            </div>
            <div className="editData">
              <h2> Edit Profile </h2>
              <div className="editing">
                <div className="left">
                  <img src="/photos/DefaultProfile.jpg" alt="profileImage" />
                </div>
                <div className="right">
                  <form action="">
                    <label htmlFor="file" style={{display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
                      Image: <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                    <label> Name </label>
                    <input type="text" placeholder='Jane Doe' />
                    <label> E-mail </label>
                    <input type="email" placeholder='jane_doe@gmail.com' />
                    <label> Phone number </label>
                    <input type="number" placeholder='+2 123 456 789' />
                    <label> From where </label>
                    <input type="text" placeholder='Cairo, Egypt' />
                    <label> Relationship </label>
                    <input type="text" placeholder='Single' />
                    <button type='submit' > Save </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile