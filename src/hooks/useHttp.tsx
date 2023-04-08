import axios, { AxiosError } from "axios";
import { useState } from "react";
import { loginUser, logoutUser, useAuthDispatch } from "../store/auth-actions";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const dispatch = useAuthDispatch();

  const login = (email: string, password: string) => {
    dispatch(loginUser(email, password, setIsLoading));
  };

  const logout = () => {
    dispatch(logoutUser());
  };

  const signUp = (
    username: string,
    email: string,
    password: string,
    repeatPassword: string,
    name: string,
    surname: string,
    location: string
  ) => {
    setIsLoading(true);

    axios
      .post(
        "https://localhost:7202/api/auth/register",
        { username, email, password, repeatPassword, location, name, surname },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((r) => {
        console.log("success");
      })
      .catch((e: AxiosError) => {
        if (e.response && e.response.data) console.log(e.response?.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { login: login, isLoading: isLoading, logout: logout, signUp: signUp };
};

export default useHttp;
