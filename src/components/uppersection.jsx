import React from "react";
import Illustration from "../assets/Photos/illu.png"

function uppersection() {
    return (
        <div className="flex flex-wrap mx-10 my-8 gap-7 justify-center items-center">
            <div className="md:w-2/5 w-96 p-4 flex justify-center align-middle my-4 items-center text-white"> 
            <img className="h-full" src={Illustration} alt="Illustration"/>
            <span className="bg-green-400 rounded-full w-44 h-44 opacity-10 absolute top-28 circle"></span>
            </div>
            <div className="w-full md:w-2/5 p-4 h-40 flex justify-center align-middle my-4 items-center text-yellow-50"> 
            Profile status
            </div>
        </div>
    )
}

export default uppersection;