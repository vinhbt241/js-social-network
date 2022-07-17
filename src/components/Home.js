import { useEffect, useState } from "react"
import { Associates } from "./Associates"
import { PostContainer } from "./PostContainer"
import { Sidebar } from "./Sidebar"

const FRIENDS_API_URL = "http://127.0.0.1:3000/api/users/1/friends";

const Home = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    const response = await fetch(FRIENDS_API_URL);
    const data = await response.json();
    return data
  }

  useEffect(() => {
    getFriends().then(friendsData => {
      setFriends(friendsData)
    })
  }, [])

  return(
    <div className="Home">
      <Sidebar />
      <PostContainer />
      <Associates friends={friends} />
    </div>
  )
}

export { Home }
