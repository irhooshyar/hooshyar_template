import React, {useEffect} from 'react';

function NotFound() {

    useEffect(() => {
        document.title = 'پیدا نشد';
        // appendExternalScript("../assets/js/Bita.js")
        // appendInternalScript('initXC(304, "wKxiyjGD2r9Iv3zK4JoAV3qWL0cJlsjG2lkfcT98");')
    }, []);

    return (
        <div>
            not found
        </div>
    );
}

export default NotFound;