



import { Link } from "react-router";
import aviao from "../assets/aviao.png"

function FirstContent() {
    return (
        <section id="titulo_eva" className="w-full flex flex-col md:flex-row items-center justify-between my-10 md:my-20 px-4 md:px-[50px] gap-10">
            {/* Main Content */}
            <div className="flex flex-col w-full md:w-[600px] gap-5 md:gap-[30px] text-center md:text-left">
                <p className="font-gotham text-lg sm:text-xl text-[#0086C5] font-semibold">Bem vindo(a) à:</p>
                <h1 className="font-gotham text-5xl sm:text-6xl md:text-[90px] leading-tight md:leading-[90px] mb-5">Central de Soluções HC</h1>
                <p className="w-full md:w-[400px] font-sans text-sm sm:text-base leading-relaxed mb-5 md:ml-[10px] mx-auto md:mx-0">
                    Onde inovação e eficácia se encontram para transformar desafios em resultados.
                    <br /> <br />
                    Na Central de Soluções HC, somos especialistas em conectar ideias a soluções práticas. Seja através de tecnologia de ponta, consultoria especializada ou gestão de projetos integrada, nossa missão é simplificar o complexo e entregar excelência em cada detalhe.
                </p>
                <div className="flex flex-col sm:flex-row-reverse justify-center md:justify-end items-center gap-5">
                    <Link to="/Login" className="bg-[#0086C5] font-poppins text-white border-0 rounded-md w-full sm:w-[100px] h-[46px] text-base font-light p-[10px] text-center no-underline flex items-center justify-center">entrar</Link>
                    <Link to="/Cadastro" target="_blank" className="bg-white font-poppins text-[#0086C5] border border-[#0086C5] rounded-md w-full sm:w-[120px] h-[46px] text-base font-light p-[10px] text-center no-underline flex items-center justify-center hover:bg-[#0086c5] transition hover:text-white">Criar conta</Link>
                </div>
            </div>

            {/* Chatbot EVA */}
            <div id="container_eva" className="w-full max-w-sm md:w-[371px] h-[583px] bg-[#e9e9e9] border border-[#0086C5] rounded-md shadow-lg flex flex-col justify-between mt-10 md:mt-0">
                <div className="not futter">
                    <div id="header_eva" className="w-full h-[70px] bg-[#0086C5] flex flex-col justify-start px-5 py-1.5 shadow-md mx-auto mb-5">
                        <h2 className="font-poppins text-white text-[27px] font-normal">Eva</h2>
                        <p className="font-poppins text-white text-base font-normal -mt-1">Assistente virtual</p>
                    </div>
                    <div className="px-5 flex flex-col gap-2.5">
                        <div className="p-1.5 pb-[30px] m-1.5 justify-start bg-[#0086C5] text-white font-poppins font-light text-[18px] rounded-lg w-[65%]">
                            <p>Olá! Eu sou a Eva! <br />
                                Como posso te ajudar?
                                <br /><br />
                                Em breve teremos a opção do nosso chat
                            </p>
                        </div>
                        <div className="balao_usuario balao p-1.5 pb-[30px] m-1.5 ml-[33%] justify-end bg-white text-[#0086C5] font-poppins font-light text-[18px] rounded-lg border border-[#0086C5] w-[65%]">
                            <p>Quantas unidades <br />
                                vocês possuem?</p>
                        </div>
                    </div>
                </div>
                <div className="footer_eva w-full h-[65px] bg-white flex items-center justify-center">
                    <div className="campo_pesquisa bg-[#e2e2e2] rounded-lg w-[95%] h-[70%] flex items-center justify-between px-5 py-1.5">
                        <input type="text" placeholder="Escreva sua menssagem..." id="input_eva" className="h-[120%] w-[95%] rounded-md border border-[#0086C5] p-[3px] pl-5 bg-transparent -ml-5"/>
                        <button type="button" id="botao_eva" className="w-[45px] h-[45px] rounded-full border-none bg-transparent cursor-pointer p-[3px] mr-[-10px]">
                            <img src={aviao} alt="botão de enviar menssagem para eva" className="w-[25px]"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
} 

export default FirstContent;