import React from 'react';
import { useTranslation } from 'react-i18next';
import MenuIcons from './MenuIcons';

import home from '/img/home.svg';
import cvmenu from '/img/cvmenu.svg';
import education from '/img/education.svg';
import works from '/img/works.svg';
import mail from '/img/mail.svg';
import message from '/img/message.svg';
import darkmodeIcon from '/img/darkmode.svg';
import lightmodeIcon from '/img/lightmode.png';

const RightMenuBar = ({ isDarkMode, toggleDarkMode }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const icons = [
        { src: home, alt: 'home', link: '#home-section', text: t('home') },
        { src: cvmenu, alt: 'cvmenu', link: '#workhistory-section', text: t('cv') },
        { src: education, alt: 'education', link: '#education-section', text: t('education') },
        { src: works, alt: 'works', link: '#portfolio-section', text: t('works') },
        { src: mail, alt: 'mail', link: '#contact-section', text: t('email') },
        { src: message, alt: 'message', link: '#contact-section', text: t('message') },
    ];
    return (
        <div className='bg-white hidden xl:block dark:bg-darkprimary w-[102.44px] h-[1247.43px] pt-[49.32px]'>
            <img
                src={isDarkMode ? lightmodeIcon : darkmodeIcon}
                alt={t('dark_mode_toggle')}
                className='mx-auto mb-[201.09px] cursor-pointer w-6 h-6'
                onClick={toggleDarkMode}
            />
            <div className="flex justify-center mb-10 space-x-2">
                <button
                    onClick={() => changeLanguage('tr')}
                    className={`px-3 py-1 text-sm rounded ${i18n.language === 'tr' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}
                >
                    TR
                </button>
                <button
                    onClick={() => changeLanguage('en')}
                    className={`px-3 py-1 text-sm rounded ${i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}
                >
                    EN
                </button>
            </div>
            <MenuIcons icons={icons} />
        </div>
    )
}

export default RightMenuBar;