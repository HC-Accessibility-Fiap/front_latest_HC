
import imrea from "../assets/imrea.png"
import logoImrea from "../assets/logo-imrea-principal.png"

function SobreInrea() {
  return (
    <section id="sobre_inrea" className="w-full mx-auto mt-24 px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
      <div className="text_sobre_inrea w-full md:w-[45%] flex flex-col justify-start gap-5">
        <h2 className="text-4xl md:text-5xl font-light font-gotham">Sobre o INREA</h2>
        <img src={logoImrea} alt="Logo IMREA" className="w-28 md:w-36" />
        <p className="text-base md:text-lg">
          O IMREA (Instituto de Medicina Física e Reabilitação) é um centro de referência em reabilitação
          física vinculado ao Hospital das Clínicas da Faculdade de Medicina da USP (HC-FMUSP), em São Paulo.
        </p>

        <p className="text-base md:text-lg">
          <strong className="font-bold">O que faz:</strong> Reabilitação para sequelas de AVC, lesões medulares, traumas ortopédicos e amputações.
        </p>

        <p className="text-base md:text-lg">
          <strong className="font-bold">Como:</strong> Fisioterapia, terapia ocupacional, próteses e equipe multidisciplinar.
        </p>

        <p className="text-base md:text-lg">
          <strong className="font-bold">Acesso:</strong> Principalmente via SUS (com encaminhamento).
        </p>

        <p className="text-base md:text-lg">
          <strong className="font-bold">Referência nacional em reabilitação.</strong>
        </p>

        <a
          href="https://redelucymontoro.org.br/site/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0086C5] font-normal underline hover:text-blue-700 transition-colors"
        >
          clique para saber mais
        </a>
      </div>

      <div className="imagem_inrea w-full md:w-[49%] mt-8 md:mt-0">
        <img
          src={imrea}
          alt="Imagem do IMREA"
          className="w-full rounded-[30px]"
        />
      </div>
    </section>
  );
};

export default SobreInrea;