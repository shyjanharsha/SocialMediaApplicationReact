import './profile.css'
import TopBar from "../../components/topbar/TopBar";
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'  

export default function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                    <img src="assets/person/1.jpeg" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Safak Kocaoglu</h4>
                    <span className="profileInfoDesc">Hello my friends</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>
            </div>
        </div>
      </div>
    </>
  )
}
