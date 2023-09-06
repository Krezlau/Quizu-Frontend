import NavigationBar from "./Components/Navigation/NavigationBar";
import PageLayout from "./Components/Pages/PageLayout";
import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import UserProfilePage from "./Components/Pages/UserProfilePage";
import LoginPage from "./Components/Pages/LoginPage";
import UserQuizzesPage from "./Components/Pages/UserQuizzesPage";
import SignupPage from "./Components/Pages/SignupPage";
import EditProfilePage from "./Components/Pages/EditProfilePage";
import QuizDetailsPage from "./Components/Pages/QuizDetailsPage";
import ChangePasswordPage from "./Components/Pages/ChangePasswordPage";
import CreateNewQuizPage from "./Components/Pages/CreateNewQuizPage";
import ManageQuizPage from "./Components/Pages/ManageQuizPage";
import QuizManageInfoPage from "./Components/Pages/QuizManageInfoPage";
import { useSelector } from "react-redux";
import { IRootState } from "./store";
import { clearAuthStorage, retrieveStoredToken } from "./store/auth-actions";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth-slice";
import NotLoggedInPage from "./Components/Pages/NotLoggedInPage";
import Alert from "./Components/UI/Alert";
import ForbiddenPage from "./Components/Pages/ForbiddenPage";
import PlayFetchPage from "./Components/Pages/PlayFetchPage";
import PlayPage from "./Components/Pages/PlayPage";
import { playActions } from "./store/play-slice";
import PlayResultPage from "./Components/Pages/PlayResultPage";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import InDevelopmentPage from "./Components/Pages/InDevelopmentPage";
import AboutPage from "./Components/Pages/AboutPage";
import SearchPage from "./Components/Pages/SearchPage";


function App() {
  const theme = useSelector((state: IRootState) => state.theme.theme);
  const isLoggedIn = useSelector((state: IRootState) => state.auth.isLoggedIn);
  const isPlaying = useSelector((state: IRootState) => state.play.isActive);
  const dispatch = useDispatch();
  // get path with hook
  const location = useLocation();
  const path = location.pathname;

  if (theme !== "dark") {
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "mytheme");
  }

  // if path is not /{quizId}/play, then dispatch stop play
  useEffect(() => {
    // match regex for /{quizId}/play
    // quizId is a guid
    const regex = new RegExp(/\/[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}\/play/);
    if (!regex.test(path) && isPlaying && path !== "/play/results") {
      // TODO send request with user answers
      dispatch(playActions.stopPlaying());
    }
  }, [path, dispatch]);

  useEffect(() => {
    retrieveStoredToken().then((tokenData) => {
      if (!tokenData || !tokenData.token) {
        clearAuthStorage();
        dispatch(authActions.logout());
        return;
      }

      dispatch(
        authActions.login({
          username: tokenData.username,
          userId: tokenData.userId,
          accessToken: tokenData.token,
        })
      );
    });
  }, [dispatch]);

  return (
    <>
      <NavigationBar />
      <PageLayout>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/about" />}
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/user/:userId/profile" element={<UserProfilePage />} />
          <Route path="/user/:userId/quizzes" element={<UserQuizzesPage />} />
          <Route path="/user/:userId/edit" element={<EditProfilePage />} />
          <Route
            path="/quizzes/:quizId/details"
            element={<QuizDetailsPage />}
          />
          <Route
            path="/quizzes/:quizId/manage-info"
            element={<QuizManageInfoPage />}
          />
          <Route path="/quizzes/:quizId/manage" element={<ManageQuizPage />} />
          <Route
            path="/quizzes/:quizId/start-playing"
            element={<PlayFetchPage />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage />}
          />
          <Route
            path="/signup"
            element={isLoggedIn ? <Navigate to="/home" /> : <SignupPage />}
          />
          <Route
            path="/change-password"
            element={isLoggedIn ? <ChangePasswordPage /> : <NotLoggedInPage />}
          />
          <Route
            path="/new-quiz"
            element={isLoggedIn ? <CreateNewQuizPage /> : <NotLoggedInPage />}
          />
          <Route path="/:quizId/play" element={<PlayPage />} />
          <Route path="/play/results" element={<PlayResultPage />} />
          <Route path="/forbidden" element={<ForbiddenPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/explore" element={<InDevelopmentPage />} />
          <Route path="/user/:userId/stats" element={<InDevelopmentPage />} />
          <Route path="/user/:userId/settings" element={<InDevelopmentPage />} />
          <Route path="/play" element={<InDevelopmentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageLayout>
      <Alert />
    </>
  );
}

export default App;
