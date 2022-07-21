import { Post } from "./Post"

const PostContainer = (props) => {
  const listPosts = props.posts.map(post => {
    return(
      <li key={post.id}>
        <Post 
          user={post.serializer_user}
          description={post.content} 
          postID = {post.id}
          numComments = {post.num_comments}
          postImgUrl={post.image_url} />
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
