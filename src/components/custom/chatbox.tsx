"use client";

import { useState } from "react";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: "curso" | "venda" | "pagamento" | "suporte";
}

const faqs: FAQ[] = [
  // Dúvidas sobre o Curso
  {
    id: 1,
    question: "Como funciona o curso?",
    answer: "O curso IA que Dá Dinheiro é 100% online com 6 módulos e 35 aulas práticas. Você aprende do zero como ganhar dinheiro online usando métodos validados. Acesso vitalício para assistir quando e quantas vezes quiser!",
    category: "curso"
  },
  {
    id: 2,
    question: "Preciso de experiência prévia?",
    answer: "NÃO! O curso foi criado especialmente para iniciantes. Tudo é explicado passo a passo, de forma simples e direta. Você não precisa de nenhuma experiência anterior com vendas online ou tecnologia.",
    category: "curso"
  },
  {
    id: 3,
    question: "Quanto tempo leva para ver resultados?",
    answer: "Nossos alunos começam a ver os primeiros resultados entre 15 a 30 dias aplicando o método. Alguns conseguem a primeira venda em menos de 2 semanas! Tudo depende da sua dedicação e aplicação do conteúdo.",
    category: "curso"
  },
  {
    id: 4,
    question: "Preciso aparecer ou mostrar meu rosto?",
    answer: "NÃO! Este é um dos grandes diferenciais. Você não precisa aparecer, gravar vídeos mostrando o rosto ou criar conteúdo nas redes sociais. Tudo é feito de forma anônima e discreta.",
    category: "curso"
  },
  {
    id: 5,
    question: "Quanto tempo por dia preciso dedicar?",
    answer: "Com apenas 2 a 3 horas por dia você já consegue aplicar o método e ver resultados. Muitos alunos fazem nas horas vagas, depois do trabalho ou nos finais de semana. Você adapta ao seu ritmo!",
    category: "curso"
  },
  
  // Dúvidas sobre Venda
  {
    id: 6,
    question: "Qual é o valor do curso?",
    answer: "O investimento é de apenas R$ 47,00 à vista ou 12x de R$ 4,70 no cartão. Um valor simbólico comparado ao retorno que você terá. Valor normal seria R$ 1.116, mas está com 95% de desconto por tempo limitado!",
    category: "venda"
  },
  {
    id: 7,
    question: "Tem garantia?",
    answer: "SIM! Garantia incondicional de 7 dias. Se você não ficar satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro, sem perguntas e sem burocracia. O risco é todo nosso!",
    category: "venda"
  },
  {
    id: 8,
    question: "Como faço para comprar?",
    answer: "É super simples! Clique em qualquer botão verde 'QUERO MEU PRIMEIRO R$ 1.000' na página. Você será direcionado para o checkout seguro da Hotmart. Preencha seus dados e escolha a forma de pagamento. Acesso liberado na hora!",
    category: "venda"
  },
  {
    id: 9,
    question: "O curso tem certificado?",
    answer: "SIM! Ao concluir o curso você recebe um certificado digital de conclusão que pode usar em seu currículo e LinkedIn. É um diferencial importante para sua carreira!",
    category: "venda"
  },
  
  // Dúvidas sobre Pagamento
  {
    id: 10,
    question: "Quais formas de pagamento aceitam?",
    answer: "Aceitamos: Cartão de Crédito (até 12x), PIX (com desconto especial) e Boleto Bancário. Pagamento 100% seguro processado pela Hotmart, a maior plataforma de produtos digitais da América Latina.",
    category: "pagamento"
  },
  {
    id: 11,
    question: "Quando recebo o acesso?",
    answer: "No cartão e PIX o acesso é IMEDIATO! Você recebe o login por email em até 5 minutos. No boleto, o acesso é liberado em até 2 dias úteis após a compensação bancária.",
    category: "pagamento"
  },
  {
    id: 12,
    question: "O pagamento é seguro?",
    answer: "100% SEGURO! Todos os pagamentos são processados pela Hotmart, empresa certificada e líder no mercado. Seus dados são criptografados e protegidos. Milhões de transações seguras todos os dias!",
    category: "pagamento"
  },
  
  // Dúvidas sobre Suporte
  {
    id: 13,
    question: "Terei suporte se tiver dúvidas?",
    answer: "SIM! Você terá acesso ao grupo VIP exclusivo no Telegram onde nossa equipe e outros alunos te ajudam. Além disso, pode entrar em contato direto pelo WhatsApp. Ninguém fica sem suporte!",
    category: "suporte"
  },
  {
    id: 14,
    question: "Por quanto tempo tenho acesso?",
    answer: "ACESSO VITALÍCIO! Você paga uma única vez e tem acesso para sempre. Pode assistir as aulas quando quiser, quantas vezes quiser, sem prazo de validade. Além disso, recebe todas as atualizações futuras gratuitamente!",
    category: "suporte"
  },
  {
    id: 15,
    question: "Como falo com o suporte?",
    answer: "Você pode falar conosco pelo WhatsApp (19) 98116-8970 ou entrar no nosso canal do Telegram. Nossa equipe responde rapidamente e está pronta para te ajudar com qualquer dúvida!",
    category: "suporte"
  }
];

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Olá! 👋 Sou o assistente virtual do IA que Dá Dinheiro. Como posso te ajudar hoje?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [showCategories, setShowCategories] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: "curso", label: "📚 Sobre o Curso", icon: "📚" },
    { id: "venda", label: "💰 Vendas e Preços", icon: "💰" },
    { id: "pagamento", label: "💳 Pagamento", icon: "💳" },
    { id: "suporte", label: "🆘 Suporte", icon: "🆘" }
  ];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setShowCategories(false);
    
    const categoryLabel = categories.find(c => c.id === categoryId)?.label || categoryId;
    
    // Adiciona mensagem do usuário
    const userMessage: Message = {
      id: messages.length,
      text: `Tenho dúvidas sobre: ${categoryLabel}`,
      isBot: false,
      timestamp: new Date()
    };
    
    // Adiciona resposta do bot
    const botMessage: Message = {
      id: messages.length + 1,
      text: "Ótimo! Aqui estão as perguntas mais comuns sobre esse assunto. Clique em uma pergunta para ver a resposta:",
      isBot: true,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage, botMessage]);
  };

  const handleQuestionSelect = (faq: FAQ) => {
    // Adiciona pergunta do usuário
    const userMessage: Message = {
      id: messages.length,
      text: faq.question,
      isBot: false,
      timestamp: new Date()
    };
    
    // Adiciona resposta do bot
    const botMessage: Message = {
      id: messages.length + 1,
      text: faq.answer,
      isBot: true,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage, botMessage]);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setShowCategories(true);
    
    const botMessage: Message = {
      id: messages.length,
      text: "Escolha uma categoria para continuar:",
      isBot: true,
      timestamp: new Date()
    };
    
    setMessages([...messages, botMessage]);
  };

  const handleContactSupport = () => {
    const whatsappNumber = "5519981168970";
    const message = encodeURIComponent("Olá! Vim do chatbox e gostaria de tirar uma dúvida sobre o curso IA que Dá Dinheiro.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const filteredFaqs = selectedCategory 
    ? faqs.filter(faq => faq.category === selectedCategory)
    : [];

  return (
    <>
      {/* Botão Flutuante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-40 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label="Abrir chat de dúvidas"
        >
          <MessageCircle className="w-7 h-7" />
          <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 animate-pulse">
            Dúvidas?
          </Badge>
        </button>
      )}

      {/* Chatbox */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-[380px] h-[600px] bg-slate-900 border-2 border-slate-700 shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">Assistente Virtual</h3>
                <p className="text-xs text-white/80">Online agora</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-800/50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-slate-700 text-white'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString('pt-BR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Categories */}
            {showCategories && (
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className="w-full p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-left transition-all duration-200 hover:scale-105 flex items-center gap-3"
                  >
                    <span className="text-2xl">{category.icon}</span>
                    <span className="font-semibold">{category.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Questions */}
            {selectedCategory && (
              <div className="space-y-2">
                <button
                  onClick={handleBackToCategories}
                  className="w-full p-2 bg-slate-700/50 hover:bg-slate-600 text-white rounded-lg text-sm transition-colors flex items-center gap-2"
                >
                  <ChevronDown className="w-4 h-4 rotate-90" />
                  Voltar às categorias
                </button>
                
                {filteredFaqs.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => handleQuestionSelect(faq)}
                    className="w-full p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-left transition-all duration-200 hover:scale-105 text-sm"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-900 border-t border-slate-700">
            <Button
              onClick={handleContactSupport}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Falar com Atendente
            </Button>
            <p className="text-xs text-gray-400 text-center mt-2">
              Respondemos em poucos minutos
            </p>
          </div>
        </Card>
      )}
    </>
  );
}
