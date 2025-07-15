import React from 'react'

const MenuIcons = ({ icons }) => {
    return (
        <div>
            {icons.map((icon, index) => (
                <div className='bg-[#F0F0F6] relative hover:bg-secondary w-[37.94px] h-[37.94px] rounded-full mx-auto flex items-center justify-center mb-[40.79px] cursor-pointer group' key={index}>
                    <img src={icon.src} alt={icon.alt} className='' />
                    <span 
                        className='absolute top-0 mt-[-30px] px-3 py-1 bg-gray-800 text-white text-sm rounded 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap' // 🎉 Tooltip stilleri
                    >
                        {icon.text}
                    </span>
                </div>
            ))}

        </div>
    )
}

export default MenuIcons