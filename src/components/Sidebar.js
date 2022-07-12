import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faVaadin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return(

    <div className="Sidebar">
      <h1>
        <FontAwesomeIcon icon={faVaadin}/> Virtuoso
      </h1>

      <ul>
        <li className='NavLink'>
          <FontAwesomeIcon icon={faHome}/> Home
        </li>
        <li className='NavLink'>
          <FontAwesomeIcon icon={faUserCircle}/> Profile
        </li>
        <li className='NavLink'>
          <FontAwesomeIcon icon={faUserFriends}/> Friends
        </li>
        <li className='NavLink'>
          <FontAwesomeIcon icon={faScrewdriverWrench}/> Settings
        </li>
      </ul>
    </div>
  )
}

export { Sidebar }
