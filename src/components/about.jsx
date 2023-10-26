import React from 'react'

function about() {
    return (
        <div className='bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-md mb-4 rounded-lg lg:mx-96 mx-16 text-white border border-white'>
            <div>
            </div>
            <div className='flex items-center justify-center text-xl font-mono font-bold text-white  mt-0 bg-slate-500'>
                <span className='w-3 h-3 bg-red-500 rounded-full absolute left-11'></span>
                <span className='w-3 h-3 bg-yellow-500 rounded-full absolute left-16'></span>
                <span className='w-3 h-3 bg-green-500 rounded-full absolute left-20'></span>
                ABOUT
            </div>
            <div className='flex'>
                <div className="text-green-600 font-mono font-extrabold text-md ml-8"> ~ git (main) : </div>
                <span className='text-white'>git log</span>
            </div>
            <div className='flex'>
                <div className="text-green-600 font-mono font-extrabold text-md ml-8"> ~ git (main) : </div>
                <span className='text-white'>git log</span>
            </div>
            <div className='flex'>
                <div className="text-green-600 font-mono font-extrabold text-md ml-8"> ~ git (main) : </div>
                <span className='text-white'>git log</span>
            </div>
        </div>
    )
}

export default about