import React from 'react'

const OrderNowButton = ({color}) => {
  return (
    <div>
        <button className={`bg-${color} w-[160.3px] h-[36.04px] font-inter font-bold text-[13.28px] text-primary drop-shadow-md rounded-3xl`}>ORDER NOW</button>
    </div>
  )
}

export default OrderNowButton