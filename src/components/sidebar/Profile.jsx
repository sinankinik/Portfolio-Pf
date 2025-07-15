import React from 'react'

import facebookIcon from '/img/fb.svg';
import twitterIcon from '/img/twitter.svg';
import instagramIcon from '/img/insta.svg';
import linkedinIcon from '/img/linkedin.svg';
import youtubeIcon from '/img/youtube.svg';
import githubIcon from '/img/dribbble.svg';
import SocialIcons from './SocialIcons';

const Profile = () => {
    const socialMediaIcons = [
        { src: facebookIcon, alt: 'Facebook', link: 'https://www.facebook.com/yourprofile' },
        { src: twitterIcon, alt: 'Twitter', link: 'https://twitter.com/yourprofile' },
        { src: instagramIcon, alt: 'Instagram', link: 'https://www.instagram.com/yourprofile' },
        { src: linkedinIcon, alt: 'LinkedIn', link: 'https://www.linkedin.com/in/yourprofile' },
        { src: youtubeIcon, alt: 'YouTube', link: 'https://www.youtube.com/yourchannel' },
        { src: githubIcon, alt: 'GitHub', link: 'https://github.com/yourprofile' },
    ];

    return (
        <div className='grid justify-items-center content-start w-full'>
            <div className=''>
                <div className='w-[142.28px] h-[142.28px]'>
                    <img src="/img/pp.png" alt="Profile Picture" className='w-[142.28px] h-[142.28px]' />
                </div>
                <h3 className='font-medium text-[18px] text-primary mt-[29.41px]'>Rayan Adlardard</h3>
                <h4 className='font-normal text-third text-sm mt-[14.1px]'>Front-end Developer</h4>
            </div>
            <div className='w-[207.73px] h-[22.76px] mt-3.5'>
                <SocialIcons icons={socialMediaIcons} />
            </div>
            <div className='w-[208.68px] border-b-2 mt-[23.71px]'>
            </div>
        </div>
    )
}

export default Profile