import { Associates } from "./Associates"
import { PostContainer } from "./PostContainer"
import { Sidebar } from "./Sidebar"

const Home = () => {
  return(
    <div className="Home">
      <Sidebar />
      <PostContainer />
      <Associates />
    </div>
  )
}

export { Home }
