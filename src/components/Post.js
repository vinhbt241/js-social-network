import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Comment } from './Comment';
import { UserInfo } from './UserInfo';
import { useEffect, useState } from 'react';
import { getData } from '../utilities';

const Post = (props) => {
  const COMMENTS_API_URL = `http://127.0.0.1:3000/api/posts/${props.postID}/comments`;
  const LIKE_API_URL = `http://127.0.0.1:3000/api/posts/${props.postID}/likes`;
  const USER_API_URL = "http://127.0.0.1:3000/api/users/1";

  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [userInfo, setUserInfo] = useState("");
  const [displayComments, setDisplayComments] = useState(false);

  const setupDisplay = () => {
    setDisplayComments(true);

    getData(USER_API_URL).then(userData => {
      setUserInfo(userData);
    })
  }

  const handleUserComment = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    getData(COMMENTS_API_URL).then(commentsData => {
      setComments(commentsData);
    })

    getData(LIKE_API_URL).then(likesData => {
      setLikes(likesData);
    })
  }, [])

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
          {likes.length} 
          <button className="post-btn">
            <FontAwesomeIcon icon={faThumbsUp}/> Like
          </button>
        </li>
        <li> 
          {comments.length} 
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
              name="comment-content" 
              placeholder='Write comment'
              className="comment-input"/>
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
