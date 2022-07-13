import { UserInfo } from "./UserInfo"

const Comment = (props) => {
  return(
    <div className="Comment">
      <UserInfo userImg={props.userImg} userName={props.userName} classToAdd="small-font"/>

      <p>{props.content}</p>
    </div>
  )
}

export { Comment }
