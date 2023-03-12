import React, {useEffect} from 'react';

function Home() {

    useEffect(() => {
        document.title = 'خبرکاو';
    }, []);


    return (
        <div>
            محتوا
        </div>
    );
}

export default Home;