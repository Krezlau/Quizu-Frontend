import {Link} from "react-router-dom";

const AvatarDropdown = () => {
  return <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder bg-slate-700">
      <div className="w-10 rounded-full">
        <span className="text-xl">KJ</span>
      </div>
    </label>
    <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
      <li>
        <Link to="/user/{id}/profile">
          Profile
        </Link>
      </li>
      <li><Link to="/user/{id}/settings">Settings</Link></li>
      <li><Link to="/logout">Logout</Link></li>
    </ul>
  </div>
}

export default AvatarDropdown;
