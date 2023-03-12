import React, {useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
// import {Helmet} from "react-helmet";
import logo from "../assets/image/logo.svg"
import {API_URL, COOKIES_PREFIX} from "../data/constants";
import {setCookie} from "../utils/cookies";
// import {appendExternalScript, appendInternalScript} from "../utils/htmlManipulation";

function Login(props) {

    const navigate = useNavigate();
    let { target } = useParams();

    require('../assets/library/bootstrap-5.1.3.min.css')
    require('../assets/library/bootstrap-icons-1.7.1.css')
    require('../assets/styles/login_signup.css')
    // require('../assets/js/Bita.js')

    useEffect(() => {
        document.title = 'ورود';
        // appendExternalScript("../assets/js/Bita.js")
        // appendInternalScript('initXC(304, "wKxiyjGD2r9Iv3zK4JoAV3qWL0cJlsjG2lkfcT98");')
    }, []);


    async function onSubmit(e) {
        console.log("ran")
        e.preventDefault()

        const user_ip = "127.0.0.0"
        const username = (document.getElementById("username") as HTMLInputElement).value
        const password = (document.getElementById("password") as HTMLInputElement).value

        const request_link = API_URL + "/CheckUserLogin/" + username + "/" + password + "/" + user_ip + "/"
        let response = await fetch(request_link);
        response = await response.json();

        const messages = document.getElementById("messages");

        if (response.status.toString() === "not found" || response.status.toString() === "wrong password" ) {
            messages.innerText = "نام کاربری یا رمزعبور اشتباه است"
            messages.classList.add("text-danger")
        }
        else if (response.status.toString() === "not active") {
            messages.innerText = "اطلاعات شما درحال بررسی توسط ادمین است."
            messages.classList.add("text-danger")
        }
        else if (response.status.toString() === "de active") {
            messages.innerText = "درخواست عضویت شما توسط ادمین رد شده است."
            messages.classList.add("text-danger")
        }
        else if (response.status.toString() === "found admin") {
            window.location.href = "{% url 'admin_confirm_waiting_user' %}"
        }
        else if (response.status.toString() === "found user") {
            setCookie(COOKIES_PREFIX + "username", username, 1)
            navigate("/"+(target || ""))
        }
    }

    return (
        <>
            {/*<Helmet>*/}
            {/*    <script src="../assets/js/Bita.js"></script>*/}
            {/*    <script>*/}
            {/*        initXC(304, "wKxiyjGD2r9Iv3zK4JoAV3qWL0cJlsjG2lkfcT98");*/}
            {/*    </script>*/}
            {/*    <script type="text/javascript" src="http://l2.io/ip.js?var=myip"></script>*/}
            {/*</Helmet>*/}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 col-sm-11 col-lg-6 offset-md-3">

                        <form id="login" name="login" className="shadow p-4 bg-white" method="POST">
                            <div className="mb-3 text-center">
                                <img width="170px" style={{}}
                                     src={logo} alt=""/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username">نام کاربری:</label>
                                <input className="form-control" name="email" id="username" placeholder="Username"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="Password">رمز عبور:</label>
                                <input type="password" className="form-control" name="password" id="password"
                                       placeholder="Password"/>
                            </div>

                            <div className="mb-3">
                                <input type="checkbox" name="RememberMe"
                                       // style={{transform:'scale(1)'}}
                                />
                                {' '}
                                مرا بخاطر بسپار
                                <Link to="forgot_password" className="float-start text-decoration-none">فراموشی
                                    رمز عبور
                                </Link>
                            </div>


                            <div className="mb-3" id="messages"></div>

                            <div className="mb-3 d-grid gap-2 col-6 mx-auto">
                                <button className="btn btn-primary" type="submit" onClick={onSubmit}>ورود</button>
                            </div>
                            <hr/>
                            <p className="text-center mb-0">قبلا ثبت‌ نام نکرده‌اید؟
                                {' '}
                                <Link to="signup">
                                    ثبت نام
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;