import Login from "../pages/Login";
import React, {FC} from 'react';
import {COOKIES_PREFIX} from "../data/constants";
import {getCookie} from "../utils/cookies"
import {Navigate} from "react-router-dom";

const RequireAuth: FC<{ children: any }> = ({ children }) => {
    
    function useLoginStatus() {
        if (getCookie(COOKIES_PREFIX + "username") === "")
            return false
        return true
    }


    if (!useLoginStatus()) {
        console.log('sending to login')
        console.log(children)

        return <Navigate to={"/login" + window.location.pathname}/>;
    }
    return children;
};

export default RequireAuth;