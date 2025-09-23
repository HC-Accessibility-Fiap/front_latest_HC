

import { default as iconMedical } from '../assets/healthicons_telemedicine.png';
import { default as iconUserSquare } from '../assets/uil_user-square.png';
import { default as iconUserSquaree } from '../assets/uil_user-squaree.png';
import { default as arrowIcon } from '../assets/Group 110.png';

// 1. Definição da interface para os dados do cartão
interface ServiceCard {
    icon: string;
    title: string;
    description: string;
}

// 2. Array com os dados de cada cartão
const services: ServiceCard[] = [
    {
        icon: iconMedical,
        title: 'Telemedicina',
        description: 'Consultas com especialistas a qualquer hora e de forma remota',
    },
    {
        icon: iconUserSquare,
        title: 'Medicina Laboratorial',
        description: 'Exames genéticos, bioquímicos e imunológicos de alta precisão.',
    },
    {
        icon: iconUserSquaree,
        title: 'Agendar consulta',
        description: 'Veja as especialidades disponíveis',
    },
];

function ServicesSection() {
    return (
        <section id="servicos_para_voce" className="w-full flex flex-col md:flex-row items-center justify-between p-8 md:p-[50px] gap-8 md:gap-4">
            {/* Seção de Texto */}
            <div className="text_servicos w-full md:w-[30%] flex flex-col justify-start gap-5 text-center md:text-left font-montserrat">
                <h2 className="text-4xl md:text-[50px] font-gotham font-medium text-black">Serviços para você</h2>
                <p className="text-base font-light text-gray-700">Sabemos que momentos de preocupação com o bem-estar podem ser desafiadores, e é por isso que estamos aqui para você. Com atendimento humanizado, equipe especializada e tecnologia avançada.</p>
            </div>

            {/* Container dos Cards */}
            <div className="cards_servicos w-full md:w-[70%] flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* 3. Mapeamento dos dados para renderizar os cartões */}
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="card_servicos w-full sm:w-[calc(33.33%-10px)] h-auto border border-black rounded-xl p-5 flex flex-col items-start justify-between transition-transform duration-400 hover:scale-105 shadow-sm"
                    >
                        <div className="line_top_card flex flex-col w-full justify-start gap-4 mb-4">
                            <img src={service.icon} alt={`Ícone de ${service.title}`} className="w-10 h-10 object-contain" />
                            <h2 className="font-inter text-xl text-[#0086C5] font-medium">{service.title}</h2>
                            <p className="font-inter text-sm text-gray-600 w-full min-h-[50px]">{service.description}</p>
                        </div>
                        <div className="footer_card_servicos w-full flex justify-end">
                            <button aria-label={`Saiba mais sobre ${service.title}`} className="border-none bg-transparent cursor-pointer">
                                <img src={arrowIcon} alt="Saiba mais" className="w-8 h-8" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;