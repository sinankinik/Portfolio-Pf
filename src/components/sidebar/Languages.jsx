import React from 'react'

import { useTranslation } from 'react-i18next';

const Languages = () => {

    const { t } = useTranslation();

    return (
        <div className='w-[208.65px] mx-auto mt-6 ml-[38px] border-b-2 pb-[23.71px]'>
            <h2 className='font-medium text-[18px]'>{t('languages')}</h2>
            <div className='mt-2.5 text-third font-normal text-base'>
                <div className='flex justify-between'>
                    <h3>Bangla</h3>
                    <h3>100%</h3>
                </div>
                <img src="/img/languagebar1.svg" className='mt-1.5' />
            </div>
            <div className='mt-2.5 text-third font-normal text-base'>
                <div className='flex justify-between'>
                    <h3>English</h3>
                    <h3>80%</h3>
                </div>
                <img src="/img/languagebar2.svg" className='mt-1.5' />
            </div>
            <div className='mt-2.5 text-third font-normal text-base'>
                <div className='flex justify-between'>
                    <h3>Spanish</h3>
                    <h3>60%</h3>
                </div>
                <img src="/img/languagebar3.svg" className='mt-1.5' />
            </div>
        </div>
    )
}

export default Languages