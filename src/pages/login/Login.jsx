import { Link } from 'react-router-dom';
import './login.scss';
import HomeIcon from '@mui/icons-material/Home';

function Login() {
  return (
    <>
      <div className="login">
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
            <form>
              <input type="text" placeholder='Email address or phone number' id='firstName' required />
              <input type="password" placeholder='Password' id='surname' required />
              <button className="loginButton"> Log in </button>
              <Link className='registerLink' to='/register'>
                <button className="signupButton"> Create new account </button>
              </Link>
            </form>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login