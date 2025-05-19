import React from 'react';
import Button from '../common/Button';

const DemoForm: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-1xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Agende uma demonstração
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="bg-neutral-800 text-white rounded-4xl shadow-md p-8 md:p-10">
          <form className="space-y-6 mx-auto max-w-6xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border bg-white text-black border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 bg-white text-black rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="Seu email corporativo"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-black focus:ring-orange-500 focus:border-orange-500"
                placeholder="Qual empresa você trabalha?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 bg-white text-black rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="Digite aqui como podemos te ajudar"
              ></textarea>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm mb-4">
                CAPTCHA: <strong>AQUI</strong>
              </p>
              <Button
                type="submit"
                variant="demonstracao"
                size="lg"
                className="w-full"
              >
                Agendar Demonstração
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;