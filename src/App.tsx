import NavigationBar from "./Components/Navigation/NavigationBar";
import PageLayout from "./Components/Pages/PageLayout";
import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import UserProfilePage from "./Components/Pages/UserProfilePage";
import LoginPage from "./Components/Pages/LoginPage";
import UserStoriesPage from "./Components/Pages/UserQuizzesPage";
import SignupPage from "./Components/Pages/SignupPage";

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
          <Route path="/user/:userId/quizzes" element={<UserStoriesPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignupPage />}/>
        </Routes>
      </PageLayout>
    </>
  )
}

export default App
