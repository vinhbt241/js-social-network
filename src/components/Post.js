import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Comment } from './Comment';
import { UserInfo } from './UserInfo';
import { useEffect, useState } from 'react';
import { getData } from '../utilities';

const Post = (props) => {
  const COMMENTS_API_URL = `http://127.0.0.1:3000/api/posts/${props.postID}/comments`

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getData(COMMENTS_API_URL).then(commentsData => {
      setComments(commentsData);
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
          {props.numLikes} 
          <button className="post-btn">
            <FontAwesomeIcon icon={faThumbsUp}/> Like
          </button>
        </li>
        <li> 
          {comments.length} 
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
        {listComments}
      </ul>
    </div>
  )
}

export { Post }
