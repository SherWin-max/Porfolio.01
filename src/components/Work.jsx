import React from 'react'
import background from '../assets/background.jpeg'
import background1 from '../assets/background1.png'
import background2 from '../assets/background2.png'
import login from '../assets/login.png'
import sphere from '../assets/Sphere.png'
import cat from '../assets/cat.png'


const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl  font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className=' py-6'>  Check out some of my recent work </p>
                </div>

                {/* Contaienr */}

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${login})` }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                Login
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://main--effortless-brigadeiros-384bf3.netlify.app">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/SherWin-max/login" target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${background})` }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                Porfolio
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://shervin.herokuapp.com " target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/SherWin-max/portfolio" target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${sphere})` }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                Sphere
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://main--rococo-dodol-8c51de.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/SherWin-max/Sphere" target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${background1})` }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                SlingAir!
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/SherWin-max/Slingair" target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${background2})` }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                News-platform
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/SherWin-max/News-platform" target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${cat})` }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider text-center justify-center'>

                                Cheezburger-
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/SherWin-max/I-CAN-HA-Z-CHEEZBURGER-" target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work