import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {
  return(
    <div className="Post">
      <div className="uploader-info">
        <img src={props.userImg} alt=""/>
        <h1>{props.userName}</h1>
      </div>
      <p>{props.description}</p>
      <img src={props.postImg} alt="" className="post-img"/>



      <ul className="user-interactions">
        <li>
         {props.numLikes} <FontAwesomeIcon icon={faThumbsUp}/> Like
        </li>
        <li> 
          <FontAwesomeIcon icon={faComment}/> Comment
        </li>
        <li>
          <FontAwesomeIcon icon={faShare}/> Share
        </li>
      </ul>
    </div>
  )
}

export { Post }
