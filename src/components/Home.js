import { useEffect, useState } from "react"
import { getData } from "../utilities";
import { Associates } from "./Associates"
import { PostContainer } from "./PostContainer"
import { PostForm } from "./PostForm";
import { Sidebar } from "./Sidebar"

const Home = () => {
  let currentUser = JSON.parse(localStorage.user)

  const FRIENDS_API_URL = `http://127.0.0.1:3000/api/users/${currentUser.id}/friends`;
  const POSTS_API_URL = `http://127.0.0.1:3000/api/users/${currentUser.id}/user_and_friends_posts`;

  const [friends, setFriends] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData(FRIENDS_API_URL).then(friendsData => {
      setFriends(friendsData)
    })

    getData(POSTS_API_URL).then(postsData => {
      setPosts(postsData)
    })
  }, [])

  return(
    <div className="Home normal-page">
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
