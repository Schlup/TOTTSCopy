// src/pages/HomePage.tsx
import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
// Importe outras seções aqui (Solucoes, Conteudos, Contato)
import Footer from '../components/layout/Footer';
import Reminder from '../components/common/Reminder';
import LogoSlider from '../components/sections/LogoSlider';
import DemoForm from '../components/sections/DemoForm';
import Courses from '../components/sections/Courses';

const HomePage: React.FC = () => {
  return (
    <>
      <Reminder />
      <Header />
      <main>
        <Hero />
        <LogoSlider />
        <About />
        <Courses />
        <DemoForm />
        {/* Renderize outras seções aqui */}
        {/* <SolutionsSection /> */}
        {/* <ContentSection /> */}
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;