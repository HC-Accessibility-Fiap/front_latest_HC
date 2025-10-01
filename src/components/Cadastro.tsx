import React, { useState, useEffect } from 'react';
import type { FormEvent } from 'react'; // Importação exclusiva para tipos

// ====================================================================
// 1. TIPAGEM E INTERFACES
// ====================================================================

// Interface para o objeto de usuário (dados do formulário)
interface User {
    nome: string;
    email: string;
    // Em um projeto real, a senha NUNCA deve ser salva em texto puro no cliente.
    senha: string;
}

// Tipagem para os estados de validação de cada campo
interface ValidationState {
    nome: 'default' | 'invalid' | 'valid';
    email: 'default' | 'invalid' | 'valid';
    senha: 'default' | 'invalid' | 'valid';
}

// ====================================================================
// 2. IMPORTAÇÕES DE IMAGENS (Ajuste o caminho se necessário)
// ====================================================================

// Certifique-se de que esses arquivos existam no seu projeto
import logoHcAzul from '../assets/logo-hc-azul-principal.svg';
import logoFiapAzul from '../assets/logo-fiap-azul-principal.svg';
import logoImreaAzul from '../assets/logo-imrea-azul-principal.svg';
import fotoHospital from "../assets/hcfmusp1.png" 

// ====================================================================
// 3. COMPONENTES DE ÍCONES (para feedback visual)
// ====================================================================

// Usando ícones simples como placeholders. Garanta que o 'material-symbols-outlined'
// ou equivalente (Heroicons, Font Awesome) esteja disponível no seu CSS global.
const WarningIcon: React.FC = () => (
    <span className="material-symbols-outlined text-red-500 text-xl">warning</span>
);
const CheckIcon: React.FC = () => (
    <span className="material-symbols-outlined text-green-600 text-xl">check</span>
);

// ====================================================================
// 4. COMPONENTE PRINCIPAL (CADASTRO)
// ====================================================================

