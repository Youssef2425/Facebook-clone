import Navbar from '../../components/navbar/Navbar'
import RightBar from '../../components/rightBar/RightBar'
import SideBar from '../../components/sideBar/SideBar'
import TimeLine from '../../components/timeLine/TimeLine'
import './home.scss'

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="homePage">
          <SideBar />
          <TimeLine />
          <RightBar />
        </div>
      </div>
    </>
  )
}

export default Home