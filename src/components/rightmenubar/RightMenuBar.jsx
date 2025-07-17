import React from 'react'
import MenuIcons from './MenuIcons'

import home from '/img/home.svg';
import cvmenu from '/img/cvmenu.svg';
import education from '/img/education.svg';
import works from '/img/works.svg';
import mail from '/img/mail.svg';
import message from '/img/message.svg';

const RightMenuBar = () => {

    const icons = [
        { src: home, alt: 'home', link: '/', text : 'Home' },
        { src: cvmenu, alt: 'cvmenu', link: '/', text : 'CV' },
        { src: education, alt: 'education', link: '/', text : 'Education' },
        { src: works, alt: 'works', link: '/', text : 'Works' },
        { src: mail, alt: 'mail', link: '/', text : 'E-Mail' },
        { src: message, alt: 'message', link: '/', text : 'Message' },
    ];
    return (
        <div className='bg-white w-[102.44px] h-[1247.43px] pt-[49.32px]'>
            <img src="/img/darkmode.svg" className='mx-auto mb-[201.09px]' />
            <MenuIcons icons={icons} />
        </div>
    )
}

export default RightMenuBar