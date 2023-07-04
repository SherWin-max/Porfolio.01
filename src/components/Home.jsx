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
                <p className='text-[#8892b0] py-4 max-w [700px]'>Experienced and results-oriented Web Developer with a strong background in IT support. I possess advanced skills in developing highly functional and user-friendly web applications,
                    leveraging a diverse range of programming languages and frameworks. My track record showcases a consistent ability to create clean, maintainable, and scalable code. I am recognized for my exceptional problem-solving abilities and a demonstrated history of delivering projects on time and within budget.
                    Committed to surpassing customer expectations,
                    I approach every project with a dedication to excellence and a passion for continuous learning..</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 items-center flex hover:bg-pink-600 hover:border-pink-600'><Link to="work" smooth={true} duration={500}>View my work
                    </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home 