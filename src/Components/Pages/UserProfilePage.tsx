import SectionHeader from "../UI/SectionHeader";
import QuizCarousel from "../Quizzes/QuizCarousel";
import ProfilePageHeading from "../UserProfile/ProfilePageHeading";
import UserInfo from "../UserProfile/UserInfo";

const UserProfilePage = () => {
  return <>
    <ProfilePageHeading />
    <SectionHeader text={"About"} />
    <div className="card bg-neutral p-4 px-12">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam elementum vehicula. Curabitur fringilla orci turpis, at consectetur ipsum condimentum eu. Donec eu fermentum lacus, vel elementum dolor. In cursus ex vel eleifend sodales. Nam posuere urna nec ante ullamcorper eleifend vitae non turpis. Nulla neque risus, ullamcorper a tempor nec, molestie ut nunc. Donec lacus libero, pulvinar sit amet lacinia sit amet, placerat vel lectus. Donec odio nisl, aliquam id sagittis vel, rhoncus sit amet odio. Nulla mollis sit amet mauris eget consequat. Mauris aliquam, erat ut convallis posuere, arcu augue vestibulum quam, a iaculis neque lacus quis ante.</p>
    </div>
    <UserInfo />
    <SectionHeader text={"Most Popular Quizzes"} />
    <QuizCarousel quizzes={[]}/>
  </>
}

export default UserProfilePage;
