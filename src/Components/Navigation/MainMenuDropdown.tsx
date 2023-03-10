const MainMenuDropdown = () => {
  return <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost normal-case text-3xl">Quizu</label>
    <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
      <li><a>Main page</a></li>
      <li><a>Search</a></li>
      <li><a>Explore</a></li>
      <li><a>Create new quiz</a></li>
      <li><a>My quizes</a></li>
      <li><a>My stats</a></li>
      <li><a>About</a></li>
    </ul>
  </div>
}

export default MainMenuDropdown;
