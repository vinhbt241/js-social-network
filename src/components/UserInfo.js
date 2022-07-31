import { Link } from "react-router-dom"
import DefaultAvatar from "../images/default_avatar.jpg"

const UserInfo = (props) => {
  return(
    <div className={`UserInfo ${props.classToAdd}`}>
      <Link to={`/profile/${props.user.id}`} className="unstyle-link">
        <img src={props.user.avatar_url || DefaultAvatar} alt=""/>
      </Link>
      <Link to={`/profile/${props.user.id}`} className="unstyle-link">
        {props.hideName ? "" : <h1>{props.user.name}</h1>}
      </Link> 
    </div>
  )
}

export { UserInfo }
