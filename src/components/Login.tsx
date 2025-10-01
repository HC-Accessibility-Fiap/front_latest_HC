import React, { useState, useEffect } from 'react';
import type { FormEvent } from 'react'; // Importação exclusiva para tipos
import fotoHospitalar from "../assets/hcfmusp1.png"

// ====================================================================
// 1. TIPAGEM E INTERFACES
// ====================================================================

// Interface para as credenciais de login
interface LoginCredentials {
    email: string;
    senha: string;
}

// Tipagem para os estados de validação (apenas email e senha)
interface ValidationState {
    email: 'default' | 'invalid' | 'valid';
    senha: 'default' | 'invalid' | 'valid';
}

// ====================================================================
// 2. SUBSTITUIÇÃO DE IMAGENS POR PLACEHOLDERS
// (Os imports originais foram substituídos para resolver o erro de caminho)
// ====================================================================

const logoHcAzul = 'https://placehold.co/100x40/0086C5/FFFFFF?text=HC';
const logoFiapAzul = 'https://placehold.co/100x40/0086C5/FFFFFF?text=FIAP';
const logoImreaAzul = 'https://placehold.co/100x40/0086C5/FFFFFF?text=IMREA';
const fotoHospital = fotoHospitalar; 

// ====================================================================
// 3. COMPONENTES DE ÍCONES (para feedback visual)
// ====================================================================

// Usando ícones simples como placeholders. 
const WarningIcon: React.FC = () => (
    <span className="material-symbols-outlined text-red-500 text-xl">warning</span>
);
const CheckIcon: React.FC = () => (
    <span className="material-symbols-outlined text-green-600 text-xl">check</span>
);

// ====================================================================
// 4. COMPONENTE PRINCIPAL (LOGIN)
// ====================================================================

