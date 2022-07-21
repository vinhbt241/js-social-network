import { UserInfo } from "./UserInfo"

const Comment = (props) => {
  return(
    <div className="Comment">
      <UserInfo user={props.user} classToAdd="small-font"/>

      <p>{props.content}</p>
    </div>
  )
}

export { Comment }
