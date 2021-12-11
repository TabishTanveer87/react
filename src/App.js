import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

import Home from './component/Home';
import ContactUs from './component/ContactUs';
import WhatWeDo from "./component/WhatWeDo";
import TermsConditions from "./component/TermsConditions";
import NotFound from "./component/NotFound";

function App() {
  return (
    <div className="App">
      
      <Header/>
      
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="contact-us" element={<ContactUs />}/>
        <Route exact path="what-we-do" element={<WhatWeDo />}/>
        <Route exact path="privacy-policy" element={<TermsConditions />}/>
        <Route exact path="terms-conditions" element={<TermsConditions />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
