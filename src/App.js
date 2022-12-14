// import './App.css';

import { useEffect, useRef, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EatsEzy from "./components/ExploreWorks/EatsEzy";
import ExploreWorks from "./components/ExploreWorks/ExploreWorks";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";

function App() {

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const industriesRef = useRef(null)
  const servicesRef = useRef(null)
  const ourWorksRef = useRef(null)
  const executeScroll = (str) => {
    str.current?.scrollIntoView({ behavior: "smooth" });
  };

  // const window = document.getElementsByClassName("body")[0]
  const [prevScrollpos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset

    if (currentScrollPos > prevScrollpos) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }

  // console.log(window.getElementsByClassName('body'))

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // console.log(visible)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <Router>
      <Navbar visible={visible}  executeScroll={executeScroll} servicesRef={servicesRef} industriesRef={industriesRef} homeRef={homeRef} aboutRef={aboutRef} />
        <Routes>
          <Route path="/" element={<Home setVisible={setVisible} executeScroll={executeScroll} ourWorksRef={ourWorksRef} servicesRef={servicesRef} industriesRef={industriesRef} homeRef={homeRef} aboutRef={aboutRef} />} />
          <Route path="/about-us" element={<AboutUs executeScroll={executeScroll} setVisible={setVisible} />} />
          <Route path="/contact-us" element={<ContactUs setVisible={setVisible}/>} />
          <Route path="/ourworks" element={<ExploreWorks setVisible={setVisible} />} >
            <Route index element={<EatsEzy state={{
             bg_image : "../explore-eatsezy-bg.png",image: "../explore-eatzezy.png", title: 'EatsEzy', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ", bg: 'bg-Primary-Colour'
            }} />} />
            <Route path="bigfoot" element={<EatsEzy state={{
             bg_image : "../explore-bigfoot-bg.png",image: "../explore-bigfoot.png", title: 'Bigfoot', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ", bg: 'bg-[#D74008]'
            }} />} />
            <Route path="acai" element={<EatsEzy state={{
             bg_image : "../explore-acai-bg.png",image: "../explore-acai.png", title: 'Acai', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ", bg: 'bg-[#592D80]'
            }} />} />
            <Route path="legate" element={<EatsEzy state={{
             bg_image : "../explore-legate-bg.png",image: "../explore-legate.png", title: 'LEGATE', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ", bg: 'bg-[#F47325]'
            }} />} />
            <Route path="express-cart" element={<EatsEzy state={{
             bg_image : "null",image: "../explore-express-cart.png", title: 'Express Cart', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ", bg: 'bg-[#F7BE47]'
            }} />} />
            <Route path="you-adme" element={<EatsEzy state={{
             bg_image : "../explore-youadme-bg.png",image: "../explore-youadme.png", title: 'YOU adme', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ", bg: 'bg-[#FDCF09]'
            }} />} />
            <Route path="orizon-motorcycles" element={<EatsEzy state={{
             bg_image : "../explore-orizon-motors-bg.png",image: "../explore-orizon-motorcycles.png", title: 'Orizon Motorcycles', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ", bg: 'bg-[#F2994A]'
            }} />} />
            <Route path="osma" element={<EatsEzy state={{
             bg_image : "../explore-ofms-bg.png",image: "../explore-OFMS.png", title: 'OFMS', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ", bg: 'bg-[#F79635]'
            }} />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
