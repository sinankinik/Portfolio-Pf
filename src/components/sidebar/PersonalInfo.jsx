import React from 'react'

const PersonalInfo = () => {
  return (
    <div className='w-[208.65px] mx-auto mt-6 font-normal text-sm text-primary dark:text-white  border-b-2 pb-[23.71px]'>
      <div className='flex justify-between'>
        <div className=''>
          <div className='bg-secondary dark:bg-darksecondary  grid px-[4.74px] py-[5px]'><p>Age:</p></div>
          <div className='bg-secondary dark:bg-darksecondary  grid px-[4.74px] py-[5px] mt-2'><p>Residence:</p></div>
          <div className='bg-secondary dark:bg-darksecondary  grid px-[4.74px] py-[5px] mt-2'><p>Freelance:</p></div>
          <div className='bg-secondary dark:bg-darksecondary  grid px-[4.74px] py-[5px] mt-2'><p>Address:</p></div>
        </div>
        <div className='grid justify-items-end'>
          <div className='px-[4.74px] py-[5px]'>24</div>
          <div className='px-[4.74px] py-[5px] mt-2'>BD</div>
          <div className='px-[4.74px] py-[5px] mt-2 text-[#7EB942]'>Available</div>
          <div className='px-[4.74px] py-[5px] mt-2'>Dhaka,Bangladesh</div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo