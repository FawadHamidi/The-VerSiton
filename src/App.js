import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import aboutimage from './images/Frame 19.png';
// import aboutimage1 from './images/download.png';
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <About image={aboutimage} title="Web3 Junction: Where Beginners Meet Professional's" button='Know More' /> 
      <Feature/>
      <Contact/>
    </div>
  );
}

export default App;
