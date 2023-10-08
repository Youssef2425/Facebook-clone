import { DriveFolderUploadOutlined } from '@mui/icons-material';
import './register.scss';
import HelpIcon from '@mui/icons-material/Help';
// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';

function Register() {
  
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  // Years first
  const year = 1920;
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = year; i <= currentYear; i++) {
    years.push(i);
  }

  // Second the months
  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
    
  ];

  // Third the Days
  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  return (
    <>
      <div className="register">
      <Link className='HomeIconLink' to='/'>
        <HomeIcon className='homeIcon' />
        <span> Home Page </span>
      </Link>
        <div className="container">
          <div className="left">
            <h2> facebook </h2>
            <p> Facebook helps you connect and share with the people in your life. </p>
          </div>
          <div className="right">
            <div className="top">
              <div className="topInfo">
              <h2> Sign Up </h2>
              <span> It's quick and easy. </span>
              </div>
              <div className="upload">
                <div className='profileIme'>
                  <img src="/photos/DefaultProfile.jpg" alt="" />
                </div>
                <label htmlFor="file">
                  Image : <DriveFolderUploadOutlined className="icon" />
                  <input type="file" name="file" id="file" accept=".png,.jpeg,.jpg" style={{ display: "none" }} />
                </label>
              </div>
            </div>
            <div className="bottom">
              <form>
                <div className="names">
                <input type="text" placeholder='First name' id='firstName' required />
                <input type="text" placeholder='Surname' id='surname' required />
                </div>
                <input type="email" placeholder='Mobile number or email address' id='email' required />
                <input type="password" placeholder='Password' id='password' required />
                <h4> Date of birth <HelpIcon className='helpIcon' /> </h4>
                <div className="date">
                  <div>
                    <label> Day </label>
                    <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
                      <optgroup label='Select a Day'>
                      {
                      days.map((day) => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label> Month </label>
                    <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                      <optgroup label='Select a Month'>
                        {
                          months.map((month) => (
                          <option key={month.value} value={month.value}>{month.label}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                  <div>
                  <label> Year </label>
                  <select>
                    <optgroup label='Select a Year'>
                    {
                      years.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                    </optgroup>
                  </select>

                  </div>
                </div>
                <h4> Gender <HelpIcon className='helpIcon' /> </h4>
                <div className="gender">
                  <div>
                    <span> Male </span>
                    <input type="radio" name='gender' />
                  </div>
                  <div>
                    <span> Female </span>
                    <input type="radio" name='gender' />
                  </div>
                </div>
                <div className="registeButtons">
                  <button className="signUp"> Sign Up </button>
                  <Link className='loginLink' to='/login'>
                    <button className="signIn"> Log In </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register