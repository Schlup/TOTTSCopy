import React from 'react';

const About: React.FC = () => {
  return (
    <section id="quem-somos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-text">
            Quem <span className="text-brand-primary">Somos</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Uma breve descrição sobre a TOT Educa, sua missão, visão e valores.
            O site de referência tem alguns cards aqui.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-light-gray p-6 rounded-lg shadow-md text-center">
            <div className="text-brand-primary text-5xl mb-4">
              💡
            </div>
            <h3 className="text-xl font-semibold text-dark-text mb-2">Missão</h3>
            <p className="text-gray-600">
              Nossa missão é revolucionar a educação através de tecnologia e conteúdo de ponta.
            </p>
          </div>
          <div className="bg-light-gray p-6 rounded-lg shadow-md text-center">
            <div className="text-brand-secondary text-5xl mb-4"> {/* Placeholder para ícone */}
              🎯
            </div>
            <h3 className="text-xl font-semibold text-dark-text mb-2">Visão</h3>
            <p className="text-gray-600">
              Ser referência em soluções educacionais inovadoras que transformam o futuro.
            </p>
          </div>
          <div className="bg-light-gray p-6 rounded-lg shadow-md text-center">
            <div className="text-brand-primary text-5xl mb-4">
              💖
            </div>
            <h3 className="text-xl font-semibold text-dark-text mb-2">Valores</h3>
            <p className="text-gray-600">
              Compromisso, inovação, excelência e paixão por educar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;