import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IUserProfile from "../types/IUserProfile";
import useHttp from "./useHttp";

const useFetchUserDetails = () => {
  const { userId } = useParams<{ userId?: string }>();
  const { isLoading, fetchUserInfo } = useHttp();
  const [user, setUser] = useState<IUserProfile>();

  useEffect(() => {
    if (userId) {
      fetchUserInfo(userId).then((r) => {
        if (r) {
          setUser(r);
        }
      });
    }
  }, []);

  return { isLoading, user };
};

export default useFetchUserDetails;
