import React, { useEffect } from 'react'
import ContactUsBox from '../components/ContactUs/ContactUsBox'
import FooterBottom from '../components/Footer/FooterBottom'

export default function ContactUs({setVisible}) {

    useEffect(() => {
        setVisible(true)
      }, [])

    return (
        <div className="w-full mvsm:mt-8 top-24 absolute">
            <div className="relative -z-[2] h-[70vh] msm:h-[60vh] lg:h-[80vh] xl:h-[90vh] px-6 mx-0 bg-secondary-2 md:mx-8 ">
                <div className='z-[2]'>
                    <h1 className="text-2xl pt-16 mvsm:pt-16 vsm:text-3xl sm:text-4xl mvsm:text-5xl md:text-7xl  xl:text-8xl text-white font-black">
                        Let’s Innovate
                    </h1>
                    <h1 className="text-2xl pt-2 mvsm:pt-2 vsm:text-3xl sm:text-4xl mvsm:text-5xl md:text-7xl  xl:text-8xl text-white font-black">
                        something great
                    </h1>
                    <h1 className="text-2xl pt-2 mvsm:pt-2 vsm:text-3xl sm:text-4xl mvsm:text-5xl md:text-7xl  xl:text-8xl text-white font-black">
                        together !
                    </h1>
                </div>
                <div className='absolute top-0 right-8 flex'>
                    <img className='sm:h-[50vh] h-full w-[30vw] msm:w-auto msm:h-[40vh] lg:h-[60vh] xl:h-[70vh]' src="Group-39416.svg" alt="" srcset="" />
                    <img className='sm:h-[40vh] h-full w-[30vw] msm:w-auto msm:h-[30vh] lg:h-[50vh] xl:h-[60vh]' src="Group-39417.svg" alt="" srcset="" />
                    <img className='sm:h-[45vh] h-full w-[30vw] msm:w-auto msm:h-[35vh] lg:h-[55vh] xl:h-[65vh]' src="Group-39416.svg" alt="" srcset="" />
                </div>
            </div>
            <div className='bg-white shadow-[0px_8px_16px_rgba(0,0,0,0.25)] mx-2 md:mx-14 -mt-10 mvsm:-mt-12 lg:-mt-16 px-3 py-4 mvsm:px-8 mvsm:py-14'>
                <h2 className='text-xl sm:text-2xl mvsm:text-3xl md:text-4xl xl:text-5xl  font-extrabold text-secondary-2'>
                    Tell Us About Your Requirements
                </h2>
                <p className='pt-4 text-base sm:text-lg mvsm:text-xl md:text-2xl font-medium mvsm:font-bold text-secondary-2'>Complete the form below, or call us on +65 12345656. Our team
                    will be there to help you.
                </p>
                <form className='flex mt-5 msm:mt-10 flex-col gap-6 mvsm:gap-8'>
                    <div className='flex flex-col max-w-screen-msm gap-2'>
                        <label className='mvsm:font-semibold w-fit' htmlFor="name ">Name</label>
                        <input className='border border-[#C4C4C4] rounded-sm px-4 py-1' type="text" name="name" id="name" />
                    </div>
                    <div className='flex flex-col max-w-screen-msm gap-2'>
                        <label className='mvsm:font-semibold w-fit' htmlFor="email">Email Address</label>
                        <input className='border border-[#C4C4C4] rounded-sm px-4 py-1' type="email" name="email" id="email" />
                    </div>
                    <div className='flex flex-col max-w-screen-msm gap-2'>
                        <label className='mvsm:font-semibold w-fit' htmlFor="number">Contact Number</label>
                        <input className='border border-[#C4C4C4] rounded-sm px-4 py-1' type="tel" name="number" id="number" />
                    </div>
                    <div className='flex flex-col max-w-screen-msm gap-2'>
                        <label className='mvsm:font-semibold w-fit' htmlFor="cpmpanyName">Company Name</label>
                        <input className='border border-[#C4C4C4] rounded-sm px-4 py-1' type="text" name="cpmpanyName" id="cpmpanyName" />
                    </div>
                    <div className='flex flex-col max-w-screen-msm gap-2'>
                        <label className='mvsm:font-semibold w-fit' htmlFor="howHelp">How Can We Help You?</label>
                        <textarea className='border border-[#C4C4C4] rounded-sm px-4 py-1' name="howHelp" id="howHelp" cols="30" rows="10"></textarea>
                    </div>
                    <button className="max-w-min bg-secondary px-14 rounded-sm py-2 text-white font-bold text-base">
                        Submit
                    </button>
                </form>
            </div>
            <div className='my-14'>
                <ContactUsBox country='SINGAPORE' address='7 TEMASEK BOULEVARD #12-07, SUNTEC TOWER ONE, Singapore, 038987' number='+65 123456789' email='contact@reddotinnovative.com' image='about-us-pattern.png' bg='bg-[#FFC8D2]' />
                <ContactUsBox country='INDIA' address='7 TEMASEK BOULEVARD #12-07, SUNTEC TOWER ONE, Singapore, 038987' number='+65 123456789' email='contact@reddotinnovative.com' image='india-office.png' bg='bg-[#CBE5FF]' />
                <ContactUsBox country='UAE' address='7 TEMASEK BOULEVARD #12-07, SUNTEC TOWER ONE, Singapore, 038987' number='+65 123456789' email='contact@reddotinnovative.com' image='uae-office.png' bg='bg-[#FEE5AB]' />
            </div>
            <FooterBottom />
        </div>
    )
}
