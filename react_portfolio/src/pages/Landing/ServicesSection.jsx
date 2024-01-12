import ServiceCard from '../../components/ServiceCard'
import { services } from '../../constants'

const ServicesSection = () => {
    return (
        <section id='services' className='max-container'>
            <div>
                <h3 className='text-3xl font-bold py-1'>Services I offer</h3>
                <p className='text-base leading-8 py-2 text-gray-800 dark:text-white'>
                    Since the beginning of my journey as a freelance designer and developer, I've done remote work for <span className='text-teal-500'>agencies</span> consulted for <span className='text-teal-500'>startups</span> and collaborated with talented people to create digital products for both business & consumer use.
                </p>
                <p className='text-base py-2 text-gray-800 dark:text-white'>
                    I offer from wide range of services, including programming and teaching.
                </p>
            </div>
            <div className='lg:flex gap-10'>
                {services.map((service) => (
                    <ServiceCard key={service.service} {...service} />
                ))}
            </div>
        </section>
    )
}

export default ServicesSection