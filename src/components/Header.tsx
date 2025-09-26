


import logo_hc_branca_principal from "../assets/logo-hc-branca-principal.svg" 
import logo_fiap_branca_principal from "../assets/logo-fiap-branca-principal.svg"
import { Link } from "react-router";

function Header() {
    return (
        <header className="relative w-full">
            <nav className="flex justify-between items-center px-4 py-4 md:px-8 bg-[#0086C5] text-white">

                {/* Logo Section */}
                <div className="flex gap-2 sm:gap-5 items-center">
                    <Link to="/"><img src={logo_hc_branca_principal} alt="Logo HC" className="h-6 sm:h-8" /></Link>
                    <p className="text-xl sm:text-2xl font-bold">+</p>
                    <Link to="/"><img src={logo_fiap_branca_principal} alt="Logo FIAP" className="h-6 sm:h-8" /></Link>
                </div>

                {/* Desktop Menu - Hidden on mobile */}
                <ul className="hidden md:flex md:items-center">
                    <li><Link className="text-white no-underline px-2 py-2 md:px-4 md:py-2 block transition-opacity duration-300 ease-in-out font-sans hover:opacity-75" to="/Faq">FAQ</Link></li>
                    <li>
                        <Link className="text-white no-underline px-2 py-2 md:px-4 md:py-2 block transition-opacity duration-300 ease-in-out font-sans hover:opacity-75" to="/Integrantes">Integrantes</Link></li>
                    <li><a className="text-white no-underline px-2 py-2 md:px-4 md:py-2 block transition-opacity duration-300 ease-in-out font-sans hover:opacity-75" href="https://www.hc.fm.usp.br/hc/portal/" target="_blank">HC</a></li>
                    <li><a className="text-white no-underline px-2 py-2 md:px-4 md:py-2 block transition-opacity duration-300 ease-in-out font-sans hover:opacity-75" target="_blank" href="https://redelucymontoro.org.br/site/imrea/">Imrea</a></li>
                    <li><a className="text-white no-underline px-2 py-2 md:px-4 md:py-2 block transition-opacity duration-300 ease-in-out font-sans hover:opacity-75" href="#footer_inicial">Contato</a></li>
                </ul>

                {/* Hamburger Menu Button - Hidden on desktop */}
                <button aria-label="Menu" className="md:hidden p-2 text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                {/* Login Button */}
                <a href="login.html" className="hidden sm:flex bg-white rounded-md border-0 w-auto sm:w-[120px] h-[33px] items-center justify-center p-[3px] text-[#0086C5] font-inter font-medium not-italic text-base shadow-sm transition duration-500 cursor-pointer hover:bg-gray-100">
                    <button>Entrar</button>
                </a>
            </nav>
        </header>
    )
}

export default Header;