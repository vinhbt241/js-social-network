import { UserInfo } from "./UserInfo"

const PostForm = (props) => {
  return(
    <form className="PostForm">
      <div className="PostForm-content">
        <UserInfo user={props.currentUser} hideName={true}/>
        <input
          type="text" name="content"
          placeholder="Share what you're thinking"/>
      </div>
      <input type="file" name="image"/>
      <input type="hidden" name="user_id" value={props.currentUser.id} />
      <input type="submit" value="post" />
    </form>
  )
}

export { PostForm }
