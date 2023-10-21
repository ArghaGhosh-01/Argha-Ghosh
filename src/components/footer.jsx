import React from 'react'
import GithubLogo from '../assets/github_icon.png'
import Instagram from '../assets/instagram.png'

export function footer() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-900 py-8">
            <div className="container relative z-10 mx-auto px-4">
                <div className="-m-8 flex flex-wrap items-center justify-center">
                    <div className="w-auto p-8">
                        <div className="-m-1.5 flex flex-wrap">
                            <div className="w-auto p-1.5">
                                <a href="#">
                                    <div className="flex h-8 w-8 items-center justify-center  border-white hover:border-white">
                                        <svg
                                            width="8"
                                            height="14"
                                            viewBox="0 0 8 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z"
                                                fill="white"
                                            ></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <div className="w-auto p-1.5">
                                <a href="#">
                                    <div className="flex h-8 w-8 items-center justify-center  border-gray-300 hover:border-gray-400">
                                        <svg
                                            width="14"
                                            height="11"
                                            viewBox="0 0 14 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z"
                                                fill="white"
                                            ></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <div className="w-auto p-1.5">
                                <a href="#">
                                    <div className="flex h-8 w-8 items-center justify-center  border-gray-300 hover:border-gray-400">
                                        <img src={GithubLogo} />
                                    </div>
                                </a>
                            </div>
                            <div className="w-auto p-1.5">
                                <a href="#">
                                    <div className="flex h-8 w-8 items-center justify-center  border-gray-300 hover:border-gray-400">
                                        <img src={Instagram} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default footer