import React from 'react'

const ServiceCard = ({ image, service, serviceDesc, toolsDesc, tool1, tool2, tool3 }) => {
    console.log(service)
    return (
        <div className='shadow-lg shadow-cyan-500/50 text-center p-10 my-10 rounded-xl flex flex-col justify-center items-center'>
            <img src={image} alt="service" width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>{service}</h3>
            <p className='py-2'>{serviceDesc}</p>
            <h4 className='py-4 text-teal-500'>{toolsDesc}</h4>
            <p className='py-1 text-gray-800 dark:text-white'>{tool1}</p>
            <p className='py-1 text-gray-800 dark:text-white'>{tool2}</p>
            <p className='py-1 text-gray-800 dark:text-white'>{tool3}</p>
        </div>
    )
}

export default ServiceCard