import { UserInfo } from "./UserInfo"

const Associates = (props) => {
  const listFriends = props.friends.map(friend => {
    return(
      <li key={friend.id} className="friend-status">
        <UserInfo userName={friend.name} classToAdd="small-font" />
        {friend.is_online ? 
          <span className="online-status is-online"></span> :
          <span className="online-status"></span>
        }
      </li>
    )
  })

  return(
    <ul className="Associates">
      <h1>Associates</h1>

      {listFriends}
    </ul>
  )
}

export {Associates}
