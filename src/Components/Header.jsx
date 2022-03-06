import React from 'react';
import One from '../images/1.jpeg'
import Two from '../images/2.jpeg'
import Three from '../images/3.jpeg'


const Header = () => {
    return (
        <div className='bg-zinc-600 h-full w-full md:grid md:grid-cols-2'>
            {/* text wrapper */}
            <div className='flex flex-col w-full px-4'>
                <h3 className='body-text xl:px-20  md:text-6xl lg:text-7xl lg:leading-snug lg:px-8 md:leading-snug md:font-bold md:text-left'>Find better plants for better living</h3>
                <p className='text-gray-50 text-center py-4 xl:px-20 lg:px-8 md:text-left my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nisi impedit commodi!</p>
                {/* join community */}
                <div className='flex mx-5 px-1 justify-between py-2 xl:mx-20 lg:mx-8 md:mx-2 items-center border rounded-full'>
                    <span className='text-gray-50 text-sm pl-8'>join our newsletter community</span>
                    <span className='circle'><i className="fa-solid fa-arrow-right-long"></i></span>
                </div>
            </div>
            {/* image holder */}
            <div className='flex justify-center gap-5 px-3 md:gap-4 py-10'>
                <div className='pt-5'>
                    <img src={One} alt="" className='h-full w-48 md:w-60 rounded-full' />
                </div>
                <div className='flex flex-col gap-6 pt-5'>
                    <img src={Two} alt="" className='rounded-t-full w-32 md:w-44' />
                    <img src={Three} alt="" className='rounded-full w-32 h-32 md:w-44 md:h-44' />
                </div>

            </div>
        </div>
    )
}

export default Header;