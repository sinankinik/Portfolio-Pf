import React from 'react'

import { useTranslation } from 'react-i18next';

const Skills = () => {

    const { t } = useTranslation();

    return (
        <div className='w-[208.65px] mx-auto mt-6 ml-[38px] border-b-2 pb-[23.71px]'>
            <h2 className='font-medium text-[18px]'>{t('skills')}</h2>
            <div className='mt-2.5 text-third font-normal text-base'>
                <div className='flex justify-between'>
                    <h3>HTML</h3>
                    <h3>95%</h3>
                </div>
                <img src="/img/skills1.svg" className='mt-1.5' />
            </div>
            <div className='mt-2.5 text-third font-normal text-base'>
                <div className='flex justify-between'>
                    <h3>CSS</h3>
                    <h3>85%</h3>
                </div>
                <img src="/img/skills2.svg" className='mt-1.5' />
            </div>
            <div className='mt-2.5 text-third font-normal text-base'>
                <div className='flex justify-between'>
                    <h3>Js</h3>
                    <h3>80%</h3>
                </div>
                <img src="/img/skills3.svg" className='mt-1.5' />
            </div>
            <div className='mt-2.5 text-third font-normal text-base'>
                <div className='flex justify-between'>
                    <h3>PHP</h3>
                    <h3>75%</h3>
                </div>
                <img src="/img/skills4.svg" className='mt-1.5' />
            </div>
            <div className='mt-2.5 text-third font-normal text-base'>
                <div className='flex justify-between'>
                    <h3>WordPress</h3>
                    <h3>85%</h3>
                </div>
                <img src="/img/skills2.svg" className='mt-1.5' />
            </div>
        </div>
    )
}

export default Skills