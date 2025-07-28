import React from 'react'

const Contact = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-[400px] md:w-[920.07px] font-inter ml-[28.46px] mb-[67.35px]'>
            <div className='col-span-1 w-[400px] md:w-[540.66px]'>
                <h2 className='font-bold text-primary dark:text-white  text-[30.35px] mb-[47.37px]'>Leave us your info</h2>
                <div className='bg-white dark:bg-darkprimary  pb-[23.71px] mb-[17.07px]'>
                    <div className='p-[23.71px] text-third font-medium text-[17.07px]'>
                        <h3 className='mb-[7.46px]'>Your Full Name ( Required)</h3>
                        <input type="text" className='bg-[#F0F0F6] w-5/6 h-[47.43px] mb-[p23.71x]' />
                    </div>
                    <div className='bg-white dark:bg-darkprimary  p-[23.71px] text-third font-medium text-[17.07px]'>
                        <h3 className='mb-[7.46px]'>Your Email ( Required)</h3>
                        <input type="text" className='bg-[#F0F0F6] w-5/6 h-[47.43px] mb-[p23.71x]' />
                    </div>
                    <div className='bg-white dark:bg-darkprimary  p-[23.71px] text-third font-medium text-[17.07px]'>
                        <h3 className='mb-[7.46px]'>Subject</h3>
                        <input type="text" className='bg-[#F0F0F6] w-5/6 h-[47.43px] mb-[p23.71x]' />
                    </div>
                    <div className='bg-white dark:bg-darkprimary  p-[23.71px] text-third font-medium text-[17.07px]'>
                        <h3 className='mb-[7.46px]'>Your Message</h3>
                        <input type="text" className='bg-[#F0F0F6] w-5/6 h-[199.19px] mb-[p23.71x]' />
                    </div>
                    <button className='bg-secondary dark:bg-darksecondary  flex justify-center items-center w-[150.82px] h-[33.2px] ml-[23.71px] font-semibold text-[13.28px]'>SEND MESSAGE</button>
                </div>
            </div>
            <div className='col-span-1 w-[350.96px] md:ml-[110px]'>
                <h2 className='font-bold text-primary dark:text-white  text-[30.35px]'>Contact information</h2>
                <div className='bg-white dark:bg-darkprimary  w-[350.96px] h-[209px] mt-[47.37px] pt-[23.71px] font-inter font-medium text-[17.07px] text-third'>
                    <div className='bg-secondary dark:bg-darksecondary  flex justify-center items-center w-[37.94px] h-[37.94px] rounded-full ml-[156.51px]'>
                        <img src="/img/contacticon2.svg" alt="" />
                    </div>
                    <div className='flex justify-between mt-[29.4px] mx-[23.71px] mb-3'>
                        <h3>Country:</h3>
                        <h3 className='font-normal text-[14.23px]'>Bangladesh</h3>
                    </div>
                    <div className='flex justify-between mx-[23.71px] mb-3'>
                        <h3>City:</h3>
                        <h3 className='font-normal text-[14.23px]'>Dhaka</h3>
                    </div>
                    <div className='flex justify-between mx-[23.71px]'>
                        <h3>Streat:</h3>
                        <h3 className='font-normal text-[14.23px]'>35 vhatara, Badda</h3>
                    </div>
                </div>
                <div className='bg-white dark:bg-darkprimary  w-[350.96px] h-[209px] mt-[47.37px] pt-[23.71px] font-inter font-medium text-[17.07px] text-third'>
                    <div className='bg-secondary dark:bg-darksecondary  flex justify-center items-center w-[37.94px] h-[37.94px] rounded-full ml-[156.51px]'>
                        <img src="/img/contacticon1.svg" alt="" />
                    </div>
                    <div className='flex justify-between mt-[29.4px] mx-[23.71px] mb-3'>
                        <h3>Email:</h3>
                        <h3 className='font-normal text-[14.23px]'>youremail@gmail.com</h3>
                    </div>
                    <div className='flex justify-between mx-[23.71px] mb-3'>
                        <h3>Skype:</h3>
                        <h3 className='font-normal text-[14.23px]'>@yourusername</h3>
                    </div>
                    <div className='flex justify-between mx-[23.71px]'>
                        <h3>Telegram:</h3>
                        <h3 className='font-normal text-[14.23px]'>@yourusername</h3>
                    </div>
                </div>
                <div className='bg-white dark:bg-darkprimary w-[350.96px] h-[209px] mt-[47.37px] pt-[23.71px] font-inter font-medium text-[17.07px] text-third'>
                    <div className='bg-secondary dark:bg-darksecondary  flex justify-center items-center w-[37.94px] h-[37.94px] rounded-full ml-[156.51px]'>
                        <img src="/img/contacticon2.svg" alt="" />
                    </div>
                    <div className='flex justify-between mt-[29.4px] mx-[23.71px] mb-3'>
                        <h3>Support Services:</h3>
                        <h3 className='font-normal text-[14.23px]'>153369</h3>
                    </div>
                    <div className='flex justify-between mx-[23.71px] mb-3'>
                        <h3>Office:</h3>
                        <h3 className='font-normal text-[14.23px]'>+58 (021)356 587 235</h3>
                    </div>
                    <div className='flex justify-between mx-[23.71px]'>
                        <h3>Personal:</h3>
                        <h3 className='font-normal text-[14.23px]'>+58 (021)356 587 235</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact