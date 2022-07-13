import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Comment } from './Comment';

const Post = (props) => {
  return(
    <div className="Post">
      <div className="user-info">
        <img src={props.userImg} alt=""/>
        <h1>{props.userName}</h1>
      </div>
      <p>{props.description}</p>
      <img src={props.postImg} alt="" className="post-img"/>



      <ul className="user-interactions">
        <li>
          {props.numLikes} 
          <button className="post-btn">
            <FontAwesomeIcon icon={faThumbsUp}/> Like
          </button>
        </li>
        <li> 
          {props.numComments} 
          <button className="post-btn">
            <FontAwesomeIcon icon={faComment}/> Comment
          </button>
        </li>
        <li>
          <button className="post-btn">
            <FontAwesomeIcon icon={faShare}/> Share
          </button>
        </li>
      </ul>

      <ul className="comments-container">
        <li>
          <Comment 
            userName="Comment 1"
            content="blah blah"/>
        </li>
        <li>
          <Comment 
            userName="Comment 1"
            content="blah blah"/>
        </li>
        <li>
          <Comment 
            userName="Comment 1"
            content="blah blah"/>
        </li>
        <li>
          <Comment 
            userName="Comment 1"
            content="blah blah"/>
        </li>
      </ul>
    </div>
  )
}

export { Post }
