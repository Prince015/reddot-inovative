import React from 'react'
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import InovateBox from '../components/Inovate/InovateBox'
import OurTeamBox from '../components/OurTeam/OurTeamBox'

export default function AboutUs() {
  return (
    <div className="mt-8 left-0 top-[10vh] absolute">
      <div style={{ "backgroundImage": 'url("about-us-pattern.png")' }} className="mx-4 aboutUsHero  bg-contain h-[70vh] msm:h-[60vh] lg:h-[80vh] xl:h-[90vh] bg-no-repeat msm:bg-right-top bg-left-bottom mvsm:mx-6 md:mx-20 msm:mx-10">

        <h1 className="text-2xl vsm:text-3xl sm:text-4xl mvsm:text-5xl md:text-7xl  xl:text-8xl text-secondary-2 font-black">
          We create digital experiences
        </h1>
        <p className="text-xl sm:text-2xl text-secondary-2 font-extrabold my-4 mvsm:my-7">
          Acclerate . Automate . Innovate
        </p>
        <p className='font-semibold msm:w-1/2'>
          Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy
        </p>
      </div>
      <div className="px-4 mvsm:px-6 md:px-20 msm:px-10 bg-white flex flex-col items-center pb-16 gap-5">
        <h4 className="text-Primary-Colour tracking-widest font-semibold ">
          THE GENIUSES BEHIND OUR WORKS
        </h4>
        <h2 className="text-secondary-2 text-center text-2xl msm:text-3xl md:text-5xl lg:text-6xl font-extrabold">
          Our Team
        </h2>
        <div className='flex gap-7 justify-center'>
          <OurTeamBox phone={true} name='JOHN SMITH' image='unsplash_DItYlc26zVI.png' intro='Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy ' position='FOUNDER' />
          <OurTeamBox phone={null} name='JOHN SMITH' image='unsplash_DItYlc26zVI.png' intro='Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy ' position='FOUNDER' />
        </div>
      </div>
      <div className="px-4 mvsm:px-6 md:px-20 msm:px-10 bg-white flex flex-col items-center gap-5">
        <h4 className="text-Primary-Colour tracking-widest font-semibold ">
          HOW WE INNOVATE
        </h4>
        <h2 className="text-secondary-2 text-center text-2xl msm:text-3xl md:text-5xl lg:text-6xl font-extrabold">
          The Innovation Journey
        </h2>
        <div className='flex flex-wrap mt-8 justify-center items-center gap-10'>
          <InovateBox image='consulatation.svg' title='Consultation' description='' />
          <InovateBox image='business-analysis.svg' title='Business Analysis' description='' />
          <InovateBox image='design-and-dev.svg' title='Design & Developement' description='' />
          <InovateBox image='support.svg' title='Support & Maintenance' description='' />
          <InovateBox image='go-live.svg' title='Transition & Go Live' description='' />
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </div>
  )
}