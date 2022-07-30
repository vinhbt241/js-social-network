import { Sidebar } from "./Sidebar"

const Setting = () => {
  const currentUser = JSON.parse(localStorage.user);

  return(
    <div className="Setting normal-page">
      <Sidebar />

      <button>
        Update profile
      </button>

      <button>
        Update account
      </button>

      <div className="user-profile-display">
        <h1>Update profile</h1>

        <div className="update-profile-section">
          <h2>Avatar</h2>
          <button>Update</button>
        </div>

        <img src={currentUser.avatar_url} alt="" className="user-avatar-in-settings"/>

        <div className="update-profile-section">
          <h2>Background Image</h2>
          <button>Update</button>
        </div>

        <img src={currentUser.background_image_url} alt="" className="user-bg-img-in-settings"/>
      </div>
    </div>  
  )
}

export { Setting }
