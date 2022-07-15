import { Sidebar } from "./Sidebar";
import { UserInfo } from "./UserInfo";
import { Post } from "./Post";

const Profile = (props) => {
  return(
    <div className="Profile">
      <Sidebar />
      <div class="user-img-section">
        <img src={props.userBackgroundImage} alt="USER BACKGROUND IMG" className="user-bg-img"/>
        <UserInfo userName="Current User Name" classToAdd="user-info-in-profile"/>
      </div>

      <ul className="profile-post-container">
        <li>
          <Post
           userName="Your Post 1"
           description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sed corporis voluptate recusandae, doloribus velit at harum voluptas labore eum, aut alias? Amet, debitis nam. Consequuntur est qui sunt quis. "
           numLikes="312"
           numComments="777"/>
        </li>
        <li>
          <Post
           userName="Share Post 1"
           description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sed corporis voluptate recusandae, doloribus velit at harum voluptas labore eum, aut alias? Amet, debitis nam. Consequuntur est qui sunt quis. "
           numLikes="312"
           numComments="777"/>
        </li>
      </ul>    
    </div>
  )
}

export { Profile }
