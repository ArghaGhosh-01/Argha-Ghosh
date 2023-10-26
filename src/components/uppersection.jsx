import React from "react";
import Illustration from "../assets/Photos/illu.png"
import Type from "./type";

function uppersection() {
    return (
        <div className="flex flex-wrap mx-10 my-8 gap-7 justify-center items-center">
            <div className="md:w-2/5 w-96 p-4 flex justify-center align-middle my-4 items-center text-white">
                <img className="h-full" src={Illustration} alt="Illustration" />
                <span className="bg-green-400 rounded-full w-44 h-44 opacity-10 absolute top-28 circle"></span>
            </div>
            <div className="w-full md:w-2/5 p-0 h-40 flex justify-center my-4 text-3xl ">
                <div className="bg-opacity-50 backdrop-filter backdrop-blur-lg">
                <div className="text-white flex justify-center font-light ">Hi there !<span className="wave ml-2" role="img">
                  👋🏻
                </span></div>
                <div className="text-white font-light">I am <span className="text-green-500 ml-11 font-mono font-bold">ARGHA GHOSH</span> </div>
                    <div className="text-green-500 flex justify-center text-xl font-mono font-bold">
                        <Type />
                    </div>
                    <div className="flex justify-center my-4">

                    <button className="bg-green-500 text-white text-lg font-semibold mx-3 px-2 rounded-md button_visit">Visit Github</button>
                    <button className="bg-green-500 text-white text-lg font-semibold mx-3 px-2 rounded-md button_visit">View Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default uppersection;