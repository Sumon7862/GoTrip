import React from 'react'

const SectionHead = ({ title, description }) => {
    return (
        <>
            <h1 className='text-amber-100'>{title}</h1>
            <p className='text-amber-100'>{description}</p>
        </>
    )
}

export default SectionHead
