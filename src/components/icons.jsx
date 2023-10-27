import React from "react"

function icons({icon,link})
{
    return(
        <div className="w-auto p-1.5">
                                <a href={link} target="blank">
                                    <div className="flex h-8 w-8 items-center justify-center  border-gray-300 hover:border-gray-400">
                                        <img src={icon} />
                                    </div>
                                </a>
                            </div>
    )
}

export default icons