import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

const Setting = () => {
  const currentUser = JSON.parse(localStorage.user);

  const [displayProfileUpdate, setDisplayProfileUpdate] = useState(false);
  const [displayAccountUpdate, setDisplayAccountUpdate] = useState(false);

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
          <div className="user-profile-display">
            <h1>Update profile</h1>
            <div className="update-section">
              <h1>Avatar</h1>
              <button className="unstyle-button update-button">Update</button>
            </div>
            <img src={currentUser.avatar_url} alt="" className="user-avatar-in-settings"/>
            <div className="update-section">
              <h1>Background Image</h1>
              <button className="unstyle-button update-button">Update</button>
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
          <div className="user-account-display">
            <h1>Update Account</h1>

            <div className="update-section">
              <h1><FontAwesomeIcon icon={faUserEdit}/> Change username</h1>
              <button className="unstyle-button update-button">Update</button>
            </div>

            <div className="update-section">
              <h1><FontAwesomeIcon icon={faKey}/> Change password</h1>
              <button className="unstyle-button update-button">Update</button>
            </div>

            <button className="close-form-button" onClick={() => setDisplayAccountUpdate(false)}>
              <FontAwesomeIcon icon={faClose}/>
            </button>
          </div>
        </div>
      }
    </div>  
  )
}

export { Setting }
