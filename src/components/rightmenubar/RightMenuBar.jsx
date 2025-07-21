// components/rightmenubar/RightMenuBar.jsx
import React from 'react'
import MenuIcons from './MenuIcons'

// İkonların yollarını projenizdeki gerçek konuma göre kontrol edin.
// Örneğin: /public/img/home.svg
import home from '/img/home.svg';
import cvmenu from '/img/cvmenu.svg';
import education from '/img/education.svg';
import works from '/img/works.svg';
import mail from '/img/mail.svg';
import message from '/img/message.svg';
import darkmodeIcon from '/img/darkmode.svg'; // Dark mode ikonu
import lightmodeIcon from '/img/lightmode.png'; // Dark mode ikonu


// isDarkMode ve toggleDarkMode prop olarak alındı
const RightMenuBar = ({ isDarkMode, toggleDarkMode }) => {

    const icons = [
        { src: home, alt: 'home', link: '/', text : 'Home' },
        { src: cvmenu, alt: 'cvmenu', link: '/', text : 'CV' },
        { src: education, alt: 'education', link: '/', text : 'Education' },
        { src: works, alt: 'works', link: '/', text : 'Works' },
        { src: mail, alt: 'mail', link: '/', text : 'E-Mail' },
        { src: message, alt: 'message', link: '/', text : 'Message' },
    ];
    return (
        <div className='bg-white dark:bg-darkprimary w-[102.44px] h-[1247.43px] pt-[49.32px]'>
            <img 
                src={isDarkMode ? lightmodeIcon : darkmodeIcon}
                alt="Dark Mode Toggle" 
                className='mx-auto mb-[201.09px] cursor-pointer w-6 h-6' 
                onClick={toggleDarkMode}
            />
            <MenuIcons icons={icons} />
        </div>
    )
}

export default RightMenuBar