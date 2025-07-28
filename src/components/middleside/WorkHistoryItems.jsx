import React from 'react'

const WorkHistoryItems = () => {
    const items = [
        { work: "Lead Web Designer", title: 'Student', dates: "Jan 1016 - Dec 2021", caption: 'Certificate of web training', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' },
        { work: "Junior Web Designer", title: 'Student', dates: "Jan 1016 - Dec 2021", caption: 'Certificate of web training', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' },
        { work: "Senior Web Designer", title: 'Student', dates: "Jan 1016 - Dec 2021", caption: 'Certificate of web training', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' },
    ];

    return (
        <div className="w-[350px] sm:w-[610px] md:w-[920.07px] bg-white dark:bg-darkprimary mt-[48.37px] pt-[48.37px] px-[35.1px] font-inter text-third font-normal text-[9.49px]">
            {items.map((item, index) => (
                <div key={index} className='flex mb-[26.56px] border-b pb-[10.43px]'>
                    <div className=''>
                        <h2 className='font-medium text-primary dark:text-white  text-[17.07px]'>{item.work}</h2>
                        <div className='flex w-[200px] items-center pt-[26.43px]'>
                            <h2 className='text-primary dark:text-white  font-normal text-[14.23px]'>{item.title}</h2>
                            <div className='flex text-white justify-center items-center w-[105.29px] h-[17.07px] bg-secondary dark:bg-darksecondary  rounded ml-5'>
                                <h2 className=''>{item.dates}</h2>
                            </div>
                        </div>
                    </div>
                    <div className='ml-[169.79px]'>
                        <h2 className='font-medium text-primary dark:text-white  text-[17.07px]'>{item.caption}</h2>
                        <div className='flex items-center pt-[26.43px]'>
                            <p className='capitalize w-[508.41px] text-third font-normal text-[14.23px]'>{item.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WorkHistoryItems