import {Link} from "react-router-dom";

const MainMenuDropdown: React.FC<{isPlayActive: boolean}> = (props) => {
  return <div className="dropdown">
    <label tabIndex={0} className={`btn btn-ghost normal-case text-3xl ${props.isPlayActive ? "text-black" : "text-white"} dark:text-white`}>Quizu</label>
    <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-primary rounded-box w-52 mt-4">
      <li><Link to="/home">Main page</Link></li>
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/explore">Explore</Link></li>
      <li><Link to="/new-quiz">Create new quiz</Link></li>
      <li><Link to="/user/{id}/quizzes">My quizzes</Link></li>
      <li><Link to="/user/{id}/stats">My stats</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
}

export default MainMenuDropdown;
