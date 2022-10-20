import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function EatsEzy({state}) {
    
    const location = useLocation()
    
    console.log(location)
    
    return (
        <div 
        // style={{backgroundImage:`url(${state.bg_image})`}} 
        className={`${state.bg} relative bg-contain bg-no-repeat bg-center flex max-w-[75vw]`}>
            <div className='text-white flex flex-col mx-auto justify-center pl-4 mvsm:pl-6 md:pl-20 msm:pl-10'>
                <h3 className='text-4xl lg:text-5xl xl:text-6xl font-bold'>{state.title}</h3>
                <p className='text-xl mt-4 mb-5 lg:font-semibold'>{state.shortDesc}</p>
                <p className='text-xl lg:font-semibold'>{state.Description}</p>
            </div>
            <img className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[80%] max-w-[60%]' src={state.bg_image} alt="" />
            <div className='z-[2] max-w-[30vw] my-auto'>
            <img className=' max-w-[68%] mx-auto '  src={state.image} alt="" srcset="" />
            </div>
        </div>
    )
}
