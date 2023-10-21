import React from "react"

function Card() {
    return(
        <div className="bg-white p-4 shadow-md rounded-md">
            <h3 className="text-lg font-semibold mb-2">HTML</h3>
            <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                    <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                            Beginner
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-purple-600">
                            40%
                        </span>
                    </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                    <div style={{ width: '40%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                </div>
            </div>
        </div>
    )
}

export default Card
