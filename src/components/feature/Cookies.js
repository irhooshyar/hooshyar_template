import React, {useEffect} from 'react';
import { COOKIES_PREFIX } from '../../data/constants.js'


function Cookies(props) {


    useEffect(() => {
        props.setCookiesConfirmed(getCookie(COOKIES_PREFIX + "user_cookie_consent") !== "")
        document.getElementById("cookieNotice").style.display = "block";
    }, [props]);

    // Create cookie
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    // Delete cookie
    function deleteCookie(cname) {
        const d = new Date();
        d.setTime(d.getTime() + (24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=;" + expires + ";path=/";
    }

    // Read cookie
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // Set cookie consent
    function acceptCookieConsent(){
        deleteCookie(COOKIES_PREFIX + 'user_cookie_consent');
        setCookie(COOKIES_PREFIX + 'user_cookie_consent', 1, 30);
        props.setCookiesConfirmed(true)
    }


    return (
        <>
            <div id="cookieNotice" className="card shadow text-center">
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