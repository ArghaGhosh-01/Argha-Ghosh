import React from "react"

function about_card({ cmd = "$ git(main): ", description }) {
    return (
        <div  className='flex mb-2'>
            <div className="text-cyan-400 font-mono font-extrabold text-xs ml-4 w-aut"> {cmd} </div>
            <span className='text-yellow-500 text-xs mr-2 para'>{description}</span>
        </div>
    )
}

export default about_card