import React from 'react';
import Navigation from './components/Navigation';
import MainCarousel from './components/MainCarousel';
import SocialMediaJumbotron from './components/SocialMediaJumbotron';
import Services from './components/Services';
import TwoColumnSection from './components/TwoColumnSection';
import FixedBackground from './components/FixedBackground';
import ContactJumbotron from './components/ContactJumbotron';
import TwoColumnMap from './components/TwoColumnMap';
import EmailJumbotron from './components/EmailJumbotron';
import FooterComponent from './components/FooterComponent';
import Socket from './components/Socket';

function App() {
  return (
    <>
      <Navigation />
      <MainCarousel />
      <SocialMediaJumbotron />
      <Services />
      <TwoColumnSection />
      <FixedBackground />
      <ContactJumbotron />

      <TwoColumnMap />
      <EmailJumbotron />
      <FooterComponent />
      <Socket />
    </>
  );
}

export default App;
