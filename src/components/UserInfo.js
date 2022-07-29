import { Link } from "react-router-dom"

const UserInfo = (props) => {
  return(
    <div className={`UserInfo ${props.classToAdd}`}>
      <Link to={`/profile/${props.user.id}`} className="unstyle-link">
        <img src={props.user.avatar_url} alt=""/>
      </Link>
      <Link to={`/profile/${props.user.id}`} className="unstyle-link">
        {props.hideName ? "" : <h1>{props.user.name}</h1>}
      </Link> 
    </div>
  )
}

export { UserInfo }
