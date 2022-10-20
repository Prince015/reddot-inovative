import React from 'react'

export default function ExploreWorksBox({bg_image,bg_olour,title,subtitle,description,image}) {
  return (
    <div
    // style={{backgroundImage:`url(${bg_image})`}} 
    className={`${bg_olour} text-white relative  pb-6 px-4 mvsm:px-6 pt-10`}>
        <h3 className='font-bold text-2xl sm:text-3xl'>{title}</h3>
        <h4 className='text-base sm:text-xl my-3 font-semibold'>{subtitle}</h4>
        <p className='text-sm sm:text-base'>{description}</p>
        <img className='mx-auto w-[40%] mt-4 ' src={image} alt="" />
        <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[80%] max-w-[80%]' src={bg_image} alt="" />
    </div>
  )
}
