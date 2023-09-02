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
    <div className={`navbar fixed top-0 z-10 flex justify-between w-full gap-4 text-white h-12 ${isPlayActive ? "" : "bg-primary"}`}>
      <MainMenuDropdown isPlayActive={isPlayActive}/>
      {!isPlayActive && <Search />}
      {isPlayActive && <PlayTopBar />}
      <div className="flex gap-4">
      {!isPlayActive && <ThemeChanger />}
      {isLoggedIn ? (
        <AvatarDropdown />
      ) : (
        <Link to="login" className="btn btn-neutral">
          Login
        </Link>
      )}
      </div>
    </div>
  );
};

export default NavigationBar;
