import { PostContainer } from "./PostContainer"
import { Sidebar } from "./Sidebar"

const Home = () => {
  return(
    <div className="Home">
      <Sidebar />
      <PostContainer />
    </div>
  )
}

export { Home }
