import { BrowserRouter, Routes , Route } from 'react-router-dom';
// import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {useEffect, useState} from "react";
import Cookies from "./components/feature/Cookies";

function App() {
  const [cookiesConfirmed, setCookiesConfirmed] = useState(false);

  useEffect(() => {
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        {/*<Route exact path="/register" component={Register} />*/}
        {/*<Route exact path="/forgot-password" component={ForgotPassword} />*/}
        {/*<Route exact path="/reset-password" component={ResetPassword} />*/}
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      {cookiesConfirmed ?
          "" :
          <Cookies cookiesConfirmed={cookiesConfirmed}
                   setCookiesConfirmed={setCookiesConfirmed}/>
      }
    </BrowserRouter>
  );
}

export default App;
