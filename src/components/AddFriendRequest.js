import { UserInfo } from "./UserInfo"

const AddFriendRequest = (props) => {
  return(
    <div className="FriendRequest request-box">
      <UserInfo userName={props.userName} userImg={props.userImg} classToAdd="user-info-in-request-box"/>
      <button className="primary-color-bg">Add friend</button>
      <button>Delete</button>
    </div>
  )
}

export { AddFriendRequest }
