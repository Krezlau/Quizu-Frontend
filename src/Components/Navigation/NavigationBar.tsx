import MainMenuDropdown from "./MainMenuDropdown";
import Search from "./Search";
import ThemeChanger from "./ThemeChanger";
import AvatarDropdown from "./AvatarDropdown";

const NavigationBar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between w-screen gap-4 text-white bg-purple-700">
      <MainMenuDropdown/>
      <Search/>
      <ThemeChanger/>
      <AvatarDropdown/>
    </div>
  )
}

export default NavigationBar;
