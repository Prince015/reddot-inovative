import React, { useEffect, useRef, useState } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import { handleScroll } from '../components/Helper/Helper';
import InovateBox from '../components/Inovate/InovateBox'
import OurTeamBox from '../components/OurTeam/OurTeamBox'

export default function AboutUs({setVisible,executeScroll}) {

  let aboutBody = document.getElementsByClassName("about_body")[0]
  const [prevScrollpos, setPrevScrollPos] = useState(0);
  const teamRef = useRef(null)
  useEffect(() => {
    if (!aboutBody) {
      aboutBody = document.getElementsByClassName("about_body")[0]
    }
    aboutBody?.addEventListener('scroll',()=>handleScroll(aboutBody,prevScrollpos,setVisible,setPrevScrollPos));
    return () => aboutBody?.removeEventListener('scroll',()=>handleScroll(aboutBody,prevScrollpos,setVisible,setPrevScrollPos))
  },[aboutBody?.scrollTop])
  
  useEffect(() => {
    setVisible(true)
  }, [])
  return (
    <div className=" h-screen about_body sm:snap-mandatory layout overflow-auto sm:snap-y absolute">
      <div style={{ "backgroundImage": 'url("about-us-pattern.png")' }} className="mx-4 pt-24 snap-start aboutUsHero bg-contain h-screen bg-no-repeat msm:bg-right bg-center mvsm:mx-6 md:mx-20 msm:mx-10">

        <h1 className="text-2xl vsm:text-3xl sm:text-4xl mvsm:text-5xl md:text-7xl  xl:text-8xl text-secondary-2 font-black">
          We create digital experiences
        </h1>
        <p className="text-xl sm:text-2xl text-secondary-2 font-extrabold my-4 mvsm:my-7">
        <ReactTypingEffect
        speed={100}
        eraseSpeed={100}
        eraseDelay={2000}
        typingDelay={2000}
        cursor="_"
            text={["Innovate", "Automate", "Acclerate"]}

          />
        </p>
        <p className='font-semibold msm:w-1/2'>
          Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy
        </p>
        <div onClick={() => {
                executeScroll(teamRef);
              }} className=" border-2 border-secondary-2 rounded-full h-12 w-7 cursor-pointer left-1/2 -translate-x-1/2 absolute bottom-24 lg:mt-0" >
          <div className="border bg-secondary-2 border-secondary-2 h-2 rounded-full mx-auto w-fit mt-2 animate-curser_upDown">
            
          </div>
        </div>
      </div>
      <div ref={teamRef} className="px-4 snap-start mvsm:px-6 md:px-20 msm:px-10 bg-white flex flex-col items-center py-8 gap-5">
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
      <div className="snap-start py-8 px-4 mvsm:px-6 md:px-20 msm:px-10 bg-white flex flex-col items-center gap-5">
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
      <div className="snap-start">
        <Footer />
      </div>
      <div className="snap-start">
        <FooterBottom />
      </div>
    </div>
  )
}
