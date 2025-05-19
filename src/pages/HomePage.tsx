import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Footer from '../components/layout/Footer';
import Reminder from '../components/common/Reminder';
import LogoSlider from '../components/sections/LogoSlider';
import DemoForm from '../components/sections/DemoForm';
import Courses from '../components/sections/Courses';
import FreeContent from '../components/sections/FreeContent';

const HomePage: React.FC = () => {
  return (
    <>
      <Reminder />
      <Header />
      <main>
        <Hero />
        <LogoSlider />
        <About />
        <FreeContent />
        <Courses />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;