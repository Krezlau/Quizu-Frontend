import axios, { AxiosError } from "axios";
import { useCallback, useState } from "react";
import { loginUser, logoutUser, useAuthDispatch } from "../store/auth-actions";
import IQuiz from "../types/IQuiz";

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

  const fetchQuizzes = useCallback((page: number, pageSize: number) => {
    setIsLoading(true);
    let quizzes: IQuiz[] = [];
    axios
      .get(
        `https://localhost:7202/api/Quizzes?PageNumber=${page}&PageSize=${pageSize}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((r) => {
        quizzes = r.data.result;
      })
      .catch((e: AxiosError) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return quizzes;
  }, []);

  return {
    login: login,
    isLoading: isLoading,
    logout: logout,
    signUp: signUp,
    fetchQuizzes,
  };
};

export default useHttp;
