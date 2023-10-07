interface IQuiz {
  id: string;
  title: string;
  description: string;
  authorName: string;
  authorId: string;
  likesCount: number;
  playsCount: number;
  tagNames: string[];
  commentsCount: number;
  isLikedByUser: boolean;
  isAlreadyPlayed: boolean;
}

export default IQuiz;

