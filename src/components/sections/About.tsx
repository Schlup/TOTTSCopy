import React from 'react';
import Button from '../common/Button';

const About: React.FC = () => {
  return (
    <section id="quem-somos" className="pb-12 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-light-gray p-6 rounded-lg text-left">
            <h3 className="font-semibold mb-2 text-4xl">Nossas soluções</h3>
            <p className="text-gray-600 text-xl py-4">
              Escolha a solução que atende as suas necessidades e revolucione a área de Treinamento e Desenvolvimento da sua empresa.
            </p>
            <Button variant="demonstracao" size="lg" onClick={() => console.log('Saiba mais clicado')}>
              Agendar demonstração
            </Button>
          </div>

          <div className="bg-light-gray p-6 px-12 rounded-2xl shadow-lg text-left">
            <div className="text-2xl font-bold mb-4">
              Cursos de Prateleira
            </div>
            <p className="text-gray-600 text-xl">
              Prontos para disponibilizar de forma rápida para seus colaboradores.
            </p>
          </div>

          <div className="bg-light-gray p-6 px-12 rounded-2xl shadow-lg text-left">
            <div className="text-2xl font-bold mb-4">
              Fábrica de Conteúdo
            </div>
            <p className="text-gray-600 text-xl">
              Desenvolvimento de cursos corporativos com experiência de aprendizagem.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-light-gray p-6 px-12 text-center text-orange-600">
            <div className="text-4xl font-bold mb-4">
             + de 2,5 milhões
            </div>
            <p className="text-gray-600 text-xl">
              de aprendizes impactados com os nossos cursos.
            </p>
          </div>

          <div className="bg-light-gray p-6 px-12 text-center text-orange-600">
            <div className="text-4xl font-bold mb-4">
              + de 1200
            </div>
            <p className="text-gray-600 text-xl">
              projetos entregues para os nossos clientes.
            </p>
          </div>

          <div className="bg-light-gray p-6 px-12 text-center text-orange-600">
            <div className="text-4xl font-bold mb-4">
              97%
            </div>
            <p className="text-gray-600 text-xl">
              de engajamento e conclusão dos cursos desenvolvidos pela TOT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;