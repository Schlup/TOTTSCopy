import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contato</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>R. 7 de Setembro, 1760 - 9ª Andar - Centro</p>
              <p>Blumenau - SC, 89012-400</p>
              <p className='underline'>(47) 98499-3828</p>
              <p className='underline'>(47) 3516-4418</p>
              <p>contato@totadaca.com.br</p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Início</h3>
            <ul className="space-y-2 text-gray-300 underline">
              <li><a href="#" className="hover:text-white">Llomapage</a></li>
              <li><a href="#" className="hover:text-white">Fábrica de Comodão</a></li>
              <li><a href="#" className="hover:text-white">Cursos de Prateleira</a></li>
              <li><a href="#" className="hover:text-white">Aprenda com a TOT</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Se inscreva para receber novidades</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="ESCREVA O SEU NOME AQUI"
                  className="w-full px-4 py-2 bg-white border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="ESCREVA O SEU MELHOR E-MAIL AQUI"
                  className="w-full px-4 py-2 bg-white border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-700 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                  CAPTCHA
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition duration-200"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-white">
          <p>COPYRIGHT &copy; {currentYear} TOT EDUCAÇÃO CORPORATIVA. TODOS OS DIREITOS RESERVADOS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;