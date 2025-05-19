import React, { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Fábrica de Conteúdo', href: '#' },
    { label: 'Cursos de Prateleira', href: '#cursos-de-prateleira' },
    { label: 'Blog', href: '#blog' },
    { label: 'Biblioteca de Ebooks', href: '#biblioteca-de-ebooks' },
    { label: 'Plataforma', href: '#plataforma' },
    { label: 'Consultoria', href: '#consultoria' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <svg preserveAspectRatio="xMidYMid meet" data-bbox="0.16 0.58 657.35 239.982" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 658 241" height="101" width="100" data-type="ugc" role="presentation" aria-hidden="true">
                <g>
                  <path fill="#000000" d="M508.98 64.61v135.7c0 24.7 14.12 39.78 36.89 39.78 22.77 0 36.89-15.08 36.89-39.78V64.61h44.59c20.85 0 30.16-12.19 30.16-29.84s-9.3-29.84-32.72-29.84H466.95c-23.42 0-32.72 12.19-32.72 29.84s9.3 29.84 30.16 29.84h44.59Zm-434.06 0v135.7c0 24.7 14.12 39.78 36.89 39.78 22.77 0 36.89-15.08 36.89-39.78V64.61h44.59c20.85 0 30.16-12.19 30.16-29.84s-9.3-29.84-32.73-29.84H32.88C9.46 4.93.16 17.12.16 34.77s9.3 29.84 30.16 29.84h44.6Z"></path>
                  <path fill="url(#781ad0ce-76ea-42d7-9618-31628cb87ab2_comp-lgck3tpi_r_comp-lgck5zeo)" d="M424.2 190.5c-5.99 8.45-17.26 22.07-35.56 33.09-5.45 3.29-28.63 16.64-61.48 16.96-10.98.11-44.04-.05-74.21-23.32-40.11-30.93-44.09-78.79-44.52-93.29-.3-10.13-.71-34.86 14.25-61.31 14.47-25.59 35.22-38.43 44.4-43.41 42.52 3.53 85.05 7.07 127.57 10.6 2.7 2.66 7.59 8.26 9.99 16.83a37.7 37.7 0 0 1 1.32 12.36 38.415 38.415 0 0 1-10.52 2.89c-7.96 1-11.56-1.15-17.1.53-2.82.85-6.67 2.86-10.52 8.15a56.753 56.753 0 0 0-11.05-7.1c-2.83-1.38-5.5-2.4-7.89-3.16-5.42-1.51-14.44-3.32-25.51-2.1a67.308 67.308 0 0 0-23.05 6.85c-5.94 3.37-24.3 14.64-31.25 37.02a62.347 62.347 0 0 0-2.79 18.48c0 34.37 27.87 62.24 62.24 62.24 23.28 0 43.57-12.78 54.24-31.71l41.43 39.39.01.01Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                  <path fill="#000000" d="M376.05 230.15c-5.96 2.63-12.17 4.79-18.59 6.42-.65-1.58-1.57-3.15-2.67-4.67-.23.89-.47 1.65-.69 2.16-.69 1.6-3.24 3.78-4.7 3.86-3.74.2-4.09-2.28-2.68-5.2 1.63-3.37 2.02-4.13 2.11-7.43-.55-.51-1.09-1-1.64-1.48-10.11-8.82-8.07-9-8.93-.1-.51 5.33-2.75 12.33-7.8 16.55a123.66 123.66 0 0 1-8.82-.12c8.18-10.23 13-18.05 12.1-32.13-.59-4.01-2.36-6.66-6-5.65-.18.05-4.58 20.68-12.99 29.59l-5.66 6.91c-3.23-.51-6.41-1.14-9.54-1.9v-.02c.14-1.91 28.48-18.48 19.56-50.05-1.58-5.6-10.6-23.62-31.69-27.96-19.17-3.94-38.08.72-43.46-1.04-2.51-.83-3.05-8.84 4.18-9 26.51-.59 39.27 2.79 42.74-1.29 1.85-2.17 2.89-5.42-2.57-16.39-3.9-7.83-5.22-31.69-1.29-35.03 1.4-1.19 4.04-.85 5.46.32 1.79 1.47 1.66 4.35 1.61 5.46-1.61 32.5 12.7 52.89 12.53 52.06-2.45-12.69 2.16-14.94 3.86-14.78 4.42.4 3.27 9.08 3.42 11.13 1.93 26.91 17.23 43.31 32.09 58.92 6.48 6.8 19.58 16.53 30.05 20.86h.01ZM327.76.58c66.19 0 119.85 53.66 119.85 119.85 0 39.14-18.76 73.89-47.77 95.76-5.57-5.07-21.36-14.76-27.65-34.54-3.43-10.77-3.53-17.71-6.43-35.03-.27-1.63-.54-3.21-.8-4.73-2.68 1.91-5.27 3.42-7.09 4.22-2.79 1.23-13.43 3.43-7.18-1.6 6.7-5.39 9.39-5.67 12.69-11.95-.75-4.48-1.36-8.28-1.76-11.38-5.88-20.3-17.5-36.84-23.98-42.77-.99-.91-1.93-3.29 0-5.38 2.06-2.23 5.22.13 5.22.13 10.28 8.44 16.38 19.72 21.25 32.02.74 1.86 1.32 3.78 1.78 5.72l.92 3.84c6.69 5.91 15.03 10.07 31.63 13.32 5.76 1.13 9.58 1.22 12.62 1.54 9-.64 7.39-11.73 4.5-11.41-2.89.32-17.73.16-22.55.16s-13.76-1.29-19.55-6.75c-5.78-5.46-7.39-22.49-7.71-31.17-.32-8.68 1.49-21.29 8.44-25.39 6.27-3.7 15.67 3.62 23.38 1.93 3.88-.85 0-8.36-9.96-15.75-9.96-7.39-24.5-13.9-35.11-14.62-10.59-.72-20.27 4.03-31.09 7.87-9.24 3.28-10 4.7-16.39 6.75-14.83 4.77-24.96 1.72-35.03 1.61-21.31-.25-37.77 10.81-46.72 18.85C243.82 25.21 282.91.58 327.75.58h.01Zm67.33 64.43c.04 1.19-1.74 2.47-3.29 2.32-2.21-.21-3.66-3.28-2.99-4.31.61-.94 3.01-.31 3.29-.23.31.08 2.94.8 2.99 2.23v-.01Zm-16.1 36.27c.47-1.82 1.59-3 2.66-4.12.98-1.03 1.81-1.58 3.32-2.59 2.35-1.57 3.96-2.24 5.78-2.99 1.22-.5 2.48-.94 3.85-.53.2.06.46.15.82.35 1.39.74 3.27 2.4 3.77 3.97.79 2.53-1.89 5.23-5.92 9.3-3.19 3.22-4.92 4.92-7.64 5.05-.62.03-3.16.07-5.05-1.79-2.58-2.55-1.66-6.39-1.6-6.65h.01Zm18.94 10.7c-1.11-1.76.58-5.13 2.63-6.95 4.56-4.03 11.57-.87 12.28-.55 1.99.9 2.48 1.75 2.68 2.28.65 1.74-.52 3.89-1.89 5.02-1.09.89-2.24 1.09-6.65 1.13-5.6.05-8.41.05-9.04-.93h-.01Zm-24.27-23.59c.16-2.45.36-5.32 2.52-7.59 3.31-3.48 9.1-3.72 12.55-1.22 1.91 1.39 3.83 4.15 3.12 6.25-.24.73-.46 1.52-4.24 3.67-2.03 1.15-4.07 1.82-5.36 2.48-1.02.41-2.48.97-4.12 1.46-.54.16-1.28.37-2.06.07-.45-.18-.74-.47-.89-.62-1.27-1.32-1.48-4.03-1.51-4.49l-.01-.01Zm4.96-23.43c2.04-.26 4 1.33 5.01 3.07 1.12 1.92 1.89 3.45 2.39 4.51.24.5.56 1.21.26 1.65-.28.41-.96.37-1.7.37 0 0-1.59 0-3.66.34-2.55.42-4.62 1.58-4.62 1.58-.81.45-1.33.86-1.76.65-.45-.22-.53-.95-.51-2.24.02-1.24.12-2.97.5-5.06.53-2.63 2.19-4.61 4.09-4.86v-.01Zm19.82 79.75-3.96 4.42-26.85 20.67 26.85-20.67m4.87-78.52s-5.6-.26-5.72.55c-.52 3.72 5.88 16.23 22.66 25.82.16.09.76.07-.1-1.06-2.18-2.84-7.31-10.07-9.41-13.46-3.27-5.27-7.42-11.86-7.42-11.86l-.01.01Zm-9.13 59.19c-.33-.18-.72 0-.81.36-.6 2.53-1.99 9.28-3.64 14.55-.7 2.24 1.02 5.21 3.64 2.34 4.7-5.17 9.17-14.46 8.68-14.39-.91.13-5.82-1.75-7.86-2.86h-.01Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                  <defs fill="none">
                    <linearGradient gradientUnits="userSpaceOnUse" y2="19.23" x2="316.27" y1="240.57" x1="316.27" id="781ad0ce-76ea-42d7-9618-31628cb87ab2_comp-lgck3tpi_r_comp-lgck5zeo">
                      <stop stop-opacity=".9"></stop>
                      <stop stop-opacity="0" stop-color="#0B0502" offset="1"></stop>
                    </linearGradient>
                  </defs>
                </g>
              </svg>
            </a>
          </div>
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-black px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-orange-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#contato"
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-3xl shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-500"
            >
              Agende uma Demonstração
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              <svg className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-200`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 hover:bg-gray-50 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5">
            <a
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-left px-4 py-2 border border-transparent rounded-3xl shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-500"
            >
              Agende uma Demonstração
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;