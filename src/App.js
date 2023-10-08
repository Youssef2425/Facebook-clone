import './App.css';
import './style.scss';
import Home from "./pages/home/Home";
import EditProfile from "./pages/edit profile/EditProfile";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';


function App() {

  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/edit" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

