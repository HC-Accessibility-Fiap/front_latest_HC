import React from 'react';
import fotoMurilo from "../assets/foto-murilo.png"
import fotoJoao from "../assets/foto-joao.jpg"
import iconGit from "../assets/icon-github.svg"
import iconLinkedin from "../assets/icon-linkedin.svg"

// Define a interface para tipar os dados de cada integrante
interface IntegranteProps {
  nome: string;
  subtitulo: string;
  biografia: string;
  foto: string;
  linkedin: string;
  github: string;
  reverso?: boolean; // Adiciona a propriedade opcional 'reverso' para o layout
}

// Componente Reutilizável para um único integrante
const IntegranteCard: React.FC<IntegranteProps> = ({
  nome,
  subtitulo,
  biografia,
  foto,
  linkedin,
  github,
  reverso = false,
}) => {
  const containerClasses = reverso
    ? 'flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-12'
    : 'flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12';

  return (
    <div className={containerClasses}>
      {/* Card do Integrante */}
      <div className="w-full max-w-[354px] bg-white rounded-xl p-4 transition-transform duration-1000 ease-in-out hover:scale-105">
        <div className="flex flex-col items-center">
          <img className="w-full max-w-[300px] rounded-[15px]" src={foto} alt={`Imagem de ${nome}`} />
          <div className="flex gap-4 mt-4">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${nome}`}>
              <img className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-1000 ease-in-out hover:scale-125" src={iconLinkedin} alt="Ícone do LinkedIn" />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${nome}`}>
              <img className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-1000 ease-in-out hover:scale-125" src={iconGit} alt="Ícone do GitHub" />
            </a>
          </div>
        </div>
      </div>

      {/* Biografia do Integrante */}
      <div className="text-white text-center md:text-left">
        <h1 className="text-4xl lg:text-5xl font-gotham mb-4">{nome}</h1>
        <p className="text-xl lg:text-2xl font-gotham mb-8">{subtitulo}</p>
        <p className="text-base font-sans leading-relaxed">{biografia}</p>
      </div>
    </div>
  );
};

// Dados de todos os integrantes
const equipeData = [
  {
    nome: 'JOÃO VICTOR ALCÂNTARA',
    subtitulo: '19 ANOS - 1TDSR - RM562707',
    biografia: `Me chamo João Victor Alcântara, tenho 19 anos e sou natural da Bahia, Brasil. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na FIAP, onde também atuo como estagiário de T.I. com foco em infraestrutura. Tenho interesse em tecnologia, redes e suporte técnico, e estou em constante busca por desenvolvimento profissional e aprendizado prático na área de Tecnologia da Informação. Valorizo a responsabilidade, o trabalho em equipe e a entrega de soluções eficazes, sempre com foco em eficiência e melhoria contínua.
    <br/><br/>
    Atualmente, foco em me tornar desenvolvedor, sempre buscando aprender novas tecnologias, linguagens de programação e boas práticas de desenvolvimento. Acredito em construir histórias com consistência e autenticidade, unindo técnica e propósito para entregar soluções que realmente façam a diferença.
    <br/><br/>
    Além das competências técnicas, valorizo muito as habilidades interpessoais, como trabalho em equipe, comunicação eficaz e resolução de problemas. Acredito que a combinação dessas qualidades é essencial para entregar resultados de qualidade e contribuir para o sucesso dos projetos.`,
    foto: fotoJoao,
    linkedin: 'https://www.linkedin.com/in/alc-joao',
    github: 'https://github.com/alc-joao',
    reverso: false,
  },
  {
    nome: 'MURILO MACEDO SILVA',
    subtitulo: '18 ANOS - 1TDSA - RM566462',
    biografia: `Sou Murilo Macedo Silva, desenvolvedor full stack com sólida formação técnica e paixão por transformar ideias em soluções digitais de alto impacto. Atuo no desenvolvimento de sites modernos, sistemas robustos, páginas personalizadas e aplicações inteligentes, sempre com foco em performance, segurança e escalabilidade.

 Minha jornada profissional foi impulsionada pela formação no Instituto PROA, onde fui capacitado como Desenvolvedor Full Stack, e continua se aprimorando com o curso de Análise e Desenvolvimento de Sistemas na FIAP, uma das instituições mais renomadas do país

 Domino tecnologias de ponta para entregar projetos completos e bem estruturados, com código limpo, organizado e orientado à excelência. Além de criar do zero, também realizo melhorias em sistemas existentes, aplico inteligência artificial para automação de processos, analiso dados para tomada de decisões estratégicas e proporciono alta relação custo-benefício para meus clientes.

 Meu objetivo vai além do desenvolvimento técnico: busco gerar valor real por meio da tecnologia, ajudando empresas e profissionais a prospectar mais clientes, otimizar seus processos e destacar-se em um mercado cada vez mais competitivo.

Se você busca inovação, confiabilidade e um parceiro comprometido com o sucesso do seu projeto, estou pronto para fazer a diferença.

 React.JS, Java, SpringBoot, Python, JavaScript, Figma, MySQL, Pacote Office

📬 Fique à vontade para entrar em contato:
✉️ murilomacedo.dev73@gmail.com
📞 (11) 98532-3292`,
    foto: fotoMurilo,
    linkedin: 'https://www.linkedin.com/in/murilomacedosilvadev/',
    github: 'https://github.com/MuriloMacedoSilva',
    reverso: true,
  },
];

// Componente Principal que renderiza todos os integrantes
const Equipe: React.FC = () => {
  return (
    <section className="bg-[#0086C5] py-14 px-4 md:px-12 lg:px-24">
      {equipeData.map((integrante, index) => (
        <React.Fragment key={index}>
          <IntegranteCard {...integrante} />
          {index < equipeData.length - 1 && <div className="mb-20" />}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Equipe;