import { FriendInvite } from "./FriendInvite"
import { AddFriendRequest } from "./AddFriendRequest"
import { Sidebar } from "./Sidebar"
import { useEffect, useState } from "react";
import { getData } from "../utilities";

const FriendRequests = (props) => {
  const currentUser = JSON.parse(localStorage.user);

  const PENDING_FRIENDS_API_URL = `https://virtuoso-social-network.herokuapp.com/api/users/${currentUser.id}/pending_friends`;
  const POTENTIAL_FRIENDS_API_URL = `https://virtuoso-social-network.herokuapp.com/api/users/${currentUser.id}/potential_friends`;

  const [pendingFriends, setPendingFriends] = useState([]);
  const [potentialFriends, setPotentialFriends] = useState([]);

  useEffect(() => {
    getData(PENDING_FRIENDS_API_URL).then(pendingFriendsData => {
      setPendingFriends(pendingFriendsData)
    })

    getData(POTENTIAL_FRIENDS_API_URL).then(potentialFriendsData => {
      setPotentialFriends(potentialFriendsData)
    })
  }, [])

  const listPendingFriends = pendingFriends.map(pendingFriend => {
    return(
      <li key={pendingFriend.id}>
        <FriendInvite user={pendingFriend}/>
      </li>
    )
  }) 

  const listPotentialFriends = potentialFriends.map(potentialFriend => {
    return(
      <li key={potentialFriend.id}>
        <AddFriendRequest user={potentialFriend}/>
      </li>
    )
  }) 

  return(
    <div className="FriendRequests normal-page">
      <Sidebar />

      <div>
        <h1>Pending Friend Requests</h1>
        <ul className="request-container">
          {listPendingFriends}
        </ul>
      </div>

      <div>
        <h1>Let's know each other!</h1>
        <ul className="request-container">
          {listPotentialFriends}
        </ul>
      </div>
    </div>
  )
}

export { FriendRequests }
