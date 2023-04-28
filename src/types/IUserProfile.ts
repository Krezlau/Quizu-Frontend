interface IUserProfile {
  id: string,
  username: string,
  email: string,
  name: string,
  surname: string, 
  joinedAt: Date,
  location: string,
  quizzesCount: number,
  followersCount: number,
  about: string,
}

export default IUserProfile;
