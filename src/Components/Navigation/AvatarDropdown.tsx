import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { IRootState } from "../../store";

const AvatarDropdown = () => {
  const { logout } = useHttp();
  const navigate = useNavigate();
  const username = useSelector((state: IRootState) => state.auth.username);
  const userId = useSelector((state: IRootState) => state.auth.userId);

  const logoutHandler = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-ghost btn-circle avatar placeholder bg-slate-700"
      >
        <div className="w-10 rounded-full">
          <span className="text-xl">
            {username && username.length > 0 ? username[0] : "?"}
          </span>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
      >
        <li>
          <Link to={`/user/${userId}/profile`}>Profile</Link>
        </li>
        <li>
          <Link to={`/user/${userId}/profile`}>Settings</Link>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default AvatarDropdown;
