import { useEffect, useState } from "react"
import { getData } from "../utilities";
import { Associates } from "./Associates"
import { PostContainer } from "./PostContainer"
import { PostForm } from "./PostForm";
import { Sidebar } from "./Sidebar"

const Home = () => {
  const FRIENDS_API_URL = "http://127.0.0.1:3000/api/users/1/friends";
  const POSTS_API_URL = "http://127.0.0.1:3000/api/users/1/user_and_friends_posts";
  const CURRENT_USER_API_URL = "http://127.0.0.1:3000/api/users/1";

  const [friends, setFriends] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    getData(FRIENDS_API_URL).then(friendsData => {
      setFriends(friendsData)
    })

    getData(POSTS_API_URL).then(postsData => {
      setPosts(postsData)
    })

    getData(CURRENT_USER_API_URL).then(userData => {
      setCurrentUser(userData);
    })
  }, [])

  return(
    <div className="Home">
      <Sidebar />
      <div>
        <PostForm currentUser={currentUser} />
        <PostContainer posts={posts} currentUser={currentUser} />
      </div>
      <Associates friends={friends} />
    </div>
  )
}

export { Home }
