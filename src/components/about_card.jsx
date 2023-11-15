import React from "react"

function about_card({ cmd = "$ git(main): ", description }) {
    return (
        <div  className=' m-4'>
            <div className="text-cyan-400 font-mono font-extrabold text-xs ml-4 w-auto"> {cmd} </div>
            <span className='text-white text-xs w-auto para'>{description}</span>
        </div>
    )
}

export default about_card