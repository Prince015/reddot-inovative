import React from 'react'

export default function ContactUsBox({country,address,number,email,image,bg}) {
  return (
    <div className={`${bg} py-4 gap-0 msm:gap-9 msm:flex-row flex-col-reverse flex`}>
        <div className=' flex-[0.5] flex flex-col items-center justify-center'>
            <h2 className='text-xl sm:text-2xl mvsm:text-3xl md:text-4xl xl:text-5xl  font-extrabold text-secondary-2'>
              {country}</h2>
            <p className='my-5 w-11/12 text-center mvsm:font-semibold'>{address}</p>
            <p className='mvsm:font-semibold text-sm text-Primary-Colour'>{number}</p>
            <p className='my-1 mvsm:font-semibold text-sm text-Primary-Colour'>{email}</p>
        </div>
        <img className='msm:w-1/2 h-1/2 msm:h-auto flex-[0.5]' src={image} alt="" />
    </div>
  )
}
