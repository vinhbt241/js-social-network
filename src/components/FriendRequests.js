import { FriendInvite } from "./FriendInvite"
import { AddFriendRequest } from "./AddFriendRequest"
import { Sidebar } from "./Sidebar"

const FriendRequests = (props) => {
  return(
    <div className="FriendRequest">
      <Sidebar />

      <div>
        <h1>Friend Invites</h1>
        <ul className="request-container">
          <li>
            <FriendInvite userName="User 1"/>
          </li>
          <li>
            <FriendInvite userName="User 2"/>
          </li>
          <li>
            <FriendInvite userName="User 3"/>
          </li>
          <li>
            <FriendInvite userName="User 4"/>
          </li>
          <li>
            <FriendInvite userName="User 5"/>
          </li>
          <li>
            <FriendInvite userName="User 6"/>
          </li>
          <li>
            <FriendInvite userName="User 7"/>
          </li>
          <li>
            <FriendInvite userName="User 8"/>
          </li>
        </ul>
      </div>

      <div>
        <h1>Let's know each other!</h1>
        <ul className="request-container">
          <li>
            <AddFriendRequest userName="User 1"/>
          </li>
          <li>
            <AddFriendRequest userName="User 1"/>
          </li>
          <li>
            <AddFriendRequest userName="User 1"/>
          </li>
          <li>
            <AddFriendRequest userName="User 1"/>
          </li>
          <li>
            <AddFriendRequest userName="User 1"/>
          </li>
          <li>
            <AddFriendRequest userName="User 1"/>
          </li>
          <li>
            <AddFriendRequest userName="User 1"/>
          </li>
          <li>
            <AddFriendRequest userName="User 1"/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { FriendRequests }
