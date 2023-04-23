import { AnyAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from ".";
import { authActions } from "./auth-slice";

const calculateRemainingTime = (expirationTime: string | null) => {
  if (expirationTime === null) {
    return 0;
  }
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  return adjExpirationTime - currentTime;
};

export const clearAuthStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
  localStorage.removeItem("userId");
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("createdAt");
};

const storeAuthData = (token: string, userId: string, username: string) => {
  const currentTime = new Date();
  currentTime.setHours(currentTime.getHours() + 1);
  console.log(currentTime);

  localStorage.setItem("token", token);
  localStorage.setItem("expirationTime", currentTime.toISOString());
  localStorage.setItem("userId", userId);
  localStorage.setItem("username", username);
};

export const storeNewToken = (token: string) => {
  const currentTime = new Date();
  const expirationTime = new Date(
    currentTime.getTime() + 3600000
  ).toISOString();
  localStorage.setItem("token", token);
  localStorage.setItem("expirationTime", expirationTime);
};

export const retrieveStoredToken = async () => {
  let storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");
  const storedUserId = localStorage.getItem("userId");
  const storedUsername = localStorage.getItem("username");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  console.log("trying to retrieve token");
  if (remainingTime <= 0 || !storedToken || !storedUsername || !storedUserId) {
    if (!storedToken || !storedUsername || !storedUserId) {
      clearAuthStorage();
      return null;
    }
    try {
      storedToken = await axios
        .post(
          "https://localhost:7202/api/Auth/refresh",
          { accessToken: storedToken },
          { headers: { "Content-Type": "application/json" }, withCredentials : true }
        )
        .then((r) => {
          storeNewToken(r.data.result);
          return r.data.result;
        });
    } catch (e) {
      return null;
    }
  }
  return {
    token: storedToken,
    duration: remainingTime,
    userId: storedUserId,
    username: storedUsername,
  };
};

export const loginUser = (
  email: string,
  password: string,
  setIsLoading: (newState: boolean) => void,
  showError: (e: AxiosError) => void,
) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    setIsLoading(true);

    axios
      .post(
        "https://localhost:7202/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((r) => {
        dispatch(
          authActions.login({
            userId: r.data.result.userId,
            username: r.data.result.username,
            accessToken: r.data.result.accessToken,
          })
        );
        storeAuthData(
          r.data.result.accessToken,
          r.data.result.userId,
          r.data.result.username
        );
      })
      .catch((e: AxiosError) => {
        showError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
};

export const logoutUser = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    clearAuthStorage();
    dispatch(authActions.logout());
  };
};

export const useAuthDispatch: () => AppDispatch = useDispatch;
