import React, { useState, useMemo, useCallback } from 'react';

// --- ESTRUTURA DE DADOS ---
interface FAQItem {
  pergunta: string;
  resposta: React.ReactNode;
}

interface FAQCategory {
  titulo: string;
  icone: string;
  itens: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    titulo: 'Informações Gerais',
    icone: 'fa-hospital',
    itens: [
      {
        pergunta: 'O que é o IMREA?',
        resposta: (
          <p>O Instituto de Medicina Física e Reabilitação do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo – IMREA HC FMUSP é uma entidade do governo do Estado, cujo objetivo é servir às pessoas com deficiência física, transitória ou definitiva, necessitadas de receber atendimento de reabilitação, desenvolvendo seu potencial físico, psicológico, social, profissional e educacional.</p>
        ),
      },
      {
        pergunta: 'Qual o horário de atendimento?',
        resposta: (
          <div>
            <p>O Hospital de Clínicas (HC) da Faculdade de Medicina da Universidade de São Paulo (FMUSP) tem atendimento 24 horas por dia, todos os dias da semana. Para atendimento ambulatorial, o horário pode variar de acordo com a unidade e a especialidade.</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong>Unidade I - Ambulatório Mário Covas:</strong> Segunda a sexta das 7h às 17h</li>
              <li><strong>Unidade II - Ambulatório de Atenção à Saúde da Mulher e CAPS AD:</strong> Segunda a sexta das 7h às 16h</li>
              <li><strong>Áreas administrativas:</strong> Segunda a sexta das 08:00 às 18:00 horas</li>
            </ul>
          </div>
        ),
      },
      {
        pergunta: 'Quais as principais unidades?',
        resposta: (
          <div className="grid-enderecos grid gap-5 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { titulo: 'Instituto Central (ICHC)', endereco: 'Av. Dr. Enéas de Carvalho Aguiar, 255' },
              { titulo: 'Instituto de Psiquiatria (IPq)', endereco: 'Av. Dr. Ovídio Pires de Campos, 785' },
              { titulo: 'Instituto de Ortopedia (IOT)', endereco: 'Av. Dr. Enéas de Carvalho Aguiar, 255' },
              { titulo: 'IMREA', endereco: 'Av. Dr. Enéas de Carvalho Aguiar, 419' },
              { titulo: 'Instituto da Criança (ICr)', endereco: 'Av. Dr. Enéas de Carvalho Aguiar, 647' },
              { titulo: 'Instituto do Coração (InCor)', endereco: 'Av. Dr. Enéas de Carvalho Aguiar, 44' },
            ].map((item, i) => (
              <div key={i} className="item-endereco bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-[#0086C5] font-semibold mb-1">{item.titulo}</h4>
                <p className="text-sm text-gray-600">{item.endereco}</p>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
  {
    titulo: 'Atendimento ao Paciente',
    icone: 'fa-user-md',
    itens: [
      {
        pergunta: 'Como posso ser atendido pelo HC?',
        resposta: (
          <div>
            <p>Para marcar a consulta de triagem, é preciso:</p>
            <ol className="list-decimal pl-5 mt-3 space-y-2">
              <li>Ter em mãos os documentos de identificação do paciente (RG e CPF)</li>
              <li>Obter a guia de encaminhamento fornecida pelos postos de saúde, unidades básicas de saúde ou hospitais da rede do SUS</li>
              <li>A guia deve especificar a especialidade médica necessária</li>
              <li>Comparecer à central de agendamento com toda a documentação</li>
            </ol>
          </div>
        ),
      },
      {
        pergunta: 'Quais são os tipos de atendimento oferecidos?',
        resposta: (
          <div className="grid-servicos grid gap-5 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icone: 'fa-procedures', titulo: 'Fisioterapia', descricao: 'Reabilitação motora e funcional' },
              { icone: 'fa-wheelchair', titulo: 'Terapia Ocupacional', descricao: 'Adaptação e independência funcional' },
              { icone: 'fa-comment-medical', titulo: 'Fonoaudiologia', descricao: 'Reabilitação da comunicação' },
              { icone: 'fa-brain', titulo: 'Psicologia', descricao: 'Acompanhamento emocional' },
              { icone: 'fa-bone', titulo: 'Ortopedia', descricao: 'Tratamento de lesões musculoesqueléticas' },
              { icone: 'fa-brain', titulo: 'Neurologia', descricao: 'Reabilitação neurológica' },
            ].map((item, i) => (
              <div key={i} className="item-servico text-center p-5 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                <i className={`fas ${item.icone} text-5xl text-[#00a8e8] mb-3`}></i>
                <h4 className="font-semibold mb-1 text-gray-800">{item.titulo}</h4>
                <p className="text-sm text-gray-500">{item.descricao}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        pergunta: 'Quais documentos são necessários?',
        resposta: (
          <div className="lista-documentos mt-4 space-y-1">
            {[
              { icone: 'fa-id-card', texto: 'Documento de identificação com foto (RG ou CPF)' },
              { icone: 'fa-address-card', texto: 'Cartão SUS atualizado' },
              { icone: 'fa-file-medical', texto: 'Guia de encaminhamento com CID' },
              { icone: 'fa-file-alt', texto: 'Exames e relatórios médicos' },
              { icone: 'fa-home', texto: 'Comprovante de residência' },
            ].map((item, i) => (
              <div key={i} className="item-documento flex items-center gap-3 py-3 border-b border-dashed border-gray-200 last:border-b-0">
                <i className={`fas ${item.icone} text-xl text-[#00a8e8] min-w-[25px]`}></i>
                <span className="text-gray-700">{item.texto}</span>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
  {
    titulo: 'Outras Informações',
    icone: 'fa-info-circle',
    itens: [
      {
        pergunta: 'O IMREA atende pelo SUS ou particular?',
        resposta: (
          <div>
            <p>O IMREA é uma instituição pública que atende prioritariamente pelo **Sistema Único de Saúde (SUS)**. Todos os nossos serviços são gratuitos para os pacientes encaminhados pela rede pública de saúde.</p>
            <div className="aviso flex items-start gap-3 bg-blue-100 p-4 rounded-lg mt-4">
              <i className="fas fa-info-circle text-2xl text-[#00a8e8] mt-0.5"></i>
              <p className="mb-0">Não realizamos atendimentos particulares ou por convênios médicos.</p>
            </div>
          </div>
        ),
      },
      {
        pergunta: 'Há acompanhamento psicológico para familiares?',
        resposta: (
          <div>
            <p>Sim, oferecemos suporte psicológico tanto para pacientes quanto para seus familiares. Nossos serviços incluem:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Atendimento psicológico individual</li>
              <li>Grupos de apoio para familiares</li>
              <li>Orientação sobre cuidados especiais</li>
              <li>Acompanhamento durante o processo de reabilitação</li>
            </ul>
            <p className="mt-3">Os agendamentos são feitos através da equipe de psicologia do IMREA.</p>
          </div>
        ),
      },
    ],
  },
];

// --- COMPONENTE PRINCIPAL FAQ ---
const FaqPage: React.FC = () => {
  // Estado para controlar qual item do acordeão está aberto
  const [openIndex, setOpenIndex] = useState<{ category: number; item: number } | null>({ category: 0, item: 0 });
  // Estado para o termo de busca
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Lógica para alternar o estado do acordeão
  const toggleAccordion = useCallback((categoryIndex: number, itemIndex: number) => {
    setOpenIndex(prev =>
      prev?.category === categoryIndex && prev.item === itemIndex
        ? null
        : { category: categoryIndex, item: itemIndex }
    );
  }, []);

  // Lógica de filtragem
  const filteredData = useMemo(() => {
    if (!searchTerm) return faqData;

    const lowerCaseSearch = searchTerm.toLowerCase();

    // Filtra as categorias
    return faqData
      .map(category => {
        // Filtra os itens dentro de cada categoria
        const filteredItems = category.itens.filter(item =>
          item.pergunta.toLowerCase().includes(lowerCaseSearch)
        );

        // Retorna a categoria apenas se houver itens filtrados
        if (filteredItems.length > 0) {
          return {
            ...category,
            itens: filteredItems,
          };
        }
        return null;
      })
      .filter(category => category !== null) as FAQCategory[];
  }, [searchTerm]);

  return (
    <main className="conteudo-principal bg-gray-50 py-10">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* CABEÇALHO */}
        <div className="cabecalho-faq text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-gotham text-[#0086C5] mb-4">Central de Ajuda</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Encontre respostas para as dúvidas mais frequentes sobre nossos serviços
          </p>
          
          <div className="container-busca relative max-w-xl mx-auto">
            <input
              type="text"
              id="busca-faq"
              placeholder="Buscar no FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 px-5 border border-gray-400 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-[#0086C5] focus:shadow-lg focus:shadow-blue-200/50"
            />
            <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none text-gray-500 cursor-pointer text-xl">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* GRID PRINCIPAL (LATERAL + CONTEÚDO) */}
        <div className="grid-faq grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          
          {/* BARRA LATERAL */}
          <aside className="barra-lateral-faq bg-white p-6 rounded-lg shadow-lg h-fit lg:sticky lg:top-6">
            <h2 className="text-2xl font-gotham text-[#0086C5] mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Respondemos para você as principais dúvidas que podem surgir ao acessar o nosso site
            </p>
            
            <div className="cartao-ajuda bg-gray-200 p-6 rounded-lg text-center mt-6">
              <i className="fas fa-headset text-4xl text-[#0086C5] mb-4"></i>
              <h3 className="text-xl font-gotham mb-2">Precisa de mais ajuda?</h3>
              <p className="text-gray-800 mb-4">Nossa equipe está disponível para esclarecer suas dúvidas</p>
              <a href="integrantes.html" className="botao inline-block bg-[#0086C5] text-white py-2.5 px-5 rounded-lg font-medium no-underline transition-all duration-300 hover:bg-[#0070a3] hover:translate-y-[-2px]">
                Fale Conosco
              </a>
            </div>
          </aside>

          {/* CONTEÚDO FAQ */}
          <section className="conteudo-faq bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-gotham text-[#0086C5] mb-6">Como podemos te ajudar?</h2>
            
            {filteredData.length === 0 && (
              <p className="text-xl text-red-500 mt-8">Nenhuma pergunta encontrada para "{searchTerm}".</p>
            )}

            {filteredData.map((category, catIndex) => (
              <div key={catIndex} className="categoria-faq mb-10">
                <h3 className="text-2xl font-gotham text-[#006899] mb-5 flex items-center gap-2">
                  <i className={`fas ${category.icone} text-[#0086C5]`}></i>
                  {category.titulo}
                </h3>
                
                <div className="acordeao-faq border border-gray-300 rounded-lg overflow-hidden">
                  {category.itens.map((item, itemIndex) => {
                    // Verifica se o item atual deve estar ativo
                    const isActive = openIndex?.category === catIndex && openIndex.item === itemIndex;
                    const id = `faq-${catIndex}-${itemIndex}`;

                    return (
                      <div key={itemIndex} className={`item-faq border-b border-gray-300 last:border-b-0 ${isActive ? 'active' : ''}`}>
                        <button
                          className="pergunta-faq w-full py-4 px-5 text-left bg-white border-none cursor-pointer flex justify-between items-center text-lg font-medium transition-colors duration-300 hover:bg-gray-50"
                          onClick={() => toggleAccordion(catIndex, itemIndex)}
                          aria-expanded={isActive}
                          aria-controls={`resposta-${id}`}
                        >
                          <span>{item.pergunta}</span>
                          <i 
                            className={`fas fa-chevron-down text-gray-600 transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`}
                          ></i>
                        </button>
                        
                        {/* Resposta do Acordeão */}
                        <div 
                          id={`resposta-${id}`}
                          className="resposta-faq transition-[max-height,padding] duration-300 ease-out overflow-hidden bg-gray-50"
                          style={{ 
                            maxHeight: isActive ? '1000px' : '0px', 
                            padding: isActive ? '20px' : '0 20px',
                          }}
                        >
                          <div className="text-gray-700 space-y-4">
                            {item.resposta}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
};

export default FaqPage;