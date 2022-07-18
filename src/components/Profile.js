import { Sidebar } from "./Sidebar";
import { UserInfo } from "./UserInfo";
import { Post } from "./Post";
import { useEffect, useState } from "react";
import { getData } from "../utilities";

const USER_API_URL = "http://127.0.0.1:3000/api/users/1"
const USER_POST_API_URL = "http://127.0.0.1:3000/api/users/1/user_posts"

const Profile = (props) => {
  const [userInfo, setUserInfo] = useState("Loading...");
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    getData(USER_API_URL).then(userData => {
      setUserInfo(userData)
    })

    getData(USER_POST_API_URL).then(postsData => {
      setUserPosts(postsData)
    })
  },[])

  const listPosts = userPosts.map(post => {
    return(
      <li key={post.id}>
        <Post 
          userName={post.user.name}
          description={post.content} 
          numLikes="0" 
          postID = {post.id} />
      </li>
    )
  })

  return(
    <div className="Profile">
      <Sidebar />
      <div className="user-img-section">
        <img src={props.userBackgroundImage} alt="USER BACKGROUND IMG" className="user-bg-img"/>
        <UserInfo userName={userInfo.name} classToAdd="user-info-in-profile"/>
      </div>

      <ul className="profile-post-container">
        {listPosts}
      </ul>    
    </div>
  )
}

export { Profile }
