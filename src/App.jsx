import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Toaster } from "react-hot-toast";


import Login from "./components/Login/Login.jsx";
import Home from "./components/Home.jsx"

function App() {
  return (
    <>

        <BrowserRouter>
          <Toaster position="top-center" reverseOrder={false} />
          <Routes>
            {/* FRONTEND ROUTES  */}
            <Route path="/*" element={<Login/>} />
            <Route path="/home" element={<Home/>} />


          </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
