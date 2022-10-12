import React from 'react'

export default function OurTeamBox({phone,image,name,position,intro}) {
  return (
    <div className={`${!phone ? 'flex':'hidden'} msm:flex flex-col justify-center items-center`}>
      <div className='-rotate-45 justify-center mx-auto my-14 items-center flex h-48 w-48 md:h-56 md:w-56 overflow-hidden'>
        <img className='h-72 md:h-80 max-w-none  rotate-45' src={image} alt="" srcset="" />
      </div>
      <h3 className='text-secondary-2 mt-2 font-extrabold text-2xl lg:text-3xl'>{name}</h3>
      <p className='font-extrabold text-lg text-Primary-Colour '>{position}</p>
      <p className='font-semibold text-center'>{intro}</p>
      <div className='w-3/4 msm:w-auto flex gap-5 smd:gap-8 my-8 justify-between'>
        <img src="facebook.svg" alt="" srcset="" />
        <img src="twitter.svg" alt="" srcset="" />
        <img src="instagram.svg" alt="" srcset="" />
        <img src="linkedin.svg" alt="" srcset="" />
        <img src="google.svg" alt="" srcset="" />
      </div>
    </div>
  )
}
