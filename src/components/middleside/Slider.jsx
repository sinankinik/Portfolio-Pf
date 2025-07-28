import React from 'react'

import { useTranslation } from 'react-i18next';

const Slider = () => {

  const { t } = useTranslation();

  return (
    <div className='grid grid-cols-2 w-[400px] sm:w-[640px] md:w-[920.07px] h-[442.96px] bg-white dark:bg-darkprimary md:ml-[28.46px] mr-[25.61px]'>
      <div className='font-inter w-[502.73px] mt-[88.21px] ml-[56.91px]'>
        <h2 className='font-bold text-2xl sm:text-4xl md:text-[45.53px] text-primary dark:text-white'>{t('name')}</h2>
        <h2 className='font-bold text-2xl sm:text-4xl md:text-[45.53px] text-primary dark:text-white mt-6'><span className='text-secondary dark:text-darksecondary '>Front-end</span> Developer </h2>
        <p className='font-normal text-xs sm:text-[15.18] text-third mt-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
        <p className='font-normal text-xs sm:text-[15.18] text-third'>Elit. Et, volutpat feugiat placerat lobortis. Natoque </p>
        <p className='font-normal text-xs sm:text-[15.18] text-third'>Rutrum semper sed suspendisse nunc lectus. </p>
        <button className='flex justify-center items-center bg-secondary dark:bg-darksecondary  w-[146.07px] h-[48.35px] rounded font-inter font-medium text-[15.18px] text-primary dark:text-white  mt-6 '>{t('hire_me')}
          <img src="/img/arrow.svg" alt="arrow" className='w-[10.12px] h-[9.84px] ml-[10.72px]' />
        </button>
      </div>
      <div className='ml-24 hidden lg:block mt-[7.59px]'>
        <img src="/img/sliderpp.png" alt="" />
      </div>
    </div>
  )
}

export default Slider