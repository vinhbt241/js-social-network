import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Setting = () => {
  const currentUser = JSON.parse(localStorage.user);

  const [displayProfileUpdate, setDisplayProfileUpdate] = useState(false);
  const [displayAccountUpdate, setDisplayAccountUpdate] = useState(false);
  const [displayUpdateNameForm, setDisplayUpdateNameForm] = useState(false);
  const [displayUpdatePasswordForm, setDisplayUpdatePasswordForm] = useState(false);
  const [displayUpdateAvatarForm, setDisplayUpdateAvatarForm] = useState(false);
  const [displayUpdateBgImgForm, setDisplayUpdateBgImgForm] = useState(false);

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
          <form className="display-container">

            <label className="update-form-label">
              Update name
              <input className="update-form-input" type="text" name="name" required />
            </label>

            <input className="update-form-submit" type="submit" value="Change" />

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
          <form className="display-container">
            <label className="update-form-label">
              New password
              <input className="update-form-input" type="password" name="password" required/>

            </label>
            <label className="update-form-label">
              Confirm password
              <input className="update-form-input" type="password" name="password-confirmation" required/>
            </label>

            <input className="update-form-submit" type="submit" value="Change" />

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

              <input type="file" className="hidden-input" />
            </label>

            <img src={currentUser.avatar_url} alt="" className="user-avatar-in-settings"/>

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

              <input type="file" className="hidden-input" />
            </label>

            <img src={currentUser.background_image_url} alt="" className="user-bg-img-in-settings"/>

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
