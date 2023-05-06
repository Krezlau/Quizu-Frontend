interface IComment {
  id: string;
  createdAt: Date;
  content: string;
  authorId: string;
  authorName: string;
}

export default IComment;
