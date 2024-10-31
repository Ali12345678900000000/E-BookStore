import React from 'react'
import Bnr from '../../public/Banner.png'

const Banner = () => {
    return (
        <div className='max-w-screen-2xl container mx-auto md:px-10 sm:px-4 flex flex-col px-4 md:flex-row m-14'>
            <div className='w-full md:w-1/2 mt-12 md:mt-24'>
                <div className='space-y-12'>
                    <h1 className='text-4xl font-bold '>Hello, Welcome here to learn somethign <span className="text-pink-500">new everyday!!!</span></h1>
                    <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eius ullam, odit aperiam quidem numquam nam magnam aspernatur adipisci corrupti facilis recusandae tenetur molestiae! Cumque consequuntur voluptas cum rem molestias.</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Username" />
                    </label>
                </div>
                <button className="btn mt-6 btn-secondary">Get Started</button>
            </div>
            <div className='w-full md:w-1/2 items-center mt-12 md:mt-28 md:px-20'>
                <img className='h-92 w-92 hidden md:block' src={Bnr} alt="Books" />
            </div>
        </div>
    )
}

export default Banner;