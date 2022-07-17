import { Post } from "./Post"

const PostContainer = (props) => {

  const listPosts = props.posts.map(post => {
    return(
      <li key={post.id}>
        <Post 
          userName={post.user.name}
          description={post.content} 
          numLikes="0" 
          numComments="0" />
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
