import React from 'react'

import { useTranslation } from 'react-i18next';

const CvButton = () => {
  const { t } = useTranslation();

  return (
    <div className='py-6'>
        <button className='flex justify-center items-center mx-auto w-[208.68px] h-[37.94px] bg-secondary dark:bg-darksecondary '>{t('download_cv')}
            <img src="/img/cv.svg" className='w-[11.07px] h-[11.38px] ml-[19.17px]' />
        </button>
    </div>
  )
}

export default CvButton