import { Sidebar } from "./Sidebar";
import { UserInfo } from "./UserInfo";
import { Post } from "./Post";
import { useEffect, useState } from "react";
import { getData } from "../utilities";
import { useParams } from "react-router-dom";

import DefaultBackground from "../images/default_background.jpg"

const Profile = () => {
  let params = useParams();
  const userId = params.id

  const USER_API_URL = `https://virtuoso-social-network.herokuapp.com/api/users/${userId}`
  const USER_POST_API_URL = `https://virtuoso-social-network.herokuapp.com/api/users/${userId}/user_posts`

  const [userInfo, setUserInfo] = useState("");
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    getData(USER_API_URL).then(userData => {
      setUserInfo(userData)
    })

    getData(USER_POST_API_URL).then(postsData => {
      setUserPosts(postsData)
    })
  },[userId])

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
    <div className="Profile normal-page">
      <Sidebar />
      <div className="user-img-section">
        <img src={userInfo.background_image_url || DefaultBackground} alt="" className="user-bg-img"/>
        <UserInfo user={userInfo} classToAdd="user-info-in-profile"/>
      </div>

      <ul className="profile-post-container">
        {listPosts}
      </ul>    
    </div>
  )
}

export { Profile }
