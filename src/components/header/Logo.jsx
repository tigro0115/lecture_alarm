import React from 'react'

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <a href='/'>
                <em aria-hidden='true'></em>
                <span className='header__title'>Available Lecture</span>
                <br />
            </a>
            <span className='header__subtitle'>수강신청 알림 사이트</span>
        </h1>
    )
}

export default Logo