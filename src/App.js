import Start from './Amivel/Start'
import './App.css';
import Hero from './Amivel/Hero'
import Last from './Amivel/Last'
import Footer from './Amivel/Footer'
import Intro from './Amivel/Intro';
import Cards from './Amivel/Cards';
import Groups from './Amivel/Groups';
import Cyber from './Amivel/Cyber'
import Contact from './Amivel/Contact';
import Services from './Amivel/Services'
import Careers from './Amivel/Careers';
import ApplyForm from './Amivel/ApplyForm';
import SiteFooter from './Amivel/SiteFooter';
import {Routes,Route } from "react-router-dom";
import Opinion from './Amivel/Opinion';
import About from './Amivel/About';
import Industries from './Amivel/Industries';
import Product from './Amivel/Product';
import Security from './Amivel/Security';
import Jobs from './Amivel/Jobs';


function App() {
  return (
      <>
      <Routes>
        {/* CAREERS PAGE */}
        <Route path='/careers' element= {
          <>
          <Start />
          <Careers />
          <Jobs />
          </>
          } />
          {/* SERVICES PAGE */}
        <Route path='/services' element= {
          <>
          <Start />
          <Services />
          </>} />
          {/* industries */}
          <Route path='/industries' element={
            <>
            <Start />
            <Industries />
            {/* <SiteFooter /> */}
            </>
          } />
          {/* ABOUT PAGE */}
          <Route path='/about' element={
            <>
            <Start />
            <About />
            </>
          }/>
           {/* WHAT WE THINK */}
          <Route path='/think' element={
            <>
            <Start />
            <Opinion />
            </>
          }/>
          {/* CONTACT PAGE */}
        <Route path='/contact' element= {
          <>
          <Start />
          <Contact />
          <SiteFooter />
          </>
          } />
          {/* PRODUCT PAGE */}
          <Route path='/product' element={
            <>
            <Start />
            <Product />
            </>
          }/>
          {/* APPLY FORM */}
          <Route path='/applyform' element={
            <>
            <Start />
            <ApplyForm/>
            </>
          }/>
            {/* CYBER SECURITY */}
            <Route path='/security' element={
              <>
              <Start />
              <Security />
                </>
            }/>
          {/* HOME P>AGE */}
          <Route
          path="/"
          element={
            <>
       <Start />
      <Hero />
      <Intro />
      <Cards />
      <Groups />
      <Cyber />
      <Last />
      <Footer />

            </>
          } />
          </Routes>
    </>
  );
}

export default App;
