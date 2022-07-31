import { UserInfo } from "./UserInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const PostForm = (props) => {
  const CREATE_POST_API_URL = "https://virtuoso-social-network.herokuapp.com/api/posts";

  const [postImageUrl, setPostImageUrl] = useState("");

  const displayPreviewPostImage = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2) {
        setPostImageUrl(reader.result);
      }
    }

    reader.readAsDataURL(event.target.files[0]);
  }

  const handlePostSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData();
    
    formData.append('post[content]', form.content.value);
    formData.append('post[user_id]', props.currentUser.id);
    if(typeof form.image.files[0] !== 'undefined' ) {
      formData.append('post[image]', form.image.files[0], form.image.value);
    }
    

    await fetch(CREATE_POST_API_URL, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: localStorage.token
      }
    })

    document.location.reload();
  }

  return(
    <div className="PostForm-container" >
      <form className="PostForm" onSubmit={handlePostSubmit}>
        <UserInfo user={props.currentUser} hideName={true}/>
        <textarea
          type="text"
          name="content"
          placeholder="Share what you're thinking"
          className="PostForm-content"/>
        <button
          className="PostForm-file-btn"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('PostForm-file').click();
          }}>
          <FontAwesomeIcon icon={faImage} title="Upload Image"/>
        </button>
        <input
          type="file"
          name="image"
          id="PostForm-file" 
          accept="image/*"
          onChange={displayPreviewPostImage}/>

        <img src={postImageUrl} alt="" className="post-img"/>

        <input
          type="submit"
          value="Post"
          className="PostForm-submit"/>
      </form>
    </div>
  )
}

export { PostForm }
