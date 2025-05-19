import React from 'react';
import Button from '../common/Button';
import heroImage from '../../assets/StockCake-Digital Reality Overwhelms_1747453603.jpg';

const Hero: React.FC = () => {

  return (
    <section
      className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/60 to-black/10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Aumente o engajamento dos seus treinamentos corporativos
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Aqui na TOT Educação Corporativa te ajudamos a revolucionar o Treinamento e Desenvolvimento da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="demonstracao" size="lg" onClick={() => console.log('Saiba mais clicado')}>
              Agendar demonstração
            </Button>
          </div>
        </div>
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};

export default Hero;