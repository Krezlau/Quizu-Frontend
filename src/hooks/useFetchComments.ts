import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IComment from "../types/IComment";
import useHttp from "./useHttp";

const useFetchComments = () => {
  const { quizId } = useParams<{ quizId?: string }>();
  const { isLoading, fetchComments } = useHttp();
  const [comments, setComments] = useState<IComment[]>([]);
  const [page, setPage] = useState(2);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  useEffect(() => {
    if (quizId) {
      fetchComments(quizId, 1, 5).then((r) => {
        setComments(r.queryResult);
        if (r.pageCount === 1 || r.pageCount === 0) setIsAllLoaded(true);
      });
    }
  }, [fetchComments]);

  const loadMore = () => {
    if (quizId) {
      fetchComments(quizId, page, 5).then((r) => {
        setComments((state) => state.concat(r.queryResult));
        if (r.pageCount === page) setIsAllLoaded(true);
      });
      setPage((page) => page + 1);
    }
  };

  return { comments, loadMore, isLoading, setComments, isAllLoaded };
};

export default useFetchComments;
