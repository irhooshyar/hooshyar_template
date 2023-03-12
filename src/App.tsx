import {BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import './App.css';
import React from 'react';
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {useEffect, useState} from "react";
import Cookies from "./components/feature/Cookies";
import RequireAuth from "./components/RequireAuth";
import {deleteCookie} from "./utils/cookies";
import {COOKIES_PREFIX} from "./data/constants";

function App() {
  const [isCookiesConfirmed, setCookiesConfirmed] = useState(false);

  useEffect(() => {

  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/*<Route exact path="/register" component={Register} />*/}
        {/*<Route exact path="/forgot-password" component={ForgotPassword} />*/}
        {/*<Route exact path="/reset-password" component={ResetPassword} />*/}
        <Route path='/login/:target?' element={<Login/>} />
        <Route path='/test' element={<RequireAuth><h2>test</h2></RequireAuth>} />
        <Route path='/' element={<RequireAuth><Home/></RequireAuth>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      {isCookiesConfirmed ?
          "" :
          <Cookies isCookiesConfirmed={isCookiesConfirmed}
                   setCookiesConfirmed={setCookiesConfirmed}/>
      }
    </BrowserRouter>
  );
}

export default App;
