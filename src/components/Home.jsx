import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'  >
                <p className='text-white'>Hi, my name is </p>
                <h1 className=' text-4xl sm:text-5xl font-bold text-[#ccd6f6]' >Shervin Rahmnain</h1>
                <h2 className='text-4xl  sm:text-6xl font-bold text-[#8892b0]'>I'm a Web Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w [700px]'>Web developer with IT support background. Skilled in developing user-friendly web applications with clean,
                    maintainable, and scalable code using relevant programming languages and frameworks.
                    Adept at problem-solving and delivering projects on time and within budget. Passionate about continuous
                    learning and delivering projects to the highest standards of customer excellence.</p>
                <div>
                    <button  className='text-white group border-2 px-6 py-3 my-2 items-center flex hover:bg-pink-600 hover:border-pink-600'>View Work <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight  className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home 