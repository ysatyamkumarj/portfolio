import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const navHandler = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#52616B] text-[#F0F5F9]'>
            <div>
                <span className='font-bold text-xl hover:cursor-pointer'>
                    <Link to='home' smooth={ true } duration={ 500 }>Satyamkumar Yadav</Link>
                </span>
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={ true } duration={ 500 }>Home</Link>
                </li>
                <li>
                    <Link to='about' smooth={ true } duration={ 500 }>About</Link>
                </li>
                <li>
                    <Link to='skills' smooth={ true } duration={ 500 }>Skills</Link>
                </li>
                <li>
                    <Link to='work' smooth={ true } duration={ 500 }>Work</Link>
                </li>
            </ul>

            {/* Hamburger menu */}
            <div onClick={ navHandler } className='md:hidden z-10'>
                { !nav ? <FaBars /> : <FaTimes /> }
            </div>

            {/* Mobile menu */}
            <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#52616B] flex flex-col justify-center items-center' }>
                <li className='py-6 text-4xl'>
                    <Link onClick={ navHandler } to='home' smooth={ true } duration={ 500 }>Home</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={ navHandler } to='about' smooth={ true } duration={ 500 }>About</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={ navHandler } to='skills' smooth={ true } duration={ 500 }>Skills</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={ navHandler } to='work' smooth={ true } duration={ 500 }>Work</Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://in.linkedin.com/in/ysatyamkumarj/' target='_blank'>
                            LinkedIn <FaLinkedin size={ 30 } />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/ysatyamkumarj/' target='_blank'>
                            GitHub <FaGithub size={ 30 } />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='mailto: satyamkumar@satyamkumaryadav.com'>
                            Email <HiOutlineMail size={ 30 } />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;