const Login: React.FC = () => {
    
    // 4.1. Estados
    const [credentials, setCredentials] = useState<LoginCredentials>({
        email: '',
        senha: '',
    });
    
    const [validation, setValidation] = useState<ValidationState>({
        email: 'default',
        senha: 'default',
    });
    
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');

    // 4.2. Manipulador de Mudanças
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setCredentials(prev => ({ ...prev, [id]: value }));
        setFeedbackMessage('');
    };

    // 4.3. Lógica de Validação (useEffect)
    
    // Validação do E-MAIL (Deve ter 6 ou mais caracteres e incluir '@')
    useEffect(() => {
        if (credentials.email.length === 0) {
            setValidation(v => ({ ...v, email: 'default' }));
        } else if (credentials.email.length < 6 || !credentials.email.includes('@')) {
            setValidation(v => ({ ...v, email: 'invalid' }));
        } else {
            setValidation(v => ({ ...v, email: 'valid' }));
        }
    }, [credentials.email]);

    // Validação da SENHA (Deve ter 6 ou mais caracteres)
    useEffect(() => {
        if (credentials.senha.length === 0) {
            setValidation(v => ({ ...v, senha: 'default' }));
        } else if (credentials.senha.length < 6) {
            setValidation(v => ({ ...v, senha: 'invalid' }));
        } else {
            setValidation(v => ({ ...v, senha: 'valid' }));
        }
    }, [credentials.senha]);


    // 4.4. Manipulador de Login (Submissão)
    const handleLogin = (e: FormEvent) => {
        e.preventDefault();

        // Verifica se os campos são válidos
        const isFormValid = validation.email === 'valid' && validation.senha === 'valid';

        if (!isFormValid) {
            setFeedbackMessage('Preencha e-mail e senha corretamente para fazer login.');
            return;
        }

        // Simulação de Verificação de Login
        try {
            // Em um ambiente real, 'currentUser' seria buscado de um banco de dados ou API
            const storedUser = localStorage.getItem('currentUser');
            
            if (storedUser) {
                const registeredUser = JSON.parse(storedUser);
                
                // Simula a validação das credenciais
                if (registeredUser.email === credentials.email && registeredUser.senha === credentials.senha) {
                    setFeedbackMessage(`Bem-vindo(a) de volta, ${registeredUser.nome}! Login realizado com sucesso.`);
                    // Ações pós-login em um app real: redirecionamento, salvamento de token, etc.
                } else {
                    setFeedbackMessage('Credenciais inválidas. Verifique seu e-mail e senha.');
                }
            } else {
                setFeedbackMessage('Nenhum usuário cadastrado encontrado. Por favor, cadastre-se primeiro.');
            }

        } catch (error) {
            setFeedbackMessage('Ocorreu um erro ao tentar fazer login.');
            console.error('Erro no Login:', error);
        }
    };

    // 4.5. Função de Renderização da Label (Lógica de cores e ícones)
    // Usamos 'keyof LoginCredentials' para garantir que apenas 'email' ou 'senha' possam ser passados
    const getLabel = (field: keyof LoginCredentials) => {
        const status = validation[field];
        const baseClass = 'form-label text-left font-semibold text-lg flex items-center gap-1 mt-4 first:mt-0';
        let labelText: string = '';
        let className = baseClass;
        let IconComponent: React.FC | null = null;

        switch (field) {
            case 'email':
                labelText = 'E-mail';
                if (status === 'invalid') {
                    labelText = 'E-mail Inválido';
                    className += ' text-red-500 transition-colors duration-200';
                    IconComponent = WarningIcon;
                } else if (status === 'valid') {
                    labelText = 'E-mail Válido';
                    className += ' text-green-600 transition-colors duration-200';
                    IconComponent = CheckIcon;
                }
                break;
            case 'senha':
                labelText = 'Senha';
                if (status === 'invalid') {
                    labelText = 'Senha Inválida';
                    className += ' text-red-500 transition-colors duration-200';
                    IconComponent = WarningIcon;
                } else if (status === 'valid') {
                    labelText = 'Senha Válida';
                    className += ' text-green-600 transition-colors duration-200';
                    IconComponent = CheckIcon;
                }
                break;
        }

        return (
            <label htmlFor={field} className={className}>
                {labelText} {IconComponent && <IconComponent />}
            </label>
        );
    };

    // 4.6. Renderização (JSX)
    return (
        // Layout Responsivo: Tela inteira, dividido em duas colunas no desktop (lg)
        <section id="form" className="flex flex-col lg:flex-row w-full min-h-screen">

            {/* Coluna do Formulário - centralizada e responsiva */}
            <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center items-center bg-white">
                
                <div className="w-full max-w-sm mx-auto flex flex-col items-center">
                    
                    {/* Logos */}
                    <div className="logos flex items-center justify-between w-full mb-10 gap-2 sm:gap-4">
                        <a href="index.html" className="flex-1 min-w-0"><img className="h-8 sm:h-10 object-contain" src={logoHcAzul} alt="Logo HC" /></a>
                        <p className="text-[#0086C5] text-2xl font-bold flex-shrink-0">+</p>
                        <a href="index.html" className="flex-1 min-w-0"><img className="h-8 sm:h-10 object-contain" src={logoFiapAzul} alt="Logo FIAP" /></a>
                        <p className="text-[#0086C5] text-2xl font-bold flex-shrink-0">+</p>
                        <a href="index.html" className="flex-1 min-w-0"><img className="h-8 sm:h-10 object-contain" src={logoImreaAzul} alt="Logo IMREA" /></a>
                    </div>

                    <h1 className="text-3xl font-bold text-[#0086C5] mb-6">Acessar sua Conta</h1>

                    {/* Formulário de Login */}
                    <form onSubmit={handleLogin} className="w-full">
                        <div className="form-txt flex flex-col w-full">
                            
                            {/* Input E-mail */}
                            {getLabel('email')}
                            <input
                                type="email"
                                id="email"
                                value={credentials.email}
                                onChange={handleChange}
                                placeholder="Seu e-mail cadastrado"
                                className="p-3 rounded-md border-none shadow-md bg-gray-200 text-lg outline-none focus:ring-2 focus:ring-[#0086C5] transition duration-200"
                            />

                            {/* Input Senha */}
                            {getLabel('senha')}
                            <input
                                type="password"
                                id="senha"
                                value={credentials.senha}
                                onChange={handleChange}
                                placeholder="Sua senha"
                                className="p-3 rounded-md border-none shadow-md bg-gray-200 text-lg outline-none focus:ring-2 focus:ring-[#0086C5] transition duration-200"
                            />
                            
                            {/* Link de Esqueci a Senha */}
                            <p className="text-sm text-right mt-2 text-gray-600 hover:text-[#0086C5] transition duration-200 cursor-pointer">
                                Esqueceu sua senha?
                            </p>


                            {/* Botão */}
                            <button
                                type="submit"
                                id="botao"
                                className="p-3 bg-[#0086C5] border-none cursor-pointer rounded-md mt-8 text-lg text-white font-semibold transition duration-300 ease-in-out shadow-md hover:bg-blue-700 active:scale-[0.98] active:bg-blue-800"
                            >
                                Fazer Login
                            </button>
                        </div>
                    </form>

                    {/* Mensagem de Feedback */}
                    <div id="feedback-login" className={`mt-5 p-3 w-full rounded-md text-center font-semibold text-base ${feedbackMessage.includes('sucesso') || feedbackMessage.includes('Bem-vindo') ? 'text-green-600 bg-green-100' : 'text-red-500 bg-red-100'} ${feedbackMessage ? 'block' : 'hidden'} transition duration-300`}>
                        {feedbackMessage}
                    </div>
                </div>
            </div>

            {/* Coluna da Imagem - Visível apenas em telas grandes (desktop) */}
            <div className="hidden lg:block lg:w-3/5">
                <img
                    className="object-cover w-full h-screen"
                    src={fotoHospital}
                    alt="Foto de um hospital"
                />
            </div>
        </section>
    );
};

export default Login;
