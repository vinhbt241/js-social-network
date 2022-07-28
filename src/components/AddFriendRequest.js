import { useState } from "react";
import { UserInfo } from "./UserInfo";

const AddFriendRequest = (props) => {
  const currentUser = JSON.parse(localStorage.user);

  const SEND_FRIEND_REQUEST_API_URL = "http://127.0.0.1:3000/api/users/send_friend_request";

  const [requestSent, setRequestSent] = useState(false);

  const sendFriendRequest = async () => {
    await fetch(SEND_FRIEND_REQUEST_API_URL, {
      method: "POST",
      body: JSON.stringify({
        user_id: currentUser.id,
        friend_id: props.user.id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
        Authorization: localStorage.token
      }
    })

    setRequestSent(true);
  }

  return(
    <div className="FriendRequest request-box">
      <UserInfo user={props.user} classToAdd="user-info-in-request-box"/>
      <button 
        className="primary-color-bg" 
        onClick={sendFriendRequest}
        disabled={requestSent}>
        {requestSent ? "Request sent" : "Add Friend"}
      </button>
      <button disabled={requestSent}>Delete</button>
    </div>
  )
}

export { AddFriendRequest }
