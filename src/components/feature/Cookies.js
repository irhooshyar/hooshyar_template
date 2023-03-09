import React, {useEffect} from 'react';
import { COOKIES_PREFIX } from '../../data/constants.js'
import {deleteCookie, setCookie, getCookie} from "../../utils/cookies"


function Cookies(props) {


    useEffect(() => {
        props.setCookiesConfirmed(getCookie(COOKIES_PREFIX + "user_cookie_consent") !== "")
        document.getElementById("cookieNotice").style.display = "block";
    }, [props]);


    // Set cookie consent
    function acceptCookieConsent(){
        deleteCookie(COOKIES_PREFIX + 'user_cookie_consent');
        setCookie(COOKIES_PREFIX + 'user_cookie_consent', 1, 30);
        props.setCookiesConfirmed(true)
    }


    return (
        <>
            <div id="cookieNotice" className="card shadow text-center" style={{height:'auto', position: 'fixed', bottom: '0'}}>
                <div id="closeIcon" className="closeIcon" style={{display: "none"}}>
                </div>
                <div className="title-wrap">
                    <h4>حریم خصوصی شما!</h4>
                </div>
                <br/>
                <div className="content-wrap">
                    <div className="msg-wrap">
                        <p>این وب‌سایت از کوکی‌ها یا فناوری‌های مشابه برای بهبود تجربه مرور شما و ارائه توصیه‌های شخصی استفاده می‌کند. با ادامه استفاده از وب سایت ما، با سیاست حفظ <a style={{color:"#115cfa"}} href=""> حریم شخصی</a> ما موافقت میکنید. </p>

                    </div>
                    <div>
                        <br/>
                        <button className="btn btn-primary btn-cookie"  onClick={acceptCookieConsent}>
                            پذیرش
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cookies;