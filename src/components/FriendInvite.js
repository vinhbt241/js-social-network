import { useState } from "react";
import { UserInfo } from "./UserInfo"

const FriendInvite = (props) => {
  const currentUser = JSON.parse(localStorage.user);

  const ACCEPT_PENDING_REQUEST_API_URL = "https://virtuoso-social-network.herokuapp.com/api/users/accept_pending_request";
  const DECLINE_FRIEND_REQUEST_API_URL = "https://virtuoso-social-network.herokuapp.com/api/users/decline_friend_request";

  const [acceptSent, setAcceptSent] = useState(false);
  const [declineSent, setDeclineSent] = useState(false);

  const sendAcceptRequest = async () => {
    await fetch(ACCEPT_PENDING_REQUEST_API_URL, {
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

    setAcceptSent(true);
  }

  const sendDeclineRequest = async () => {
    await fetch(DECLINE_FRIEND_REQUEST_API_URL, {
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

    setDeclineSent(true);
  }


  return(
    <div className="FriendInvite request-box">
      <UserInfo user={props.user} classToAdd="user-info-in-request-box"/>
      <button 
        className="primary-color-bg" 
        onClick={sendAcceptRequest}
        disabled={acceptSent || declineSent}>
        {acceptSent ? "Accepted" : "Accept"}
      </button>
      <button 
        onClick={sendDeclineRequest}
        disabled={acceptSent || declineSent}>
        {declineSent ? "Declined" : "Decline"}
      </button>
    </div>
  )
}

export { FriendInvite }
