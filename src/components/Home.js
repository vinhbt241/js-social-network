import { useEffect, useState } from "react"
import { getData } from "../utilities";
import { Associates } from "./Associates"
import { PostContainer } from "./PostContainer"
import { Sidebar } from "./Sidebar"

const FRIENDS_API_URL = "http://127.0.0.1:3000/api/users/1/friends";
const POSTS_API_URL = "http://127.0.0.1:3000/api/users/1/user_and_friends_posts"

const Home = () => {
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
    <div className="Home">
      <Sidebar />
      <PostContainer posts={posts} />
      <Associates friends={friends} />
    </div>
  )
}

export { Home }
