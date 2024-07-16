import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import Login from './Login';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const homeClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title="Available Lecture"
            description="수강신청 도우미 사이트에 오신 것을 환영합니다."
        >
            <section id='homeArea' className={homeClass}>
                <Login />
            </section>
        </Main>
    )
}

export default Home