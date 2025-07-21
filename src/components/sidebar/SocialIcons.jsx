import React from 'react'

const SocialIcons = ({ icons }) => {
    return (
        <div className='flex gap-x-3.5'>
            {icons.map((icon, index) => (
                <div className='flex justify-center items-center bg-secondary dark:bg-darksecondary  w-[22.76px] h-[22.76px] rounded-full' key={index}>
                    <img
                        src={icon.src}
                        alt={icon.alt}
                    />
                </div>
            ))}
        </div>
    )
}

export default SocialIcons