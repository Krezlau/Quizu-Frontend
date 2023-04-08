import { useState } from "react";
import { loginUser, useAuthDispatch } from "../store/auth-actions";
import { authActions } from "../store/auth-slice";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const dispatch = useAuthDispatch();

  const login = (email: string, password: string) => {
    dispatch(loginUser(email, password, setIsLoading));
  };

  const logout = () => {
    dispatch(authActions.logout());
  };

  return { login: login, isLoading: isLoading, logout: logout };
};

export default useHttp;
