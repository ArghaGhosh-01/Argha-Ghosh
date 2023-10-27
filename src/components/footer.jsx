import React from 'react';
import Icons from "./icons";
import iconsData from "./data/iconsData";

export function Footer() {
    return (
        <section className="bottom-0 overflow-hidden bg-black py-8 bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <div className="container relative z-10 mx-auto px-4">
                <div className="-m-8 flex flex-wrap items-center justify-center">
                    <div className="w-auto p-8">
                        <div className="-m-1.5 flex flex-wrap">
                            {iconsData.map((data, index) => (
                              <Icons key={index} icon={data.icon} link={data.link} />
                            ))}
                        </div>
                    </div>
                </div>
                <p className='text-white flex items-center justify-center m-4'>&copy; 2023 Your Company. All Rights Reserved.</p>
            </div>
        </section>
    )
}

export default Footer;
