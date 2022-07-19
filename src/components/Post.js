import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Comment } from './Comment';
import { UserInfo } from './UserInfo';
import { useRef, useState } from 'react';
import { getData } from '../utilities';
import { v4 as uuidv4 } from 'uuid';

const Post = (props) => {
  const COMMENTS_API_URL = `http://127.0.0.1:3000/api/posts/${props.postID}/comments`;
  const USER_API_URL = "http://127.0.0.1:3000/api/users/1";

  const [comments, setComments] = useState([]);
  const [userInfo, setUserInfo] = useState("");
  const [displayComments, setDisplayComments] = useState(false);
  const ref = useRef();

  const setupDisplay = () => {
    if(displayComments === false) {
      setDisplayComments(true);

      getData(USER_API_URL).then(userData => {
        setUserInfo(userData);
      })

      getData(COMMENTS_API_URL).then(commentsData => {
        setComments(commentsData);
      });
    } else {
      ref.current.focus();
    }
  }

  const handleUserComment = (event) => {
    let userComment = event.target["comment_content"].value

    setComments(prevComments => [{
      id: uuidv4(),
      user: {name: userInfo.name},
      content: userComment
    },...prevComments]);

    event.target["comment_content"].value = ""

    event.preventDefault();
  }

  const listComments = comments.map(comment => {
    return(
      <li key={comment.id}>
        <Comment 
          userName={comment.user.name}
          content={comment.content}/>
      </li>
    )
  })

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
          <button 
            className="post-btn"
            onClick={setupDisplay}>
            <FontAwesomeIcon icon={faComment}/> Comment
          </button>
        </li>
        <li>
          <button className="post-btn">
            <FontAwesomeIcon icon={faShare}/> Share
          </button>
        </li>
      </ul>

      {displayComments &&
        <div>
          <form className='comment-form' onSubmit={handleUserComment}>
            <UserInfo classToAdd="small-font"/>
            <input 
              type="text" 
              name="comment_content" 
              placeholder='Write comment'
              className="comment-input"
              ref={ref}/>
            <input type="submit" hidden/>
          </form>

          <ul className="comments-container">
          {listComments}
          </ul>
        </div>
      }
      
    </div>
  )
}

export { Post }
