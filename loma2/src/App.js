import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Service";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
// import Login from "./Login";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      {/* <Login/> */}
    </div>
  );
};

export default App;


