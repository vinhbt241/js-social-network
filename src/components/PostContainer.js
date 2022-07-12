import { Post } from "./Post"

const PostContainer = () => {
  return(
    <div className="PostContainer">
      <Post 
       userName="User 1"
       description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sed corporis voluptate recusandae, doloribus velit at harum voluptas labore eum, aut alias? Amet, debitis nam. Consequuntur est qui sunt quis. "
       numLikes="312"/>
    </div>
  )
}

export {PostContainer}
