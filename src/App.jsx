import React from "react"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar";
import { InstagramFeed } from "./components/InstagramFeed";
import { Quote } from "./components/Quote";
import { About } from "./components/About";
import { Events } from "./components/Events";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sponsors } from "./components/Sponsors";
import { PastEvents } from "./components/PastEvents";
import { Gala } from "./components/Gala";

function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          {/* home page */}
          <Route path="/" element={
            <>
              <Navbar/>
              <Home/>
              <Quote/>
              <InstagramFeed/>
              <Sponsors/>
            </>
          }>
          </Route>
          {/* about-us page */}
          <Route path="/about" element={
            <>
              <Navbar/>
              <About/>
            </>
          }>           
          </Route>

          {/* events page */}
          <Route path="/events" element={
            <>
              <Navbar/>
              <Events/>
              <PastEvents/>
            </>
          }>
          </Route>

          {/* contact page */}
          <Route path="/contact" element={
            <>
              <Navbar/>
              <Contact/>
            </>
          }>
          </Route>

          {/* gala page */}
          <Route path="/gala" element={
            <>
              <Navbar/>
              <Gala/>
            </>
          }>

          </Route>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;