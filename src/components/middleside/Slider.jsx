import React from 'react'

const Slider = () => {
  return (
    <div className='grid grid-cols-2 w-[920.07px] h-[442.96px] bg-white dark:bg-darkprimary ml-[28.46px] mr-[25.61px]'>
      <div className='font-inter w-[502.73px] mt-[88.21px] ml-[56.91px]'>
        <h2 className='font-bold text-[45.53px] text-primary dark:text-white'>I’m Rayan Adlrdard</h2>
        <h2 className='font-bold text-[45.53px] text-primary dark:text-white '><span className='text-secondary dark:text-darksecondary '>Front-end</span> Developer </h2>
        <p className='font-normal text-[15.18] text-third mt-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
        <p className='font-normal text-[15.18] text-third'>Elit. Et, volutpat feugiat placerat lobortis. Natoque </p>
        <p className='font-normal text-[15.18] text-third'>Rutrum semper sed suspendisse nunc lectus. </p>
        <button className='flex justify-center items-center bg-secondary dark:bg-darksecondary  w-[146.07px] h-[48.35px] rounded font-inter font-medium text-[15.18px] text-primary dark:text-white  mt-6 '>HIRE ME
          <img src="/img/arrow.svg" alt="arrow" className='w-[10.12px] h-[9.84px] ml-[10.72px]' />
        </button>
      </div>
      <div className='ml-24 mt-[7.59px]'>
        <img src="/img/sliderpp.png" alt="" />
      </div>
    </div>
  )
}

export default Slider