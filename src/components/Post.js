import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Comment } from './Comment';
import { UserInfo } from './UserInfo';
import { useEffect, useRef, useState } from 'react';
import { getData } from '../utilities';
import { v4 as uuidv4 } from 'uuid';

const Post = (props) => {
  const COMMENTS_API_URL = `http://127.0.0.1:3000/api/posts/${props.postID}/comments`;
  const LIKES_API_URL = `http://127.0.0.1:3000/api/posts/${props.postID}/likes`;
  const CREATE_COMMENT_API_URL = "http://127.0.0.1:3000/api/comments";
  const MODIFY_LIKE_API_URL = "http://127.0.0.1:3000/api/likes"

  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [displayComments, setDisplayComments] = useState(false);
  const ref = useRef();

  const setupDisplay = () => {
    if(displayComments === false) {
      setDisplayComments(true);

      getData(COMMENTS_API_URL).then(commentsData => {
        setComments(commentsData);
      });
    } else {
      ref.current.focus();
    }
  }

  const handleUserComment = async (event) => {
    event.preventDefault();

    let userComment = event.target["comment_content"].value

    await fetch(CREATE_COMMENT_API_URL, {
      method: "POST",
      body: JSON.stringify({
        content: userComment,
        post_id: props.postID,
        user_id: props.currentUser.id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
        Authorization: localStorage.token
      }
    })

    setComments(prevComments => [{
      id: uuidv4(),
      serializer_user: props.currentUser,
      content: userComment
    },...prevComments]);

    event.target["comment_content"].value = ""
  }

  const userLike = () => {
    for (const like of likes) {
      if(like.user_id === props.currentUser.id) {
        return like
      }
    }

    return false;
  }

  const handleUserLike = async () => {
    let userLikedPost = userLike();

    if(userLikedPost !== false) {
      if(!userLikedPost.hasOwnProperty("generated_at_frontend")) {
        const DELETE_LIKE_API_URL = MODIFY_LIKE_API_URL + `/${userLikedPost.id}`;
        await fetch(DELETE_LIKE_API_URL, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Accept: "application/json",
            Authorization: localStorage.token
          }
        })
      }

      setLikes(prevLikes => prevLikes.filter(like => like.user_id !== props.currentUser.id));
    } else {
      await fetch(MODIFY_LIKE_API_URL, {
        method: "POST",
        body: JSON.stringify({
          post_id: props.postID,
          user_id: props.currentUser.id
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json",
          Authorization: localStorage.token
        }
      })

      setLikes(prevLikes => [{
        id: uuidv4(),
        post_id: props.postID,
        user_id: props.currentUser.id,
        generated_at_frontend: true
      }, ...prevLikes])
    }
  }

  useEffect(() => {
    getData(LIKES_API_URL).then(likesData => {
      setLikes(likesData)
    })
  }, [])

  const listComments = comments.map(comment => {
    return(
      <li key={comment.id}>
        <Comment 
          user={comment.serializer_user}
          content={comment.content}/>
      </li>
    )
  })

  return(
    <div className="Post">
      <UserInfo user={props.user}/>
      
      <p>{props.description}</p>

      <img src={props.postImgUrl} alt="" className="post-img"/>

      <ul className="user-interactions">
        <li>
          {likes.length} 
          <button 
            className="post-btn"
            onClick={handleUserLike}>
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
            <UserInfo 
              user={props.currentUser}
              classToAdd="small-font"
              hideName={true}/>
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
