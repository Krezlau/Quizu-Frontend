import axios, { AxiosError } from "axios";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { NavigateFunction } from "react-router-dom";
import { IRootState } from "../store";
import { loginUser, logoutUser, useAuthDispatch } from "../store/auth-actions";
import IQuiz from "../types/IQuiz";
import IQuizDetails from "../types/IQuizDetails";
import IResponse from "../types/IResponse";
import useAlert from "./useAlert";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const dispatch = useAuthDispatch();
  const token = useSelector((state: IRootState) => state.auth.accessToken);
  const showAlert = useAlert();

  const showError = (e: AxiosError) => {
    try {
      const response: IResponse = e.response!.data as IResponse;
      showAlert("error", response.errorMessages[0]);
    } catch (e) {
      showAlert("error", "Something unexpected happened.");
    }
  };

  const login = (email: string, password: string) => {
    dispatch(loginUser(email, password, setIsLoading, showError));
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
      .then(() => {
        showAlert("success", "Successfully registered. You can now log in.");
        console.log("success");
      })
      .catch((e: AxiosError) => {
        showError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchQuizzes = useCallback(async (page: number, pageSize: number) => {
    setIsLoading(true);
    const quizzes: IQuiz[] = await axios
      .get(
        `https://localhost:7202/api/Quizzes?PageNumber=${page}&PageSize=${pageSize}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((r) => {
        return r.data.result.queryResult;
      })
      .catch((e: AxiosError) => {
        showError(e);
        setIsLoading(false);
      });
    setIsLoading(false);
    return quizzes;
  }, []);

  const addQuiz = (title: string, navigate: NavigateFunction) => {
    setIsLoading(true);
    axios
      .post(
        `https://localhost:7202/api/Quizzes`,
        {
          title,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((r) => {
        showAlert("success", "Successfully created new quiz.");
        navigate(`/quizzes/${r.data.result}/details`)
      })
      .catch((e: AxiosError) => {
        showError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchQuizDetails = useCallback(async (id: string) => {
    setIsLoading(true);
    const quiz: IQuizDetails = await axios
      .get(`https://localhost:7202/api/Quizzes/${id}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((r) => {
        return r.data.result;
      })
      .catch((e: AxiosError) => {
        showError(e);
        setIsLoading(false);
      });
    setIsLoading(false);
    return quiz;
  }, []);

  const updateQuizInfo = (
    quizId: string,
    description: string,
    about: string,
    title: string
  ) => {
    setIsLoading(true);

    axios
      .put(
        `https://localhost:7202/api/Quizzes/${quizId}`,
        {
          title,
          description,
          about,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        showAlert("success", "Successfully changed quiz info.");
      })
      .catch((e: AxiosError) => {
        showError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteQuiz = (quizId: string, navigate: NavigateFunction) => {
    setIsLoading(true);

    axios
      .delete(
        `https://localhost:7202/api/Quizzes/${quizId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        showAlert("success", "Successfully deleted");
        navigate("/home")
      })
      .catch((e: AxiosError) => {
        showError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const checkIfTitleAvailable = (value: string, setMessage: (string) => void) => {
    setIsLoading(true);

    axios
      .get(
        `https://localhost:7202/api/Quizzes/available?title=${value}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((r) => {
        if (r.data.result)
        setMessage("");
        if (!r.data.result)
        setMessage("Title not available.");
      })
      .catch((e: AxiosError) => {
        setMessage("Title not valid.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return {
    login: login,
    isLoading: isLoading,
    logout: logout,
    signUp: signUp,
    fetchQuizzes,
    addQuiz,
    fetchQuizDetails,
    updateQuizInfo,
    deleteQuiz,
    checkIfTitleAvailable,
  };
};

export default useHttp;
