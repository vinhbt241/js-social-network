import { UserInfo } from "./UserInfo"

const FriendInvite = (props) => {
  return(
    <div className="FriendInvite request-box">
      <UserInfo user={props.user} classToAdd="user-info-in-request-box"/>
      <button className="primary-color-bg">Accept</button>
      <button>Delete</button>
    </div>
  )
}

export { FriendInvite }
