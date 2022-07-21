import { FriendInvite } from "./FriendInvite"
import { AddFriendRequest } from "./AddFriendRequest"
import { Sidebar } from "./Sidebar"

const FriendRequests = (props) => {
  return(
    <div className="FriendRequests">
      <Sidebar />

      <div>
        <h1>Friend Invites</h1>
        <ul className="request-container">
          <li>
            <FriendInvite user={{name: "User 1"}}/>
          </li>
          <li>
            <FriendInvite user={{name: "User 1"}}/>
          </li>
          <li>
            <FriendInvite user={{name: "User 1"}}/>
          </li>
          <li>
            <FriendInvite user={{name: "User 1"}}/>
          </li>
          <li>
            <FriendInvite user={{name: "User 1"}}/>
          </li>
          <li>
            <FriendInvite user={{name: "User 1"}}/>
          </li>
          <li>
            <FriendInvite user={{name: "User 1"}}/>
          </li>
          <li>
            <FriendInvite user={{name: "User 1"}}/>
          </li>
        </ul>
      </div>

      <div>
        <h1>Let's know each other!</h1>
        <ul className="request-container">
          <li>
            <AddFriendRequest user={{name: "User 1"}}/>
          </li>
          <li>
            <AddFriendRequest user={{name: "User 1"}}/>
          </li>
          <li>
            <AddFriendRequest user={{name: "User 1"}}/>
          </li>
          <li>
            <AddFriendRequest user={{name: "User 1"}}/>
          </li>
          <li>
            <AddFriendRequest user={{name: "User 1"}}/>
          </li>
          <li>
            <AddFriendRequest user={{name: "User 1"}}/>
          </li>
          <li>
            <AddFriendRequest user={{name: "User 1"}}/>
          </li>
          <li>
            <AddFriendRequest user={{name: "User 1"}}/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { FriendRequests }
