import { Sidebar } from "./Sidebar";
import { UserInfo } from "./UserInfo";
import { Post } from "./Post";
import { useEffect, useState } from "react";

const USER_API_URL = "http://127.0.0.1:3000/api/users/1"
const USER_POST_API_URL = "http://127.0.0.1:3000/api/users/1/user_posts"

const Profile = (props) => {
  const [userInfo, setUserInfo] = useState("Loading...");
  const [userPosts, setUserPosts] = useState([]);

  const getUserInfo = async () => {
    const response = await fetch(USER_API_URL);
    const data = await response.json();
    return data
  }

  const getUserPost = async () => {
    const response = await fetch(USER_POST_API_URL);
    const data = await response.json();
    return data; 
  }

  useEffect(() => {
    getUserInfo().then(userData => {
      setUserInfo(userData);
    })

    getUserPost().then(postsData => {
      setUserPosts(postsData);
    })
  },[])

  const listPosts = userPosts.map(post => {
    return(
      <li key={post.id}>
        <Post 
          userName={post.user.name}
          description={post.content} 
          numLikes="0" 
          numComments="0" />
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
