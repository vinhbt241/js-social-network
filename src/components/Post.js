import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Comment } from './Comment';
import { UserInfo } from './UserInfo';

const Post = (props) => {
  return(
    <div className="Post">
       <UserInfo userImg={props.userImg} userName={props.userName}/>
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
            userName="Comment 2"
            content="blah blah"/>
        </li>
        <li>
          <Comment 
            userName="Comment 3"
            content="blah blah"/>
        </li>
        <li>
          <Comment 
            userName="Comment 4"
            content="blah blah"/>
        </li>
      </ul>
    </div>
  )
}

export { Post }
