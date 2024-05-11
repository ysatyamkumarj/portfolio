import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#F0F5F9]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#52616B] font-bold'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#52616B]'>Satyamkumar Yadav</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#1E2022]'>I'm a Full Stack Developer.</h2>
                <p className='text-[#1E2022] py-4 max-w-[700px]'>I'm a full stack developer specializing in building (and occasionally designing) exceptional digital experiences. Welcome to my corner of the internet. I'm glad you're here!</p>
                <div>
                    <Link to='work' smooth={ true } duration={ 500 }>
                        <button className='group border-2 border-[#1E2022] px-6 py-3 my-2 flex items-center hover:bg-[#52616B] hover:text-[#F0F5F9] hover:border-[#52616B]'>View Work 
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;