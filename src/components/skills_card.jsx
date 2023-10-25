import React from "react"

function Card() {
    return(
        <div className="bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 shadow-md rounded-md border border-white m-4 w-96 card_glow cursor-pointer">
            <h3 className="text-lg font-semibold mb-2 text-white">HTML</h3>
            <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                    <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-white-200">
                            Beginner
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-green-600">
                            40%
                        </span>
                    </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white">
                    <div style={{ width: '40%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                </div>
            </div>
        </div>
    )
}

export default Card
