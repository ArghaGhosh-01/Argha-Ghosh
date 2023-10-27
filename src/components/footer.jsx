import React from 'react'
import GithubLogo from './data/icons_img/github_icon.png'
import Instagram from './data/icons_img/instagram.png'
import Icons from "./icons";

export function footer() {
    return (
        <section className=" bottom-0 overflow-hidden bg-black py-8 bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <div className="container relative z-10 mx-auto px-4">
                <div className="-m-8 flex flex-wrap items-center justify-center">
                    <div className="w-auto p-8">
                        <div className="-m-1.5 flex flex-wrap">
                            <Icons icon={GithubLogo} link="" />
                            <Icons icon={Instagram} link="" />
                        </div>
                    </div>
                </div>
                <p className='text-white flex items-center justify-center m-4'>&copy; 2023 Your Company. All Rights Reserved.</p>
            </div>
        </section>
    )
}

export default footer
