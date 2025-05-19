import React from 'react';

const LogoSlider: React.FC = () => {
    const logos = [
        // Subustituir pelas logos
        { id: 1, src: 'https://img.logo.dev/logo.dev', alt: 'Empresa 1' },
        { id: 2, src: 'https://img.logo.dev/google.com?token=pk_T_RUw5yOTgKlMJxIUUyUJQ', alt: 'Empresa 2' },
        { id: 3, src: 'https://img.logo.dev/coca-cola.com?token=pk_T_RUw5yOTgKlMJxIUUyUJQ&size=200&retina=true', alt: 'Empresa 3' },
        { id: 4, src: 'https://img.logo.dev/ailos.com?token=pk_T_RUw5yOTgKlMJxIUUyUJQ&size=200&greyscale=true&retina=true', alt: 'Empresa 4' },
        { id: 5, src: '/logos/logo5.svg', alt: 'Empresa 5' },
        { id: 6, src: '/logos/logo6.svg', alt: 'Empresa 6' },
        { id: 7, src: '/logos/logo7.svg', alt: 'Empresa 7' },
        { id: 8, src: '/logos/logo8.svg', alt: 'Empresa 8' },
    ];

    // loop infinito
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden">
                    <div className="flex animate-slide">
                        {duplicatedLogos.map((logo) => (
                            <div
                                key={logo.id}
                                className="flex-shrink-0 px-6 py-4 flex items-center justify-center"
                                style={{ width: '200px' }}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoSlider;