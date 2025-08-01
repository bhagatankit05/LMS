import React from 'react'
import { assets } from '../../assets/asset'

const Footer = () => {
    return (
        <footer className='bg-orange-50 md:px-36 text-left w-full mt-10'>
            <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-black/30'>
                <div className='flex flex-col md:items-start items-center w-full '>
                    <img src={assets.gyaansetu_logo} alt="logo" className='w-28 lg:w-32  rounded' />
                    <p className='mt-6 text-center md:text-left text-sm text-gray-800/80'>
                       GyaanSetu bridges the gap between learners and knowledge through practical, industry-oriented online courses guided by expert educators.
                    </p>
                </div>

                <div className='flex flex-col md:items-start items-center w- full'>
                    <h2 className='font-semibold text-gray-900 mb-5'>
                        Company
                    </h2>
                    <ul className='flex md:flex-col w-full justify-between text-sm text-gray-900 md:space-y-2'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className='hidden md:flex flex-col items-start w-full'>
                    <h2 className='font-semibold text-gray-900 mb-5'>Subscribe to our newsletter</h2>
                    <p className='text-sm text-gray-900'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className='flex items-center gap-2 pt-4'>
                    <input className='border border-gray-500/30 bg-gray-800 placeholder-gray-400 outline-none w-64 h-9 rounded px-2 text-sm'type="email" placeholder='Enter your email' />
                    <button className='bg-blue-900 w-24 h-9 text-white rounded'>Subscribe</button>
                </div>
                </div>
            </div>
            <p className="py-4 text-gray-500 md:text-sm text-center">
                © 2025 GyaanSetu. All rights reserved.
            </p>

        </footer>
    )
}

export default Footer
