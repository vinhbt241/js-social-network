import { Sidebar } from "./Sidebar";
import { UserInfo } from "./UserInfo";
import { Post } from "./Post";
import { useEffect, useState } from "react";
import { getData } from "../utilities";

const Profile = (props) => {
  const USER_API_URL = "http://127.0.0.1:3000/api/users/1"
  const USER_POST_API_URL = "http://127.0.0.1:3000/api/users/1/user_posts"

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
          user={post.serializer_user}
          description={post.content} 
          postID = {post.id}
          numComments = {post.num_comments}
          postImgUrl={post.image_url} />
      </li>
    )
  })

  return(
    <div className="Profile">
      <Sidebar />
      <div className="user-img-section">
        <img src={userInfo.background_image_url} alt="USER BACKGROUND IMG" className="user-bg-img"/>
        <UserInfo user={userInfo} classToAdd="user-info-in-profile"/>
      </div>

      <ul className="profile-post-container">
        {listPosts}
      </ul>    
    </div>
  )
}

export { Profile }
