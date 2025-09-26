
import hospital1 from "../assets/hcfmusp1.png"
import cancerInstituto from "../assets/institutoCancer.jpeg"
import intitutoCoracao from "../assets/intitutoCoracao.jpeg"
import estrela from "../assets/Group.png"

// aqui estou definindo um modelo de hospital e identificando o tipo de dado de cada item, ja que é typeScript

type Hospital = {
  id: number;
  nome: string;
  endereco: string;
  telefone: string;
  nota: string;
  imagem: string;
  link: string;
};

// aqui estou criando um dicionario chamado hospitais que contem os hospitais. e passando cada valor dos campos

const hospitais: Hospital[] = [
  {
    id: 1,
    nome: "Hospital das Clínicas FMUSP",
    endereco:
      "R. Dr. Ovídio Pires de Campos, 225 - Cerqueira César, São Paulo - SP, 05403-010",
    telefone: "(11) 2666-0000",
    nota: "4.2",
    imagem: hospital1,
    link: "https://maps.app.goo.gl/FBBWfgpirvWtnjsY9",
  },
  {
    id: 2,
    nome: "Instituto do Câncer do Estado de São Paulo",
    endereco:
      "Av. Dr. Arnaldo, 251 - Cerqueira César, São Paulo - SP, 01246-000",
    telefone: "(11) 3893-2000",
    nota: "4.5",
    imagem: cancerInstituto,
    link: "https://maps.app.goo.gl/DBKzJ3DUJM4eE67c8",
  },
  {
    id: 3,
    nome: "Instituto do Coração do Hospital das Clínicas da FMUSP",
    endereco:
      "Av. Dr. Enéas Carvalho de Aguiar, 44 - Cerqueira César, São Paulo - SP, 05403-900",
    telefone: "(11) 2661-5000",
    nota: "4.5",
    imagem: intitutoCoracao,
    link: "https://maps.app.goo.gl/Vxs8TYiGVFSBsTMv5",
  },
];

const HospitaisProximos: React.FC = () => {
  return (
    <section
      id="hospitais_proximos"
      className="w-full flex flex-col items-center mb-[70px] px-[50px]"
    >
      {/* Título */}
      <h2 className="font-[gotham] text-[50px] mb-[100px] text-center">
        Hospitais Próximos
      </h2>

      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Lista de Hospitais */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-[30px]">
          {hospitais.map((hospital) => (
            <a
              key={hospital.id}
              href={hospital.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black no-underline w-full"
            >
              <div className="flex lg:flex-row flex-col items-center gap-5 p-3 rounded-[20px] shadow-md hover:scale-105 transition-transform duration-500 w-full cursor-pointer">
                <img
                  src={hospital.imagem}
                  alt={`Foto do ${hospital.nome}`}
                  className="w-[240px] rounded-[20px] shadow-md"
                />
                <div className="flex flex-col">
                  <h2 className="font-montserrat text-[15px] text-[#000229] w-[80%]">
                    {hospital.nome}
                  </h2>
                  <p className="font-montserrat text-[12px] w-[65%]">
                    {hospital.endereco}
                  </p>

                  <div className="flex items-center justify-between gap-5 w-[70%] mt-2">
                    <div className="flex items-center justify-between w-[50px]">
                      <h2>{hospital.nota}</h2>
                      <img
                        src={estrela}
                        alt="Ícone de avaliação"
                        className="w-5"
                      />
                    </div>
                    <p className="font-montserrat text-[12px]">
                      {hospital.telefone}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mapa */}
        <div className="w-full lg:w-[45%] h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29256.378185110418!2d-46.5502208!3d-23.566745599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1747306134994!5m2!1spt-BR!2sbr"
            className="w-full rounded-[20px] shadow-md"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HospitaisProximos;
