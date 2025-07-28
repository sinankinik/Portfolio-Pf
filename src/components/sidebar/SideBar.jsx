import React from 'react'
import Profile from './Profile'
import PersonalInfo from './PersonalInfo'
import Languages from './Languages'
import Skills from './Skills'
import ExtraSkills from './ExtraSkills'
import CvButton from './CvButton'

const SideBar = () => {
    return (
        <div className='bg-white hidden lg:block dark:bg-darkprimary w-[289.3px] h-[1247.32px] font-inter pt-12'>
            <Profile />
            <PersonalInfo />
            <Languages />
            <Skills />
            <ExtraSkills />
            <CvButton />
        </div>
    )
}

export default SideBar