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
            <img className='' src="https://static.wixstatic.com/media/ca5485_dae6beea0cc14014950f2550960c9e69~mv2.png/v1/fill/w_180,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Livros%201.png" alt="Cursos de Prateleira Imagem" />
            <div className="text-2xl font-bold mb-4">
              Cursos de Prateleira
            </div>
            <p className="text-gray-600 text-xl">
              Prontos para disponibilizar de forma rápida para seus colaboradores.
            </p>
          </div>

          <div className="bg-light-gray p-6 px-12 rounded-2xl shadow-lg text-left">
            <img src="https://static.wixstatic.com/media/ca5485_ed08a34cb636472ebc94a03185d084fe~mv2.png/v1/fill/w_200,h_199,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%C3%93culos%20VR.png" alt="Fábrica de Conteúdo Imagem" />
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

          <div className="p-6 px-12 text-center  flex flex-col items-center justify-center">
            <img loading='lazy' className='w-36' src="https://static.wixstatic.com/media/ca5485_f8c98c6429ee4b8892ccb319e3412db7~mv2.gif" alt="Gif exibindo pessoas" />
            <div className="text-orange-600 text-4xl font-bold mb-4 align-middle">
              + de 2,5 milhões
            </div>
            <p className="text-gray-600 text-xl">
              de aprendizes impactados com os nossos cursos.
            </p>
          </div>

          <div className="p-6 px-12 text-center  flex flex-col items-center justify-center">
            <img loading='lazy' className='w-36' src="https://static.wixstatic.com/media/ca5485_54e13942c1654a3193e1f5bca8c2f064~mv2.gif" alt="Gif exibindo um computador" />
            <div className="text-orange-600 text-4xl font-bold mb-4 align-middle">
              + de 1200
            </div>
            <p className="text-gray-600 text-xl">
              projetos entregues para os nossos clientes.
            </p>
          </div>

          <div className="p-6 px-12 text-center  flex flex-col items-center justify-center">
            <img loading='lazy' className='w-36' src="https://static.wixstatic.com/media/ca5485_ebd3d27817f44f7dbc98816de3cf6fc6~mv2.gif" alt="Gif exibindo um capelo" />
            <div className="text-orange-600 text-4xl font-bold mb-4 align-middle">
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