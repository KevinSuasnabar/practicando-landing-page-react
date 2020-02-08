import React from 'react';
import Header from './components/header/header';
import Slider from './components/slider/slider';
import Qualifiers from './components/qualifiers/qualifiers';
import Offers from './components/offers/offers';
import About from './components/about/about';
import Programs from './components/programs/programs';
import Testimonials from './components/testimonials/testimonials';
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <Qualifiers></Qualifiers>
      <Offers></Offers>
      <About></About>
      <Programs></Programs>
      <Testimonials></Testimonials>
      
      
    </div>
    
  );
}

export default App;
