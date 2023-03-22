import NavigationBar from "./Components/Navigation/NavigationBar";
import PageLayout from "./Components/Pages/PageLayout";
import React from "react";
import {Route, Routes} from "react-router-dom";
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

function App() {

  return (
    <>
      <NavigationBar/>
      <PageLayout>
        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold underline dark:text-amber-400">
            Hello world!
          </h1>}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/user/:userId/profile" element={<UserProfilePage />}/>
          <Route path="/user/:userId/quizzes" element={<UserQuizzesPage />}/>
          <Route path="/user/:userId/edit" element={<EditProfilePage />}/>
          <Route path="/quizzes/:quizId/details" element={<QuizDetailsPage />}/>
          <Route path="/quizzes/:quizId/manage" element={<ManageQuizPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignupPage />}/>
          <Route path="/change-password" element={<ChangePasswordPage />}/>
          <Route path="/new-quiz" element={<CreateNewQuizPage />}/>
        </Routes>
      </PageLayout>
    </>
  )
}

export default App
