import logoHC_branca from "../assets/logo-hc-branca-principal.svg"
import logoFIAP_branca from "../assets/logo-fiap-branca-principal.svg"
import logoIMREA_branca from "../assets/logo_imrea-branca-principal.svg"
import fone from "../assets/phone-branco.svg"
import email from "../assets/email-branco.svg"
import loc from "../assets/loc-branco.svg"
import clock from "../assets/clock-branco.svg"
import linkedin from "../assets/icon-in-branco-principal.svg"
import insta from "../assets/icon-insta-branco-principal.svg"
import face from "../assets/icon-face-branca-principal.svg"
import { Link } from "react-router"

function Footer() {
  return (
    <footer id="footer_inicial" className="bg-[#0086C5] py-8 text-white font-inter">
      <div className="logo-principal-branco flex flex-wrap items-center justify-center gap-4 md:gap-8 px-4 mb-8">
        <a href="index.html" aria-label="Home"><img className="w-12 md:w-16" src={logoHC_branca} alt="Logo HC" /></a>
        <p className="text-xl md:text-2xl font-black">+</p>
        <a href="index.html" aria-label="Home"><img className="w-24 md:w-32" src={logoFIAP_branca} alt="Logo FIAP" /></a>
        <p className="text-xl md:text-2xl font-black">+</p>
        <a href="index.html" aria-label="Home"><img className="w-20 md:w-28" src={logoIMREA_branca} alt="Logo IMREA" /></a>
      </div>

      <div className="footer_content flex flex-col md:flex-row flex-wrap justify-around max-w-7xl mx-auto px-5 gap-8 md:gap-12">
        <div className="footer_section flex-1 min-w-[250px] mb-5 md:mb-0">
          <h3 className="text-white text-xl md:text-2xl font-sans mb-4 pb-2 border-b border-white/[.3]">Navegação</h3>
          <div className="lista_links flex flex-col gap-3 font-sans">
            <Link to="/" className="text-white no-underline transition-opacity duration-300 hover:opacity-80 hover:underline">Início</Link>
            <Link to="/Integrantes" className="text-white no-underline transition-opacity duration-300 hover:opacity-80 hover:underline">Integrantes</Link>
            <a href="#hospitais_proximos" className="text-white no-underline transition-opacity duration-300 hover:opacity-80 hover:underline">Localização</a>
            <a href="#titulo_eva" className="text-white no-underline transition-opacity duration-300 hover:opacity-80 hover:underline">Eva</a>
            <a href="faq.html" className="text-white no-underline transition-opacity duration-300 hover:opacity-80 hover:underline">FAQ</a>
          </div>
        </div>

        <div className="footer_section flex-1 min-w-[250px] mb-5 md:mb-0">
          <h3 className="text-white text-xl md:text-2xl font-sans mb-4 pb-2 border-b border-white/[.3]">Contato Hospital das Clínicas</h3>
          <div className="contact_info flex flex-col gap-3 font-sans">
            <p className="flex items-center gap-2 m-0"><img src={fone} alt="Telefone" className="w-5" /> (11) 2661-0000</p>
            <p className="flex items-center gap-2 m-0"><img src={email} alt="Email" className="w-5" /><a href="mailto:ouvidoria@hc.fm.usp.br" className="text-white no-underline hover:underline">ouvidoria@hc.fm.usp.br</a></p>
            <p className="flex items-start gap-2 m-0"><img src={loc} alt="Localização" className="w-5 mt-1" /> Av. Dr. Enéas de Carvalho Aguiar, 255 - Cerqueira César, São Paulo - SP</p>
            <p className="flex items-center gap-2 m-0"><img src={clock} alt="Relogio" className="w-5" /> Atendimento 24 horas</p>
          </div>
        </div>

        <div className="footer_section flex-1 min-w-[250px] mb-5 md:mb-0">
          <h3 className="text-white text-xl md:text-2xl font-sans mb-4 pb-2 border-b border-white/[.3]">Redes Sociais</h3>
          <div className="social_links flex gap-4 mb-5">
            <a href="https://www.linkedin.com/company/hcfmusp/?originalSubdomain=br" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src={linkedin} alt="LinkedIn" className="w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 hover:scale-110" /></a>
            <a href="https://www.instagram.com/hospitalhcfmusp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src={insta} alt="Instagram" className="w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 hover:scale-110" /></a>
            <a href="https://www.facebook.com/hospitaldasclinicasdafmusp/?locale=pt_BR" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img src={face} alt="Facebook" className="w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 hover:scale-110" /></a>
          </div>

          <h3 className="text-white text-xl md:text-2xl font-sans mt-5 mb-2">Emergências</h3>
          <p className="font-bold mb-1">192 - SAMU</p>
          <p className="font-bold">193 - Bombeiros</p>
        </div>
      </div>

      <div className="line4_footer text-center mt-8 pt-5 border-t border-white/[.3] text-sm md:text-base px-5">
        <p className="mb-2">Produzido por João Victor & Murilo Macedo & Rafael Carvalho Meireles</p>
        <p className="copyright text-white/[.7] text-xs md:text-sm">© 2025 Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;