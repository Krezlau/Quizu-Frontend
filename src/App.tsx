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

function App() {
  const isLoggedIn = useSelector((state: IRootState) => state.auth.isLoggedIn);
  const isPlaying = useSelector((state: IRootState) => state.play.isActive);
  const dispatch = useDispatch();
  // get path with hook 
  const location = useLocation();
  const path = location.pathname;
  console.log(path);

  // if path is not /{quizId}/play, then dispatch stop play
  useEffect(() => {
    // match regex for /{guid}/play
    const regex = new RegExp(/\/[a-zA-Z0-9]{8}\/play/);
    if (!regex.test(path) && isPlaying) {
      // TODO send request with user answers
      dispatch(playActions.stopPlaying());
      console.log("xd"); 
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
            element={
              <>
                <h1 className="text-3xl font-bold underline dark:text-amber-400">
                  Hello world!
                </h1>
              </>
            }
          />
          <Route
            path="/home"
            element={isLoggedIn ? <HomePage /> : <Navigate to="/about" />}
          />
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
          <Route path="/quizzes/:quizId/play" element={<PlayFetchPage />} />
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
          <Route path="/forbidden" element={<ForbiddenPage />} />
        </Routes>
      </PageLayout>
      <Alert />
    </>
  );
}

export default App;
