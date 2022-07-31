import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Setting = () => {
  const currentUser = JSON.parse(localStorage.user);

  const UPDATE_NAME_API_URL = 'http://127.0.0.1:3000/api/users/update_name'
  const UPDATE_PASSWORD_API_URL = 'http://127.0.0.1:3000/api/users/update_password'

  const [displayProfileUpdate, setDisplayProfileUpdate] = useState(false);
  const [displayAccountUpdate, setDisplayAccountUpdate] = useState(false);
  const [displayUpdateNameForm, setDisplayUpdateNameForm] = useState(false);
  const [displayUpdatePasswordForm, setDisplayUpdatePasswordForm] = useState(false);
  const [displayUpdateAvatarForm, setDisplayUpdateAvatarForm] = useState(false);
  const [displayUpdateBgImgForm, setDisplayUpdateBgImgForm] = useState(false);

  const [nameUpdated, setNameUpdated] = useState(false);
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(currentUser.avatar_url);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(currentUser.background_image_url)

  const processUpdateName = async (event) => {
    event.preventDefault();

    let newName = event.target["name"].value;

    const response = await fetch(UPDATE_NAME_API_URL, {
      method: "POST",
      body: JSON.stringify({
        name: newName,
        user_id: currentUser.id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
        Authorization: localStorage.token
      }
    }) 

    const data = await response.json();

    if (data.error) {
      alert("Can't update name now, please try again later");
    } else {
      setNameUpdated(true);
    }
  }

  const processUpdatePassword = async (event) => {
    event.preventDefault();

    let password = event.target["password"].value;
    let passWordConfirm = event.target["password-confirmation"].value;

    if (password !== passWordConfirm) {
      alert("Password does not match, please try again");
      return;
    }

    const response = await fetch(UPDATE_PASSWORD_API_URL, {
      method: "POST",
      body: JSON.stringify({
        password: password,
        user_id: currentUser.id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
        Authorization: localStorage.token
      }
    }) 

    const data = await response.json();

    if (data.error) {
      alert("Can't update password now, please try again later");
    } else {
      setPasswordUpdated(true);
    }
  }

  const displayPreviewAvatar = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2) {
        setAvatarUrl(reader.result);
      }
    }

    reader.readAsDataURL(event.target.files[0]);
  }

  const displayPreviewBackground = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2) {
        setBackgroundImageUrl(reader.result);
      }
    }

    reader.readAsDataURL(event.target.files[0]);
  }

  return(
    <div className="Setting normal-page">
      <Sidebar />

      <h1>
        Settings
      </h1>

      <button className="toggle-update-display" onClick={() => setDisplayProfileUpdate(true)}>
        Update profile
      </button>

      <button className="toggle-update-display" onClick={() => setDisplayAccountUpdate(true)}>
        Update account
      </button>

      {
        displayProfileUpdate &&
        <div className="fixed-background">
          <div className="display-container">
            <h1>Update profile</h1>
            <div className="update-section">
              <h1>Avatar</h1>
              <button 
                className="unstyle-button update-button"
                onClick={() => {
                  setDisplayUpdateAvatarForm(true);
                  setDisplayProfileUpdate(false);
                }}>Update</button>
            </div>
            <img src={currentUser.avatar_url} alt="" className="user-avatar-in-settings"/>
            <div className="update-section">
              <h1>Background Image</h1>
              <button 
                className="unstyle-button update-button"
                onClick={() => {
                  setDisplayUpdateBgImgForm(true);
                  setDisplayProfileUpdate(false);
                }}>Update</button>
            </div>
            <img src={currentUser.background_image_url} alt="" className="user-bg-img-in-settings"/>

            <button className="close-form-button" onClick={() => setDisplayProfileUpdate(false)}>
              <FontAwesomeIcon icon={faClose}/>
            </button>
          </div>
        </div>
        
      }
      
      {
        displayAccountUpdate &&
        <div className="fixed-background">
          <div className="display-container">
            <h1>Update Account</h1>

            <div className="update-section">
              <h1><FontAwesomeIcon icon={faUserEdit}/> Change username</h1>
              <button 
                className="unstyle-button update-button"
                onClick={() => {
                  setDisplayAccountUpdate(false);
                  setDisplayUpdateNameForm(true);
                }}>
                Update
              </button>
            </div>

            <div className="update-section">
              <h1><FontAwesomeIcon icon={faKey}/> Change password</h1>
              <button 
                className="unstyle-button update-button"
                onClick={() => {
                  setDisplayAccountUpdate(false);
                  setDisplayUpdatePasswordForm(true);
                }}>
                Update
              </button>
            </div>

            <button className="close-form-button" onClick={() => setDisplayAccountUpdate(false)}>
              <FontAwesomeIcon icon={faClose}/>
            </button>
          </div>
        </div>
      }

      {
        displayUpdateNameForm &&
        <div className="fixed-background">
          <form className="display-container" onSubmit={processUpdateName}>

            <label className="update-form-label">
              Update name
              <input className="update-form-input" type="text" name="name" required />
            </label>

            <input 
              className="update-form-submit" 
              type="submit" 
              value={nameUpdated ? "Name changed" : "Change"} 
              disabled={nameUpdated} />

            <button 
              className="close-form-button" onClick={ () => {
                setDisplayUpdateNameForm(false);
                setDisplayAccountUpdate(true);
              }}>
                <FontAwesomeIcon icon={faClose}/>
            </button>
          </form>
        </div>
      }

      {
        displayUpdatePasswordForm &&
        <div className="fixed-background">
          <form className="display-container" onSubmit={processUpdatePassword}>
            <label className="update-form-label">
              New password
              <input className="update-form-input" type="password" name="password" required/>

            </label>
            <label className="update-form-label">
              Confirm password
              <input className="update-form-input" type="password" name="password-confirmation" required/>
            </label>

            <input 
              className="update-form-submit" 
              type="submit" 
              value={passwordUpdated ? "Password changed" : "Change"} 
              disabled={passwordUpdated} />

            <button 
                className="close-form-button" onClick={ () => {
                setDisplayUpdatePasswordForm(false);
                setDisplayAccountUpdate(true);
              }}>
                <FontAwesomeIcon icon={faClose}/>
            </button>
          </form>
        </div>
      }

      {
        displayUpdateAvatarForm &&
        <div className="fixed-background">
          <form className="display-container">
            <strong className="update-form-name">Update avatar</strong>
            <label className="update-form-label">
              <div className="update-image-click">
                <FontAwesomeIcon icon={faImage} /> Choose Image
              </div>

              <input 
                type="file" 
                className="hidden-input" 
                accept="image/*"
                onChange={displayPreviewAvatar}/>
            </label>

            <img src={avatarUrl} alt="" className="user-avatar-in-settings"/>

            <input className="update-form-submit" type="submit" value="Change" />

            <button 
                className="close-form-button" onClick={ () => {
                  setDisplayUpdateAvatarForm(false);
                  setDisplayProfileUpdate(true);
                }}>
                  <FontAwesomeIcon icon={faClose}/>
            </button>
          </form>
        </div>
      }

      {
        displayUpdateBgImgForm &&
        <div className="fixed-background">
          <form className="display-container">
            <strong className="update-form-name">Update background image</strong>
            <label className="update-form-label">
              <div className="update-image-click">
                <FontAwesomeIcon icon={faImage} /> Choose Image
              </div>

              <input 
                type="file" 
                className="hidden-input" 
                accept="image/*"
                onChange={displayPreviewBackground}/>
            </label>

            <img src={backgroundImageUrl} alt="" className="user-bg-img-in-settings"/>

            <input className="update-form-submit" type="submit" value="Change" />

            <button 
                className="close-form-button" onClick={ () => {
                  setDisplayUpdateBgImgForm(false);
                  setDisplayProfileUpdate(true);
                }}>
                  <FontAwesomeIcon icon={faClose}/>
            </button>
          </form>
        </div>
      }

      
    </div>  
  )
}

export { Setting }
