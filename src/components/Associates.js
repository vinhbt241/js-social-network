import { UserInfo } from "./UserInfo"

const Associates = (props) => {
  return(
    <div className="Associates">
      <h1>Associates</h1>

      <div class="friend-status">
        <UserInfo userImg={props.userImg} userName="Friend 1" classToAdd="small-font"/>
        <span className="online-status is-online"></span>
      </div>

      <div class="friend-status">
        <UserInfo userImg={props.userImg} userName="Friend 2" classToAdd="small-font"/>
        <span className="online-status"></span>
      </div>

      <div class="friend-status">
        <UserInfo userImg={props.userImg} userName="Friend 3" classToAdd="small-font"/>
        <span className="online-status is-online"></span>
      </div>

      <div class="friend-status">
        <UserInfo userImg={props.userImg} userName="Friend 4" classToAdd="small-font"/>
        <span className="online-status"></span>
      </div>
    </div>
  )
}

export {Associates}
