import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function EatsEzy({state}) {
    
    // const location = useLocation()
    // const [showGif, setShowGif] = useState("etzezy_animation.gif")
    // console.log(location)
    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('This will run after 2 second!')
    //         setShowGif("eatsezy-mockup.png")
    //     }, 2300);
    // }, []);
    return (
        <div className={`${state.bg} flex max-w-[75vw]`}>
            <div className='text-white flex flex-col mx-auto justify-center pl-4 mvsm:pl-6 md:pl-20 msm:pl-10'>
                <h3 className='text-4xl lg:text-5xl xl:text-6xl font-bold'>{state.title}</h3>
                <p className='text-xl mt-4 mb-5 lg:font-semibold'>{state.shortDesc}</p>
                <p className='text-xl lg:font-semibold'>{state.Description}</p>
            </div>
            <img className='w-[41%] px-8 m-auto' src={state.image} alt="" srcset="" />
        </div>
    )
}