const Cadastro: React.FC = () => {
    // 4.1. Estados
    const [user, setUser] = useState<User>({
        nome: '',
        email: '',
        senha: '',
    });
    const [validation, setValidation] = useState<ValidationState>({
        nome: 'default',
        email: 'default',
        senha: 'default',
    });
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');

    // 4.2. Manipulador de Mudanças
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setUser(prev => ({ ...prev, [id]: value }));
        setFeedbackMessage('');
    };

    // 4.3. Lógica de Validação (useEffect)
    
    // Validação do NOME (Deve ter 10 ou mais caracteres)
    useEffect(() => {
        if (user.nome.length === 0) {
            setValidation(v => ({ ...v, nome: 'default' }));
        } else if (user.nome.length < 10) {
            setValidation(v => ({ ...v, nome: 'invalid' }));
        } else {
            setValidation(v => ({ ...v, nome: 'valid' }));
        }
    }, [user.nome]);

    // Validação do E-MAIL (Deve ter 6 ou mais caracteres e incluir '@')
    useEffect(() => {
        if (user.email.length === 0) {
            setValidation(v => ({ ...v, email: 'default' }));
        } else if (user.email.length < 6 || !user.email.includes('@')) {
            setValidation(v => ({ ...v, email: 'invalid' }));
        } else {
            setValidation(v => ({ ...v, email: 'valid' }));
        }
    }, [user.email]);

    // Validação da SENHA (Deve ter 6 ou mais caracteres)
    useEffect(() => {
        if (user.senha.length === 0) {
            setValidation(v => ({ ...v, senha: 'default' }));
        } else if (user.senha.length < 6) {
            setValidation(v => ({ ...v, senha: 'invalid' }));
        } else {
            setValidation(v => ({ ...v, senha: 'valid' }));
        }
    }, [user.senha]);


    // 4.4. Manipulador de Cadastro (Submissão)
    const handleCadastro = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Verifica se todos os campos são válidos
        const isFormValid = validation.nome === 'valid' && validation.email === 'valid' && validation.senha === 'valid';

        if (!isFormValid) {
            setFeedbackMessage('Preencha todos os campos corretamente para fazer parte!');
            return;
        }

        try {
            // Armazena o usuário no localStorage
            // Em um sistema real, você enviaria esses dados para um servidor
            localStorage.setItem('currentUser', JSON.stringify(user));

            // Feedback e limpeza
            setFeedbackMessage(`${user.nome}, você foi cadastrado(a) com sucesso! Em breve receberá mais novidades sobre nosso projeto!`);
            setUser({ nome: '', email: '', senha: '' });
            setValidation({ nome: 'default', email: 'default', senha: 'default' });

        } catch (error) {
            setFeedbackMessage('Erro ao salvar os dados. Tente novamente.');
            console.error('Erro no localStorage:', error);
        }
    };

    // 4.5. Função de Renderização da Label (Lógica de cores e ícones)
    const getLabel = (field: keyof User) => {
        const status = validation[field];
        const baseClass = 'form-label text-left font-semibold text-lg flex items-center gap-1 mt-4 first:mt-0';
        let labelText: string = '';
        let className = baseClass;
        let IconComponent: React.FC | null = null;

        switch (field) {
            case 'nome':
                labelText = 'Nome';
                if (status === 'invalid') {
                    labelText = 'Nome Inválido';
                    className += ' text-red-500 transition-colors duration-200';
                    IconComponent = WarningIcon;
                } else if (status === 'valid') {
                    labelText = 'Nome Válido';
                    className += ' text-green-600 transition-colors duration-200';
                    IconComponent = CheckIcon;
                }
                break;
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
                        <a href="index.html" className="flex-1 min-w-0"><img className="h-8 sm:h-10" src={logoHcAzul} alt="Logo HC" /></a>
                        <p className="text-[#0086C5] text-2xl font-bold flex-shrink-0">+</p>
                        <a href="index.html" className="flex-1 min-w-0"><img className="h-8 sm:h-10" src={logoFiapAzul} alt="Logo FIAP" /></a>
                        <p className="text-[#0086C5] text-2xl font-bold flex-shrink-0">+</p>
                        <a href="index.html" className="flex-1 min-w-0"><img className="h-8 sm:h-10" src={logoImreaAzul} alt="Logo IMREA" /></a>
                    </div>

                    {/* Formulário de Cadastro */}
                    <form onSubmit={handleCadastro} className="w-full">
                        <div className="form-txt flex flex-col w-full">
                            
                            {/* Input Nome */}
                            {getLabel('nome')}
                            <input
                                type="text"
                                id="nome"
                                value={user.nome}
                                onChange={handleChange}
                                placeholder="Nome completo"
                                className="p-3 rounded-md border-none shadow-md bg-gray-200 text-lg outline-none focus:ring-2 focus:ring-[#0086C5] transition duration-200"
                            />

                            {/* Input E-mail */}
                            {getLabel('email')}
                            <input
                                type="email"
                                id="email"
                                value={user.email}
                                onChange={handleChange}
                                placeholder="Seu melhor email"
                                className="p-3 rounded-md border-none shadow-md bg-gray-200 text-lg outline-none focus:ring-2 focus:ring-[#0086C5] transition duration-200"
                            />

                            {/* Input Senha */}
                            {getLabel('senha')}
                            <input
                                type="password"
                                id="senha"
                                value={user.senha}
                                onChange={handleChange}
                                placeholder="Sua melhor senha"
                                className="p-3 rounded-md border-none shadow-md bg-gray-200 text-lg outline-none focus:ring-2 focus:ring-[#0086C5] transition duration-200"
                            />

                            {/* Botão */}
                            <button
                                type="submit"
                                id="botao"
                                className="p-3 bg-[#0086C5] border-none cursor-pointer rounded-md mt-8 text-lg text-white font-semibold transition duration-300 ease-in-out shadow-md hover:bg-blue-700 active:scale-[0.98] active:bg-blue-800"
                            >
                                Fazer parte
                            </button>
                        </div>
                    </form>

                    {/* Mensagem de Feedback */}
                    <div id="usuario-cadastrado" className={`mt-5 p-3 w-full rounded-md text-center font-semibold text-base ${feedbackMessage.includes('sucesso') ? 'text-green-600 bg-green-100' : 'text-red-500 bg-red-100'} ${feedbackMessage ? 'block' : 'hidden'} transition duration-300`}>
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

export default Cadastro;