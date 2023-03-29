import MainMenuDropdown from "./MainMenuDropdown";
import Search from "./Search";
import ThemeChanger from "./ThemeChanger";
import AvatarDropdown from "./AvatarDropdown";

const NavigationBar = () => {
  return (
    <div className="navbar fixed top-0 z-40 bg-primary flex justify-between w-full gap-4 text-white bg-purple-700">
      <MainMenuDropdown/>
      <Search/>
      <ThemeChanger/>
      <AvatarDropdown/>
    </div>
  )
}

export default NavigationBar;
