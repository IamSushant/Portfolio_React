import ContactUsSection from './ContactUsSection'
import HeroSection from './HeroSection'
import PortfolioSection from './PortfolioSection'
import ServicesSection from './ServicesSection'

const LandingPage = ({ darkMode }) => {
    return (
        <div className={darkMode ? "dark" : ""}>
            <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-800'>
                <HeroSection />
                <ServicesSection />
                <PortfolioSection />
                <ContactUsSection />
            </main>
        </div>
    )
}

export default LandingPage