import axios, { AxiosError } from "axios";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { NavigateFunction } from "react-router-dom";
import { IRootState } from "../store";
import {
  loginUser,
  logoutUser,
  refreshToken,
  useAuthDispatch,
} from "../store/auth-actions";
import { authActions } from "../store/auth-slice";
import IComment from "../types/IComment";
import IPageResponse from "../types/IPageResponse";
import IPlayQuestionsResponse from "../types/IPlayQuestionsResponse";
import IQuestion from "../types/IQuestion";
import IQuiz from "../types/IQuiz";
import IQuizDetails from "../types/IQuizDetails";
import IResponse from "../types/IResponse";
import IUserProfile from "../types/IUserProfile";
import useAlert from "./useAlert";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const dispatch = useAuthDispatch();
  const token = useSelector((state: IRootState) => state.auth.accessToken);
  const showAlert = useAlert();

  const showError = (e: AxiosError) => {
    if (e.response && e.response.status && e.response.status === 401) {
      showAlert("error", "Session has expired. Please log in again.");
      dispatch(authActions.logout());
      return;
    }
    if (e.response && e.response.status && e.response.status === 403) {
      showAlert("error", "Action forbidden. You shouldn't be here!");
      return;
    }

    try {
      const response: IResponse = e.response!.data as IResponse;
      showAlert("error", response.errorMessages[0]);
    } catch (e) {
      showAlert("error", "Something unexpected happened.");
    }
  };

  const handleErrorResponse = (
    e: AxiosError,
    doNotTryAgain: boolean | undefined,
    tryAgainFunc: (outcome: string) => void
  ) => {
    const isAuthError =
      e.response && e.response.status && e.response.status === 401;
    if (isAuthError && !doNotTryAgain) {
      console.log("its auth error and try again is on.");
      refresh().then((outcome) => {
        if (outcome) {
          tryAgainFunc(outcome);
          return;
        }
        showError(e);
      });
      return;
    }
    showError(e);
  };

  const refresh = async () => {
    const newToken = await axios
      .post(
        "https://localhost:7202/api/Auth/refresh",
        { accessToken: token },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((r) => {
        return r.data.result;
      })
      .catch((e: AxiosError) => {
        return null;
      });
    if (!newToken) return null;
    dispatch(refreshToken(newToken));
    return newToken;
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

  const fetchQuizzes = useCallback(
    async (page: number, pageSize: number, userId?: string) => {
      setIsLoading(true);
      const quizzes: IPageResponse<IQuiz> = await axios
        .get(
          `https://localhost:7202/api/Quizzes${
            userId ? "/byUserId/" + userId : ""
          }?PageNumber=${page}&PageSize=${pageSize}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((r) => {
          return r.data.result;
        })
        .catch((e: AxiosError) => {
          showError(e);
          setIsLoading(false);
        });
      setIsLoading(false);
      return quizzes;
    },
    []
  );

  const addQuiz = (
    title: string,
    navigate: NavigateFunction,
    doNotTryAgain?: boolean,
    newToken?: string
  ) => {
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
            Authorization: `Bearer ${newToken ? newToken : token}`,
          },
        }
      )
      .then((r) => {
        showAlert("success", "Successfully created new quiz.");
        navigate(`/quizzes/${r.data.result}/details`);
      })
      .catch((e: AxiosError) => {
        handleErrorResponse(e, doNotTryAgain, (o) =>
          addQuiz(title, navigate, true, o)
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchQuizDetails = useCallback(
    async (id: string) => {
      setIsLoading(true);
      const quiz: IQuizDetails = await axios
        .get(`https://localhost:7202/api/Quizzes/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
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
    },
    [token]
  );

  const updateQuizInfo = (
    quizId: string,
    description: string,
    about: string,
    title: string,
    doNotTryAgain?: boolean,
    newToken?: string
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
            Authorization: `Bearer ${newToken ? newToken : token}`,
          },
        }
      )
      .then(() => {
        showAlert("success", "Successfully changed quiz info.");
      })
      .catch((e: AxiosError) => {
        handleErrorResponse(e, doNotTryAgain, (o) =>
          updateQuizInfo(quizId, description, about, title, true, o)
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteQuiz = (
    quizId: string,
    navigate: NavigateFunction,
    doNotTryAgain?: boolean,
    newToken?: string
  ) => {
    setIsLoading(true);

    axios
      .delete(`https://localhost:7202/api/Quizzes/${quizId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken ? newToken : token}`,
        },
      })
      .then(() => {
        showAlert("success", "Successfully deleted");
        navigate("/home");
      })
      .catch((e: AxiosError) => {
        handleErrorResponse(e, doNotTryAgain, (o) =>
          deleteQuiz(quizId, navigate, true, o)
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const checkIfTitleAvailable = (
    value: string,
    setMessage: (message: string) => void
  ) => {
    setIsLoading(true);

    axios
      .get(`https://localhost:7202/api/Quizzes/available?title=${value}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((r) => {
        if (r.data.result) setMessage("");
        if (!r.data.result) setMessage("Title not available.");
      })
      .catch((e: AxiosError) => {
        setMessage("Title not valid.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchUserInfo = useCallback(async (userId: string) => {
    setIsLoading(true);
    const user: IUserProfile = await axios
      .get(`https://localhost:7202/api/Users/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => {
        return r.data.result;
      })
      .catch((e: AxiosError) => {
        showError(e);
        setIsLoading(false);
      });
    setIsLoading(false);
    return user;
  }, []);

  const checkIfUsernameAvailable = (
    value: string,
    setMessage: (message: string) => void
  ) => {
    setIsLoading(true);

    axios
      .get(`https://localhost:7202/api/Users/available?username=${value}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((r) => {
        if (r.data.result) setMessage("");
        if (!r.data.result) setMessage("Title not available.");
      })
      .catch((e: AxiosError) => {
        setMessage("Title not valid.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateProfileInfo = (
    userId: string,
    username: string,
    name: string,
    surname: string,
    location: string,
    about: string,
    doNotTryAgain?: boolean,
    newToken?: string
  ) => {
    setIsLoading(true);

    axios
      .put(
        `https://localhost:7202/api/Users/${userId}`,
        {
          username,
          name,
          surname,
          location,
          about,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newToken ? newToken : token}`,
          },
        }
      )
      .then(() => {
        showAlert("success", "Successfully changed profile info.");
      })
      .catch((e: AxiosError) => {
        handleErrorResponse(e, doNotTryAgain, (o) =>
          updateProfileInfo(
            userId,
            username,
            name,
            surname,
            location,
            about,
            true,
            o
          )
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteUserAccount = (
    userId: string,
    navigate: NavigateFunction,
    doNotTryAgain?: boolean,
    newToken?: string
  ) => {
    setIsLoading(true);

    axios
      .delete(`https://localhost:7202/api/Users/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken ? newToken : token}`,
        },
      })
      .then(() => {
        showAlert("success", "Successfully deleted");
        dispatch(authActions.logout());
        navigate("/login");
      })
      .catch((e: AxiosError) => {
        handleErrorResponse(e, doNotTryAgain, (o) =>
          deleteUserAccount(userId, navigate, true, o)
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const changeUserPassword = (
    userId: string,
    currentPassword: string,
    newPassword: string,
    navigate: NavigateFunction,
    doNotTryAgain?: boolean,
    newToken?: string
  ) => {
    setIsLoading(true);
    axios
      .post(
        `https://localhost:7202/api/Auth/change-password`,
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newToken ? newToken : token}`,
          },
        }
      )
      .then((r) => {
        showAlert("success", "Successfully changed password.");
        navigate(`/user/${userId}/profile`);
      })
      .catch((e: AxiosError) => {
        handleErrorResponse(e, doNotTryAgain, (o) =>
          changeUserPassword(
            userId,
            currentPassword,
            newPassword,
            navigate,
            true,
            o
          )
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const addNewQuestion = (
    question: IQuestion,
    doNotTryAgain?: boolean,
    newToken?: string
  ) => {
    setIsLoading(true);
    axios
      .post(
        `https://localhost:7202/api/QuestionsAnswers`,
        {
          ...question,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newToken ? newToken : token}`,
          },
        }
      )
      .then((r) => {
        showAlert("success", "Question added.");
      })
      .catch((e: AxiosError) => {
        handleErrorResponse(e, doNotTryAgain, (o) =>
          addNewQuestion(question, true, o)
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchQuestions = useCallback(
    async (quizId: string, doNotTryAgain?: boolean, newToken?: string) => {
      if (token) {
        setIsLoading(true);
        const questions: IQuestion[] = await axios
          .get(`https://localhost:7202/api/QuestionsAnswers/quiz/${quizId}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${newToken ? newToken : token}`,
            },
          })
          .then((r) => {
            return r.data.result;
          })
          .catch((e: AxiosError) => {
            handleErrorResponse(e, doNotTryAgain, (o) =>
              fetchQuestions(quizId, true, o)
            );
          });
        setIsLoading(false);
        return questions;
      }
    },
    [token]
  );

  const deleteQuestion = async (
    questionId: string,
    doNotTryAgain?: boolean,
    newToken?: string
  ) => {
    setIsLoading(true);

    const outcome = await axios
      .delete(`https://localhost:7202/api/QuestionsAnswers/${questionId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken ? newToken : token}`,
        },
      })
      .then(() => {
        showAlert("success", "Successfully deleted.");
        return true;
      })
      .catch((e: AxiosError) => {
        handleErrorResponse(e, doNotTryAgain, (o) =>
          deleteQuestion(questionId, true, o)
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
    return outcome;
  };

  const likeQuiz = async (
    quizId: string,
    doNotTryAgain?: boolean,
    newToken?: string
  ) => {
    setIsLoading(true);
    const response = await axios
      .post(
        `https://localhost:7202/api/Likes/${quizId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newToken ? newToken : token}`,
          },
        }
      )
      .then((r) => {
        return true;
      })
      .catch((e: AxiosError) => {
        handleErrorResponse(e, doNotTryAgain, (o) =>
          likeQuiz(quizId, doNotTryAgain, o)
        );
      })
      .finally(() => {
        setIsLoading(false);
      });

    return response;
  };

  const unlikeQuiz = async (
    quizId: string,
    doNotTryAgain?: boolean,
    newToken?: string
  ) => {
    setIsLoading(true);
    const response = await axios
      .delete(`https://localhost:7202/api/Likes/${quizId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken ? newToken : token}`,
        },
      })
      .then((r) => {
        return true;
      })
      .catch((e: AxiosError) => {
        handleErrorResponse(e, doNotTryAgain, (o) =>
          likeQuiz(quizId, doNotTryAgain, o)
        );
      })
      .finally(() => {
        setIsLoading(false);
      });

    return response;
  };

  const fetchComments = useCallback(
    async (quizId: string, page: number, pageSize: number) => {
      setIsLoading(true);
      const comments: IPageResponse<IComment> = await axios
        .get(
          `https://localhost:7202/api/Comments/quiz/${quizId}
          ?PageNumber=${page}&PageSize=${pageSize}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((r) => {
          return r.data.result;
        })
        .catch((e: AxiosError) => {
          showError(e);
          setIsLoading(false);
        });
      setIsLoading(false);
      return comments;
    },
    []
  );

  const addNewComment = async (
    content: string,
    quizId: string,
    doNotTryAgain?: boolean,
    newToken?: string
  ) => {
    setIsLoading(true);
    const outcome: string = await axios
      .post(
        `https://localhost:7202/api/Comments`,
        {
          content,
          quizId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newToken ? newToken : token}`,
          },
        }
      )
      .then((r) => {
        showAlert("success", "Comment added.");
        return r.data.result;
      })
      .catch((e: AxiosError) => {
        handleErrorResponse(e, doNotTryAgain, (o) =>
          addNewComment(content, quizId, true, o)
        );
        return null;
      })
      .finally(() => {
        setIsLoading(false);
      });

    return outcome;
  };

  const deleteComment = async (
    commentId: string,
    doNotTryAgain?: boolean,
    newToken?: string
  ) => {
    setIsLoading(true);

    const outcome: boolean = await axios
      .delete(`https://localhost:7202/api/Comments/${commentId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken ? newToken : token}`,
        },
      })
      .then(() => {
        showAlert("success", "Comment deleted.");
        return true;
      })
      .catch((e: AxiosError) => {
        handleErrorResponse(e, doNotTryAgain, (o) =>
          deleteComment(commentId, true, o)
        );
        return false;
      })
      .finally(() => {
        setIsLoading(false);
      });

    return outcome;
  };

  const fetchPlayQuestions = useCallback(
    async (quizId: string) => {
      if (token) {
        setIsLoading(true);
        const response: IPlayQuestionsResponse = await axios
          .get(`https://localhost:7202/api/Play/${quizId}`, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((r) => {
            return r.data.result;
          })
          .catch((e: AxiosError) => {
            showError(e);
          });
        setIsLoading(false);
        return response;
      }
    },
    [token]
  );

  const postPlayAnswers = async (
    quizId: string,
    score: number,
    answers: string[],
    timeTaken_s: number[],
    questionIds: string[],
    doNotTryAgain?: boolean,
    newToken?: string
  ) => {
    setIsLoading(true);

    const outcome: number = await axios
      .post(`https://localhost:7202/api/Play/${quizId}`,
        { score: score.toFixed(0), answerIds: answers, timeTookS: timeTaken_s, questionIds },
        {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken ? newToken : token}`,
        },
      })
      .then((r) => {
        showAlert("success", "Answers submitted successfully");
        return r.data.result;
      })
      .catch((e: AxiosError) => {
        handleErrorResponse(e, doNotTryAgain, (o) =>
          postPlayAnswers(quizId, score, answers, timeTaken_s, questionIds, true, o)
        );
        showAlert("error", "Could not save your answers. Please try again later.");
        return -1;
      })
      .finally(() => {
        setIsLoading(false);
      });

    return outcome;
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
    fetchUserInfo,
    checkIfUsernameAvailable,
    updateProfileInfo,
    deleteUserAccount,
    changeUserPassword,
    addNewQuestion,
    fetchQuestions,
    deleteQuestion,
    likeQuiz,
    unlikeQuiz,
    fetchComments,
    addNewComment,
    deleteComment,
    fetchPlayQuestions,
    postPlayAnswers,
  };
};

export default useHttp;
