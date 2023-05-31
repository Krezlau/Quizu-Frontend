import MainMenuDropdown from "./MainMenuDropdown";
import Search from "./Search";
import ThemeChanger from "./ThemeChanger";
import AvatarDropdown from "./AvatarDropdown";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import { Link } from "react-router-dom";
import PlayTopBar from "../Play/PlayTopBar";

const NavigationBar = () => {
  const isLoggedIn = useSelector((state: IRootState) => state.auth.isLoggedIn);
  const isPlayActive = useSelector((state: IRootState) => state.play.isActive);

  return (
    <div className={`navbar fixed top-0 z-40 flex justify-between w-full gap-4 text-white h-12 ${isPlayActive ? "" : "bg-purple-700"}`}>
      <MainMenuDropdown />
      {!isPlayActive && <Search />}
      {!isPlayActive && <ThemeChanger />}
      {isPlayActive && <PlayTopBar />}
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
