// import './App.css';

import { useRef } from "react";
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

  return (
    <Router>
      <Navbar executeScroll={executeScroll} servicesRef={servicesRef} industriesRef={industriesRef} homeRef={homeRef} aboutRef={aboutRef} />
      <Routes>
        <Route path="/" element={<Home executeScroll={executeScroll} ourWorksRef={ourWorksRef} servicesRef={servicesRef} industriesRef={industriesRef} homeRef={homeRef} aboutRef={aboutRef} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/ourworks" element={<ExploreWorks />} >
          <Route index element={<EatsEzy state={{ title: 'EatsEzy', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum " ,bg:'bg-Primary-Colour'
            }} />} />
          <Route path="bigfoot" element={<EatsEzy state={{ title: 'Bigfoot', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum " ,bg:'bg-[#D74008]'
            }} />} />
          <Route path="acai" element={<EatsEzy state={{ title: 'Acai', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum " ,bg:'bg-[#592D80]'
            }} />} />
          <Route path="legate" element={<EatsEzy state={{ title: 'LEGATE', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum " ,bg:'bg-[#F47325]'
            }} />} />
          <Route path="express-cart" element={<EatsEzy state={{ title: 'Express Cart', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum " ,bg:'bg-[#F7BE47]'
            }} />} />
          <Route path="you-adme" element={<EatsEzy state={{ title: 'YOU adme', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum " ,bg:'bg-[#FDCF09]'
            }} />} />
          <Route path="orizon-motorcycles" element={<EatsEzy state={{ title: 'Orizon Motorcycles', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum " ,bg:'bg-[#F2994A]'
            }} />} />
          <Route path="osma" element={<EatsEzy state={{ title: 'OFMS', shortDesc: "Mobile App Design & Developement", Description: "Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum " ,bg:'bg-[#F79635]'
            }} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
