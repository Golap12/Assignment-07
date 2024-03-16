import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center mt-10'>
            <div>
                <h1 className='md:text-3xl text-2xl md:border-0 border-2 border-green-400 rounded-full p-2 font-bold'>Recipe <span className='text-green-600'>Calories</span></h1>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex gap-10 text-sm font-normal text-[#666666]'>
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>

            <div className='flex gap-3'>
                <div className='md:flex gap-2 items-center bg-gray-100 px-4 rounded-3xl hidden'>
                         <button><img className='h-[18px]' src="./img/search.png" alt="" /></button>
                         <input className='bg-gray-100 text-[12px] outline-none' type="text" name="" id="" placeholder='Search'/> 
                </div>


                <div className='bg-green-400 w-[40px] h-[40px] rounded-full flex justify-center items-center'>
                      <button><img className='h-[24px]' src="./img/user.png" alt="" /></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar