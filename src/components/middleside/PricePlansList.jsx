import React from 'react'

const PricePlansList = ({ limit = 0 }) => {
  const listItems = [
    "UI Design",
    "Web Development",
    "Logo Design",
    "Seo Optimization",
    "WordPress Integration",
    "5 Websites",
    "Unlimited User",
    "20 GB Bandwith",
  ];

  const OkayImg = "img/okay.svg"
  const NopeImg = "img/nope.svg"

    return (
    <div className="flex mt-[19.45px] ml-[34.88px] font-inter font-normal ">
      <div className="">
        <ul className="text-[14.23px]">
          {listItems.map((item, index) => {
            const isAvailable = index < limit;
            const textColor = isAvailable ? 'text-primary dark:text-white ' : 'text-third';
            const icon = isAvailable ? OkayImg : NopeImg;

            return (
              <li key={index} className={`flex items-center mb-[14.94px] ${textColor}`}>
                <img
                  src={icon}
                  className="w-[16.69px] h-[11.4px] mr-[14.34px]"
                  alt={isAvailable ? "Okay" : "Nope"}
                />
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};


export default PricePlansList