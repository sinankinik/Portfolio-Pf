import React from 'react'

import { useTranslation } from 'react-i18next';

const ExtraSkills = () => {

    const { t } = useTranslation();

    return (
        <div className='w-[208.65px] mx-auto mt-6 ml-[38px] border-b-2 pb-[23.71px]'>
            <h2 className='font-medium text-[18px]'>{t('extra_skills')}</h2>
            <div className='flex items-center mt-2.5 text-third font-normal text-base'>
                <img src="/img/extraskills.svg" className='mt-1.5 mr-[5px]' />
                <p>Bootstrap, Materialize</p>
            </div>
            <div className='flex items-center mt-2.5 text-third font-normal text-base'>
                <img src="/img/extraskills.svg" className='mt-1.5 mr-[5px]' />
                <p>Stylus, Sass, Less</p>
            </div>
            <div className='flex items-center mt-2.5 text-third font-normal text-base'>
                <img src="/img/extraskills.svg" className='mt-1.5 mr-[5px]' />
                <p>Gulp, Webpack, Grunt</p>
            </div>
            <div className='flex items-center mt-2.5 text-third font-normal text-base'>
                <img src="/img/extraskills.svg" className='mt-1.5 mr-[5px]' />
                <p>GIT Knowledge</p>
            </div>
        </div>
    )
}

export default ExtraSkills