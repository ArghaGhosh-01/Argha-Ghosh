import React from 'react'
import About_card from "./about_card"

function about() {
    return (
        <div className='bg-black backdrop-blur-lg shadow-md mb-4 rounded-lg lg:mx-96 mx-16 text-white border border-white'>
            <div>
            </div>
            <div className='flex items-center justify-center text-xl font-mono font-bold text-white  mt-0 bg-slate-500 glow_card'>
                <span className='w-3 h-3 bg-red-500 rounded-full absolute left-11'></span>
                <span className='w-3 h-3 bg-yellow-500 rounded-full absolute left-16'></span>
                <span className='w-3 h-3 bg-green-500 rounded-full absolute left-20'></span>
                ABOUT
            </div>
            <div className='my-6'>
                <About_card cmd="$git(internship): " description="Hello who are you? I am Argha Ghosh I am an MERN stack web developer, AI | ML Learner" />
                <About_card cmd="$git(hobby): " description="Hello" />
                <About_card cmd="$git(internship): " description="Hello" />
            </div>
        </div>
    )
}

export default about