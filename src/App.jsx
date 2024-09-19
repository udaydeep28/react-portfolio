// import React from 'react'
import Nav from "./nav.jsx";
import Home from "./home.jsx";
import Skills from "./skills.jsx";
import Project from "./project.jsx";
import Contact from "./contact.jsx";
import Footer from "./footer.jsx";
import ScrollToTop from "./scroller.jsx";

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Skills />
      <Project />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
};
export default App;
