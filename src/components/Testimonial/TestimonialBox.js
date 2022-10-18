import React from 'react'

export default function TestimonialBox({image,description,name,company}) {
    return (
        <div className="grid msm:bg-white shadow-testimonial msm:px-6 msm:py-14 grid-cols-1 msm:grid-cols-2 gap-5">
            <img className="h-full w-full " src={image} alt="" />
            <div className="px-2 pb-3 msm:pb-0 msm:px-0">
                <img className="h-8 w-8 mb-3" src="Vector.png" alt="" />
                <p className="text-lg font-semibold">‘’{description}’’ </p>
                <h4 className=" text-base sm:text-lg smd:text-xl font-bold my-1.5">{name}</h4>
                <h4 className="text-base sm:text-lg smd:text-xl font-bold text-Primary-Colour">{company}</h4>
            </div>
        </div>
    )
}
