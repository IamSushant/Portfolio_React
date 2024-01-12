import { useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'


const NavBar = ({ dark, handleDarkMode }) => {
    const changeDarkMode = () => {
        handleDarkMode(!dark)
    }
    return (
        < nav className={`py-3 mb-12 px-20 flex justify-between sticky top-0 bg-gradient-to-br from-blue-400 to-cyan-200`
        }>
            {/* <h1 className='text-xl font-burtons'>developedbysan</h1> */}
            {/* <img src="https://freesvg.org/storage/img/thumb/programmer_work.png" alt="logo" width={60} height={40} /> */}
            <a href="/">
                <img src="https://freesvg.org/storage/img/thumb/programmer_work.png" alt="Logo" width={60} height={29} />
            </a>
            <ul className='flex items-center dark:bg-gray-800'>
                <li><BsFillMoonStarsFill className='cursor-pointer text-2xl' onClick={changeDarkMode} /></li>
                <li>
                    <a className='bg-gradient-to-r from-cyan-500 to-teal-500 hover:to-teal-300 text-white px-4 py-2 rounded-md ml-8' href="#">
                        Resume
                    </a>
                </li>
                <li>
                    <a className='bg-gradient-to-r from-cyan-500 to-teal-500 hover:to-teal-300 text-white px-4 py-2 rounded-md ml-8' href="#services">
                        Services
                    </a>
                </li>
                <li>
                    <a className='bg-gradient-to-r from-cyan-500 to-teal-500 hover:to-teal-300 text-white px-4 py-2 rounded-md ml-8' href="#portfolio">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a className='bg-gradient-to-r from-cyan-500 to-teal-500 hover:to-teal-300 text-white px-4 py-2 rounded-md ml-8' href="#contact">
                        Contact Us
                    </a>
                </li>
            </ul>
        </nav >
    )
}

export default NavBar