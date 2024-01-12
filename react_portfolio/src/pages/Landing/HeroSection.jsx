import { AiFillTwitterCircle, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import { deved } from '../../assets'

const HeroSection = () => {
    return (
        <section className='min-h-screen max-container '>
            <div className='text-center p-10'>
                <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Sushant</h2>
                <h3 className='text-2xl py-2 md:text-3xl'>Developer & Designer.</h3>
                <p className='text-base py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>
                    Freelancer providing services for programming and design content needs. Join me down below and let's get cracking!
                </p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
            </div>
            <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 overflow-hidden md:w-96 md:h-96 hover:animate-pulse relative z-10'>
                <img src={deved} alt="deved" className='object-fill' />
            </div>
        </section>
    )
}

export default HeroSection;