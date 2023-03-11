import NavigationBar from "./Components/Navigation/NavigationBar";
import PageLayout from "./Components/Pages/PageLayout";
import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";

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
        </Routes>

      </PageLayout>
    </>
  )
}

export default App
