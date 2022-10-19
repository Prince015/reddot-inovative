import React from 'react'

export default function ExploreWorksBox({bg,title,subtitle,description,image}) {
  return (
    <div className={`${bg} text-white pb-6 px-4 mvsm:px-6 pt-10`}>
        <h3 className='font-bold text-2xl sm:text-3xl'>{title}</h3>
        <h4 className='text-base sm:text-xl my-3 font-semibold'>{subtitle}</h4>
        <p className='text-sm sm:text-base'>{description}</p>
        <img className='mx-auto mt-4 w-1/2' src={image} alt="" srcset="" />
    </div>
  )
}
