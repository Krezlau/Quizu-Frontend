import MainMenuDropdown from "./MainMenuDropdown";
import Search from "./Search";
import ThemeChanger from "./ThemeChanger";
import AvatarDropdown from "./AvatarDropdown";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const isLoggedIn = useSelector((state: IRootState) => state.auth.isLoggedIn);

  return (
    <div className="navbar fixed top-0 z-40 flex justify-between w-full gap-4 text-white bg-purple-700">
      <MainMenuDropdown />
      <Search />
      {/*<ThemeChanger />*/}
      {isLoggedIn ? (
        <AvatarDropdown />
      ) : (
        <Link to="login" className="btn btn-neutral">
          Login
        </Link>
      )}
    </div>
  );
};

export default NavigationBar;
