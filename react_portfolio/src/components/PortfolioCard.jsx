import React from 'react'

const PortfolioCard = ({ src, alt }) => {
    return (
        <div className='basis-1/3 flex-1'>
            <img src={src} alt={alt} className='rounded-lg object-cover' width={'100%'} height={'100%'} />
        </div>
    )
}

export default PortfolioCard