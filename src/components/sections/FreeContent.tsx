import React from 'react';
import Button from '../common/Button';

const FreeContent: React.FC = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-12xl mx-auto bg-orange-600 px-16 py-6 rounded-xl shadow-md overflow-hidden md:max-w-12xl">
                    <div className="md:flex">
                        <div className="p-8 md:p-10">
                            <h1 className="text-5xl text-white font-semibold mb-2">
                                Material Gratuito
                            </h1>
                            <h3 className="text-2xl md:text2xl text-white mb-4">
                                Conheça o nosso Manual da Universidade Corporativa. Nele, você encontrará os 6 passos para uma implantação de sucesso na sua empresa. Aproveite!
                            </h3>
                            <p className="mt-2 text-white mb-6">
                                Nele, você encontrará os 6 passos para uma implantação de sucesso na sua empresa. Aproveite!
                            </p>
                            <div className="mt-8">
                                <Button variant="outline" className='bg-white hover:bg-green-500' size="lg">
                                    BAIXE AGORA
                                </Button>
                            </div>
                        </div>
                        <div className="md:block md:flex-shrink-0 flex items-center justify-center p-8">
                            <img src="https://static.wixstatic.com/media/ca5485_d5d6875035f84199bd3d03a2fb6504de~mv2.png/v1/crop/x_459,y_563,w_2880,h_1952/fill/w_449,h_304,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ebook%20psd.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreeContent;