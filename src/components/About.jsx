import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-400'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi. I'm Shervin,  Nice to meet you. Please allow me to introduce myself.</p>
                    </div>
                    <div>
                        <p>
                            Imagine having direct access to a software expert, ready to assist you with your software needs at any time.
                            I can provide you with innovative solutions and technical guidance to overcome challenges and achieve your goals.
                            Together, we can build software that not only meets but exceeds your expectations.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About