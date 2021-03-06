import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faVaadin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return(

    <div className="Sidebar">
      <h1>
        <FontAwesomeIcon icon={faVaadin}/> Virtuoso
      </h1>

      <ul>
        <li className='NavLink'>
          <Link to="/" className="unstyle-link">
            <FontAwesomeIcon icon={faHome}/> Home
          </Link>
        </li>
        <li className='NavLink'>
          <Link to="/profile" className="unstyle-link">
            <FontAwesomeIcon icon={faUserCircle}/> Profile
          </Link>
        </li>
        <li className='NavLink'>
          <Link to="/friend-requests" className="unstyle-link">
            <FontAwesomeIcon icon={faUserFriends}/> Friends Requests
          </Link>
        </li>
        <li className='NavLink'>
          <Link to="/setting" className="unstyle-link">
            <FontAwesomeIcon icon={faScrewdriverWrench}/> Settings
          </Link>
        </li>
      </ul>
    </div>
  )
}

export { Sidebar }
