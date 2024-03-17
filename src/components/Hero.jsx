import React from 'react'
import background from "../../public/img/bg.png";

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className='bg-cover bg-center bg-no-repeat] h-[450px] mt-10 rounded-2xl md:px-44 px-5 md:pt-24 pt-20 space-y-7'>

            <h1 className='md:text-4xl text-2xl md:font-bold font-semibold text-white text-center'>Discover an exceptional cooking class tailored for you!</h1>
            <p className='text-white text-center'>Join me on an exclusive culinary journey crafted just for you! In this exceptional cooking class, we'll delve into the world of flavors, techniques, and creativity, all tailored to your tastes and skill level.</p>
            <div className='flex gap-5 justify-center items-center'>
                <button className='md:px-5 px-3 md:py-3 py-2 rounded-full bg-green-400 font-semibold'>Explore Now</button>
                <button className='md:px-5 px-3 md:py-3 py-2 rounded-full border-white text-white border font-semibold'>Our Feedback</button>
            </div>

        </div>
    )
}

export default Hero