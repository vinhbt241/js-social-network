import { Post } from "./Post"

const PostContainer = (props) => {
  const listPosts = props.posts.map(post => {
    return(
      <li key={post.id}>
        <Post 
          userName={post.user.name}
          description={post.content} 
          postID = {post.id}
          numLikes = {post.num_likes}
          numComments = {post.num_comments} />
      </li>
    )
  })

  return(
    <ul className="PostContainer">
      {listPosts}
    </ul>
  )
}

export {PostContainer}
