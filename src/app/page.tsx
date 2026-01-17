"use client";

import { Check, Shield, Clock, TrendingUp, Users, Star, ArrowRight, Lock, MessageCircle, ChevronDown, Zap, Target, Award, Rocket, X, Sparkles, DollarSign, Trophy, AlertCircle, Gift, Timer, Send, Brain, Lightbulb, BookOpen, Video, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [chatType, setChatType] = useState<'whatsapp' | 'telegram' | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 30 });
  const [chatMessages, setChatMessages] = useState<Array<{type: 'bot' | 'user', text: string}>>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  
  // Contador regressivo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  // LINK DE CHECKOUT DA KIWIFY
  const CHECKOUT_URL = "https://pay.kiwify.com.br/2VJCa4D";
  
  const handleCheckout = () => {
    window.open(CHECKOUT_URL, '_blank');
  };

  // ABRIR CHAT WHATSAPP FICTÍCIO
  const handleWhatsAppOpen = () => {
    setChatType('whatsapp');
    setChatMessages([
      { type: 'bot', text: '👋 Olá! Sou o assistente virtual do WhatsApp!' },
      { type: 'bot', text: '📱 Número: +55 (19) 98116-8970' },
      { type: 'bot', text: '🤖 Estou aqui para te ajudar com todas as suas dúvidas sobre o curso! Escolha uma pergunta abaixo:' }
    ]);
  };

  // ABRIR CHAT TELEGRAM FICTÍCIO
  const handleTelegramOpen = () => {
    setChatType('telegram');
    setChatMessages([
      { type: 'bot', text: '👋 Olá! Bem-vindo ao Telegram!' },
      { type: 'bot', text: '🔒 Para acessar nosso grupo exclusivo no Telegram, você precisa fazer parte da área de membros adquirindo o curso.' },
      { type: 'bot', text: '💬 Mas fique tranquilo! Posso te ajudar com dúvidas sobre o curso aqui mesmo. Escolha uma pergunta abaixo:' }
    ]);
  };

  // FECHAR CHAT
  const handleCloseChat = () => {
    setChatType(null);
    setChatMessages([]);
    setSelectedQuestion(null);
  };

  // SISTEMA DE FAQ INTELIGENTE - RESPOSTAS AUTOMÁTICAS
  const faqDatabase = [
    {
      question: "💳 Como funciona o pagamento?",
      answer: "O pagamento é super simples e seguro! Você pode pagar com cartão de crédito (em até 12x de R$ 4,70), PIX (com desconto) ou boleto bancário. Assim que o pagamento for confirmado, você recebe acesso imediato ao curso completo. O processo é 100% seguro pela Kiwify.",
      followUp: "Quer garantir sua vaga agora?"
    },
    {
      question: "📚 O que vou aprender no curso?",
      answer: "Você vai aprender um método completo e validado para ganhar dinheiro online usando IA! São 4 módulos estratégicos com 9 aulas práticas que ensinam desde o básico até estratégias avançadas de monetização. Tudo explicado passo a passo, do zero, sem precisar de experiência prévia.",
      followUp: "Quer ver o conteúdo completo dos módulos?"
    },
    {
      question: "⏰ Por quanto tempo tenho acesso?",
      answer: "Seu acesso é VITALÍCIO! Isso mesmo, você paga uma única vez e tem acesso para sempre. Pode assistir as aulas quando quiser, quantas vezes quiser, no seu ritmo. Além disso, todas as atualizações futuras do curso são GRATUITAS para você!",
      followUp: "Incrível, né? Quer começar agora?"
    },
    {
      question: "🛡️ Como funciona a garantia?",
      answer: "Temos uma garantia INCONDICIONAL de 7 dias! Você pode acessar todo o conteúdo, aplicar o método, e se por qualquer motivo não gostar, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso!",
      followUp: "Você não tem nada a perder, só a ganhar!"
    },
    {
      question: "👤 Preciso aparecer ou mostrar meu rosto?",
      answer: "NÃO! Esse é um dos grandes diferenciais do método. Você não precisa aparecer, não precisa gravar vídeos, não precisa criar conteúdo nas redes sociais. Tudo é feito de forma anônima e discreta. Perfeito para quem tem vergonha ou não quer se expor!",
      followUp: "Ideal para você, certo?"
    },
    {
      question: "🎓 Sou iniciante, consigo fazer?",
      answer: "SIM! O curso foi criado ESPECIALMENTE para iniciantes. Tudo é explicado do zero, passo a passo, de forma simples e clara. Você não precisa de nenhuma experiência prévia. Nossos alunos que mais faturam são justamente os que começaram do absoluto zero!",
      followUp: "Você está no lugar certo!"
    },
    {
      question: "💰 Quanto posso ganhar?",
      answer: "Nossos alunos ganham de R$ 1.000 a R$ 5.000 por mês, alguns até mais! Claro que os resultados variam de pessoa para pessoa, dependendo da dedicação e aplicação do método. Mas seguindo o passo a passo, você tem tudo para alcançar resultados incríveis!",
      followUp: "Pronto para começar sua jornada?"
    },
    {
      question: "⏱️ Quanto tempo preciso dedicar por dia?",
      answer: "Com apenas 2 a 3 horas por dia você já consegue aplicar tudo que ensinamos! Muitos alunos fazem nas horas vagas, depois do trabalho ou nos finais de semana. Você adapta ao seu ritmo e disponibilidade. Flexibilidade total!",
      followUp: "Cabe na sua rotina?"
    },
    {
      question: "📱 Terei suporte se tiver dúvidas?",
      answer: "SIM! Você terá acesso ao nosso grupo VIP exclusivo no Telegram, onde nossa equipe e outros alunos estão prontos para te ajudar. Além disso, pode entrar em contato direto pelo WhatsApp. Ninguém fica sem suporte!",
      followUp: "Você nunca estará sozinho!"
    },
    {
      question: "🎁 Quais são os bônus inclusos?",
      answer: "Você recebe 5 BÔNUS INCRÍVEIS de forma totalmente gratuita: Lista de Prompts Prontos, Ferramentas Recomendadas, Checklist Primeira Venda, Scripts de Vídeos e Modelos de Post para Redes Sociais. Tudo isso para acelerar seus resultados!",
      followUp: "Bônus exclusivos por tempo limitado!"
    },
    {
      question: "🚀 Quando posso começar?",
      answer: "AGORA MESMO! Assim que seu pagamento for confirmado (instantâneo no cartão), você recebe o acesso por email em até 2 minutos. Pode começar a assistir as aulas imediatamente e aplicar o método hoje mesmo!",
      followUp: "Vamos começar?"
    },
    {
      question: "💻 Preciso de computador ou celular serve?",
      answer: "Você pode acessar o curso tanto no computador quanto no celular ou tablet! A plataforma é 100% responsiva e funciona perfeitamente em qualquer dispositivo. Estude de onde estiver, quando quiser!",
      followUp: "Total flexibilidade para você!"
    }
  ];

  const handleQuestionClick = (question: string, answer: string, followUp: string) => {
    setChatMessages(prev => [
      ...prev,
      { type: 'user', text: question },
      { type: 'bot', text: answer },
      { type: 'bot', text: followUp }
    ]);
    setSelectedQuestion(question);
    
    // Scroll para o final do chat
    setTimeout(() => {
      const chatContainer = document.getElementById('chat-messages');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 100);
  };

  const handleFinalCTA = () => {
    setChatMessages(prev => [
      ...prev,
      { type: 'user', text: 'Quero garantir minha vaga!' },
      { type: 'bot', text: '🎉 EXCELENTE DECISÃO! Você está a um clique de transformar sua vida. Clique no botão verde abaixo para garantir sua vaga com 95% de desconto!' }
    ]);
    
    setTimeout(() => {
      const chatContainer = document.getElementById('chat-messages');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0B0B0B] to-black">
      
      {/* Botões Flutuantes - WhatsApp e Telegram */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Botão WhatsApp */}
        <button
          onClick={handleWhatsAppOpen}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce relative group"
          aria-label="Chat WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-[#FF6B35] text-white text-xs font-black rounded-full w-5 h-5 flex items-center justify-center animate-pulse text-[10px]">
            1
          </span>
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat WhatsApp
          </div>
        </button>

        {/* Botão Telegram */}
        <button
          onClick={handleTelegramOpen}
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 relative group"
          aria-label="Chat Telegram"
        >
          <Send className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-[#FF6B35] text-white text-xs font-black rounded-full w-5 h-5 flex items-center justify-center animate-pulse text-[10px]">
            !
          </span>
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat Telegram
          </div>
        </button>
      </div>

      {/* ChatBox Inteligente - CORRIGIDO PARA DESKTOP E MOBILE */}
      {chatType && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100vw-2rem)] md:w-[420px] max-w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300 max-h-[85vh] md:max-h-[600px] flex flex-col">
          <div className={`p-3 md:p-4 flex items-center justify-between flex-shrink-0 ${
            chatType === 'whatsapp' 
              ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
              : 'bg-gradient-to-r from-blue-500 to-cyan-600'
          }`}>
            <div className="flex items-center gap-2 md:gap-3 min-w-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                {chatType === 'whatsapp' ? (
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                ) : (
                  <Send className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                )}
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-black text-sm md:text-base truncate">
                  {chatType === 'whatsapp' ? 'WhatsApp Suporte' : 'Telegram Suporte'}
                </h3>
                <p className="text-white/90 text-[10px] md:text-xs font-bold truncate">
                  {chatType === 'whatsapp' 
                    ? '🟢 Online • +55 (19) 98116-8970' 
                    : '🟢 Online • Resposta Instantânea'}
                </p>
              </div>
            </div>
            <button
              onClick={handleCloseChat}
              className="text-white hover:bg-white/20 p-1.5 md:p-2 rounded-full transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Mensagens do Chat */}
          <div id="chat-messages" className="p-3 md:p-4 bg-gradient-to-b from-gray-50 to-gray-100 flex-1 overflow-y-auto space-y-2 md:space-y-3 min-h-0">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`flex gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.type === 'bot' && (
                  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    chatType === 'whatsapp' 
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                      : 'bg-gradient-to-br from-blue-500 to-cyan-600'
                  }`}>
                    {chatType === 'whatsapp' ? (
                      <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    ) : (
                      <Send className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    )}
                  </div>
                )}
                <div className={`max-w-[75%] md:max-w-[85%] p-2 md:p-3 rounded-2xl shadow-sm ${
                  msg.type === 'bot' 
                    ? `bg-white text-gray-800 rounded-tl-none border ${
                        chatType === 'whatsapp' ? 'border-green-100' : 'border-blue-100'
                      }` 
                    : `text-white rounded-tr-none ${
                        chatType === 'whatsapp' 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                          : 'bg-gradient-to-r from-blue-500 to-cyan-600'
                      }`
                }`}>
                  <p className="text-xs md:text-sm font-medium leading-relaxed">{msg.text}</p>
                </div>
                {msg.type === 'user' && (
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[9px] md:text-xs font-black">Você</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Perguntas Rápidas */}
          <div className="p-3 md:p-4 bg-white border-t border-gray-200 max-h-48 md:max-h-56 overflow-y-auto flex-shrink-0">
            <p className="text-[10px] md:text-xs text-gray-500 text-center font-bold mb-2 md:mb-3">💬 Escolha uma pergunta ou role para ver mais:</p>
            <div className="space-y-1.5 md:space-y-2">
              {faqDatabase.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuestionClick(faq.question, faq.answer, faq.followUp)}
                  className={`w-full p-2 md:p-3 rounded-xl text-left text-xs md:text-sm text-gray-700 shadow-sm transition-all border font-bold hover:scale-105 duration-200 ${
                    chatType === 'whatsapp'
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border-green-200 hover:border-green-400'
                      : 'bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border-blue-200 hover:border-blue-400'
                  }`}
                >
                  {faq.question}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Final no Chat */}
          <div className={`p-3 md:p-4 border-t-4 flex-shrink-0 ${
            chatType === 'whatsapp'
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 border-[#D4AF37]'
              : 'bg-gradient-to-r from-blue-500 to-cyan-600 border-[#D4AF37]'
          }`}>
            <Button
              onClick={() => {
                handleFinalCTA();
                setTimeout(() => handleCheckout(), 1500);
              }}
              className="w-full bg-white hover:bg-gray-100 text-gray-900 font-black py-3 md:py-4 text-sm md:text-base shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              GARANTIR MINHA VAGA AGORA
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
            <p className="text-white text-center text-[10px] md:text-xs mt-2 font-bold">
              ⚡ Acesso imediato • 🛡️ Garantia de 7 dias
            </p>
          </div>
        </div>
      )}

      {/* Header com Urgência e Contador */}
      <div className="bg-gradient-to-r from-[#FF6B35] via-[#D4AF37] to-[#FF6B35] text-white py-4 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 animate-pulse"></div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 animate-pulse" />
            <p className="text-sm md:text-base font-black">
              🔥 OFERTA EXPIRA EM:
            </p>
          </div>
          <div className="flex items-center gap-2 bg-black/40 px-6 py-3 rounded-xl backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-[9px] md:text-[10px]">HORAS</div>
            </div>
            <div className="text-2xl md:text-3xl font-black">:</div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-[9px] md:text-[10px]">MIN</div>
            </div>
            <div className="text-2xl md:text-3xl font-black">:</div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-[9px] md:text-[10px]">SEG</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B35]/5 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FF6B35] text-black hover:from-[#FF6B35] hover:to-[#D4AF37] px-6 py-3 text-sm md:text-base font-black shadow-2xl border-2 border-[#D4AF37] animate-pulse">
            ⚡ +3.847 PESSOAS JÁ MUDARAM DE VIDA
          </Badge>
          
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Imagine Ganhar de<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FF6B35] to-[#D4AF37] drop-shadow-2xl">
              R$ 1.000 a R$ 5.000
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-300">
              Todo Mês, Trabalhando de Casa
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            <span className="text-[#D4AF37] font-black">Você não precisa de experiência.</span> Não precisa aparecer. Não precisa criar conteúdo.<br />
            <span className="text-white font-bold">Apenas seguir um método simples e validado</span> que já transformou a vida de milhares de pessoas comuns como você.
          </p>

          <div className="mb-10 space-y-6">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-[#FF6B35] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#FF6B35] text-black px-8 py-8 text-xl md:text-3xl font-black rounded-2xl shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105 w-full md:w-auto group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer"></div>
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 mr-3 group-hover:rotate-12 transition-transform" />
              <span>QUERO MUDAR MINHA VIDA AGORA</span>
              <ArrowRight className="ml-3 w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/30">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-green-300 font-bold">Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/30">
                <Check className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-bold">Garantia de 7 Dias</span>
              </div>
              <div className="flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full border border-[#D4AF37]/30">
                <Award className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-[#D4AF37] font-bold">Certificado Incluso</span>
              </div>
            </div>
          </div>

          <div className="inline-block bg-[#1A1A1A] backdrop-blur-sm border-2 border-[#FF6B35]/30 rounded-2xl p-6 md:p-8">
            <p className="text-[#FF6B35] font-black text-lg md:text-xl mb-2">⚠️ ATENÇÃO: APENAS 47 VAGAS NESTE PREÇO</p>
            <p className="text-gray-300 text-sm md:text-base">Após atingir o limite, o valor volta para R$ 297</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE AUTORIDADE - PEDRO */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#0B0B0B] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 px-6 py-2 text-sm font-black">
                👨‍💼 QUEM ESTÁ POR TRÁS DESTE MÉTODO
              </Badge>
            </div>

            <Card className="p-8 md:p-12 bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border-2 border-[#2A2A2A] hover:border-[#D4AF37] transition-all duration-300 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Foto/Avatar IA */}
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FF6B35] p-1 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                      alt="Pedro - Especialista em IA"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                    Olá, Meu Nome é <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FF6B35]">Pedro</span>
                  </h2>
                  <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed">
                    <p className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Especialista em Inteligência Artificial</strong> aplicada ao dia a dia</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <span>Experiência prática criando <strong className="text-white">páginas, automações e conteúdos</strong> usando IA</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <span>Criei este curso após <strong className="text-white">aplicar IA em projetos reais</strong></span>
                    </p>
                    <p className="flex items-start gap-3">
                      <Target className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                      <span className="text-[#D4AF37] font-bold text-xl">Missão: Ajudar iniciantes a ganhar dinheiro com IA</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE BENEFÍCIOS DO CURSO */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black to-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#FF6B35]/20 text-[#FF6B35] border border-[#FF6B35]/30 px-6 py-2 text-sm font-black">
              🎯 O QUE VOCÊ VAI CONQUISTAR
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Transforme Sua Vida Com IA
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Benefícios reais que você vai experimentar
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: "Renda Extra Garantida", desc: "De R$ 1.000 a R$ 5.000/mês trabalhando de casa", color: "from-green-500 to-emerald-600" },
              { icon: Clock, title: "Flexibilidade Total", desc: "Trabalhe 2-3h por dia no seu próprio horário", color: "from-blue-500 to-cyan-600" },
              { icon: Rocket, title: "Resultados Rápidos", desc: "Primeira venda em até 30 dias seguindo o método", color: "from-[#FF6B35] to-red-600" },
              { icon: Brain, title: "Conhecimento Prático", desc: "Aprenda IA aplicada direto ao ponto, sem enrolação", color: "from-purple-500 to-pink-600" },
              { icon: Shield, title: "Sem Aparecer", desc: "Método 100% anônimo, sem mostrar rosto ou criar conteúdo", color: "from-[#D4AF37] to-yellow-600" },
              { icon: Users, title: "Suporte Completo", desc: "Grupo VIP + WhatsApp para tirar todas as dúvidas", color: "from-indigo-500 to-blue-600" }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border-2 border-[#2A2A2A] hover:border-[#D4AF37] transition-all duration-300 group hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE PROVA SOCIAL TÉCNICA */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#0B0B0B] to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 px-6 py-2 text-sm font-black">
              💬 EXPERIÊNCIAS REAIS COM IA
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Veja O Que Nossos Alunos Dizem
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Depois de aplicar IA no meu dia a dia, tudo ficou mais fácil.",
                name: "Ana Paula",
                role: "Estudante de Marketing",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
              },
              {
                text: "Nunca imaginei que poderia criar páginas e artes só digitando comandos.",
                name: "Carlos Silva",
                role: "Empreendedor Digital",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              },
              {
                text: "Esse método me mostrou que qualquer pessoa pode aprender IA sem experiência.",
                name: "Juliana Costa",
                role: "Designer Freelancer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border-2 border-[#2A2A2A] hover:border-[#FF6B35] transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FF6B35] p-0.5">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-white text-base">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed text-sm">
                  &quot;{testimonial.text}&quot;
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE BÔNUS PREMIUM */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black to-[#0B0B0B] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-[#D4AF37] to-[#FF6B35] text-black px-6 py-3 text-base font-black shadow-2xl animate-pulse">
              🎁 BÔNUS EXCLUSIVOS
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Receba Gratuitamente
            </h2>
            <p className="text-[#FF6B35] text-xl md:text-2xl font-black">
              Bônus inclusos por tempo limitado
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Lista de Prompts Prontos", icon: FileText, desc: "Templates validados para usar imediatamente" },
              { title: "Ferramentas Recomendadas", icon: Zap, desc: "As melhores IAs para cada tipo de tarefa" },
              { title: "Checklist Primeira Venda", icon: CheckCircle, desc: "Passo a passo para sua primeira venda" },
              { title: "Scripts de Vídeos", icon: Video, desc: "Roteiros prontos para criar conteúdo" },
              { title: "Modelos de Post para Redes", icon: Sparkles, desc: "Templates para Instagram, Facebook e mais" }
            ].map((bonus, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border-2 border-[#2A2A2A] hover:border-[#D4AF37] transition-all duration-300 group hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#FF6B35] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <bonus.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-black text-white mb-2">{bonus.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{bonus.desc}</p>
                <Badge className="mt-4 bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 text-xs font-black">
                  ✓ INCLUSO GRÁTIS
                </Badge>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-[#FF6B35] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#FF6B35] text-black px-8 py-6 text-xl md:text-2xl font-black rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🎁 QUERO TODOS OS BÔNUS AGORA
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DETALHAMENTO DOS MÓDULOS */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#0B0B0B] to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#FF6B35]/20 text-[#FF6B35] border border-[#FF6B35]/30 px-6 py-2 text-sm font-black">
              📚 CONTEÚDO COMPLETO
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              4 Módulos Estratégicos
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Método validado do zero ao avançado
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                module: "MÓDULO 1",
                title: "Fundamentos e Primeiros Passos",
                lessons: "2 aulas práticas",
                icon: "🎯",
                highlights: ["Setup inicial completo", "Primeiros passos com IA", "Ferramentas essenciais"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                module: "MÓDULO 2",
                title: "Métodos Práticos de Monetização",
                lessons: "3 aulas práticas",
                icon: "💰",
                highlights: ["Templates prontos para usar", "Casos de sucesso reais", "Atalhos que funcionam"],
                color: "from-green-500 to-emerald-500"
              },
              {
                module: "MÓDULO 3",
                title: "Sua Primeira Venda Garantida",
                lessons: "2 aulas práticas",
                icon: "🚀",
                highlights: ["Scripts de venda prontos", "Onde encontrar clientes", "Como fechar vendas"],
                color: "from-[#FF6B35] to-red-500"
              },
              {
                module: "MÓDULO 4",
                title: "Escala e Multiplicação de Resultados",
                lessons: "2 aulas práticas",
                icon: "📈",
                highlights: ["Automação inteligente", "Escala de 10x", "Gestão de tempo"],
                color: "from-[#D4AF37] to-yellow-500"
              }
            ].map((course, index) => (
              <Card key={index} className="p-6 md:p-8 bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border-2 border-[#2A2A2A] hover:border-[#D4AF37] transition-all duration-300 group">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="text-6xl md:text-7xl group-hover:scale-110 transition-transform">
                    {course.icon}
                  </div>
                  <div className="flex-1">
                    <Badge className={`mb-3 bg-gradient-to-r ${course.color} text-white border-0 text-xs font-black px-4 py-1`}>
                      {course.module}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                      {course.title}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-3 mb-4">
                      {course.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300 bg-[#0B0B0B]/50 p-3 rounded-lg border border-[#2A2A2A]">
                          <Zap className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                          <span className="font-bold">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-green-400 font-black text-sm">
                      <Check className="w-5 h-5" />
                      <span>{course.lessons}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-[#FF6B35] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#FF6B35] text-black px-8 py-6 text-xl md:text-2xl font-black rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
            >
              📚 QUERO ACESSO COMPLETO
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE GARANTIA */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black to-[#0B0B0B] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-8 bg-[#D4AF37]/20 rounded-full mb-6 backdrop-blur-sm animate-pulse">
                <Shield className="w-20 h-20 md:w-24 md:h-24 text-[#D4AF37]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Garantia Incondicional de 7 Dias
              </h2>
              <p className="text-2xl md:text-3xl text-[#D4AF37] font-black">
                Você não corre NENHUM risco!
              </p>
            </div>

            <Card className="p-8 md:p-12 bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border-4 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/30">
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-green-500/10 p-6 rounded-2xl border-2 border-green-500/30">
                  <Check className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3">100% Sem Riscos</h3>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      Tenho tanta certeza de que este curso vai transformar sua vida que ofereço uma 
                      <span className="text-green-400 font-black"> garantia incondicional de 7 dias</span>. 
                      Teste tudo, aplique o método, veja os resultados. Se não gostar, devolvo seu dinheiro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-green-500/10 p-6 rounded-2xl border-2 border-green-500/30">
                  <Check className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3">Devolução Total e Imediata</h3>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      Se por qualquer motivo você não ficar satisfeito, basta enviar um único email e 
                      devolvo <span className="text-green-400 font-black">100% do seu dinheiro</span>, 
                      sem perguntas, sem burocracia, sem enrolação.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-green-500/10 p-6 rounded-2xl border-2 border-green-500/30">
                  <Check className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3">O Risco É Todo Meu!</h3>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      Acesse o curso completo, assista todas as aulas, aplique o método, entre no grupo VIP. 
                      Se não gostar, recebe seu dinheiro de volta. 
                      <span className="text-green-400 font-black"> Você só tem a ganhar!</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#D4AF37]/20 to-[#FF6B35]/20 rounded-2xl border-4 border-[#D4AF37]">
                <p className="text-center text-xl md:text-2xl text-white font-black">
                  ⚡ Literalmente ZERO riscos para você!
                </p>
              </div>
            </Card>

            <div className="text-center mt-10">
              <Button 
                onClick={handleCheckout}
                size="lg" 
                className="bg-gradient-to-r from-[#FF6B35] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#FF6B35] text-black px-8 py-6 text-xl md:text-2xl font-black rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                🛡️ COMEÇAR SEM RISCOS AGORA
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#FF6B35] via-[#D4AF37] to-[#FF6B35] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-8 bg-black text-[#D4AF37] px-8 py-4 text-lg md:text-xl font-black animate-pulse shadow-2xl border-2 border-[#D4AF37]">
            ⏰ ÚLTIMAS VAGAS NESTE PREÇO
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Sua Decisão Agora Define<br />
            <span className="text-black">Seu Futuro Financeiro</span>
          </h2>
          
          <Button 
            onClick={handleCheckout}
            size="lg" 
            className="bg-black text-[#D4AF37] hover:bg-[#1A1A1A] px-12 py-8 text-2xl md:text-4xl font-black rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 mb-8 group border-4 border-black"
          >
            🚀 GARANTIR ACESSO AGORA — VAGAS LIMITADAS
            <ArrowRight className="ml-3 w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" />
          </Button>

          <div className="space-y-4">
            <p className="text-white text-xl md:text-2xl font-black">
              ⚡ Acesso Imediato — Comece em 2 Minutos
            </p>
            <p className="text-white/90 text-lg md:text-xl font-bold">
              🔒 Pagamento 100% Seguro | 🛡️ Garantia Incondicional de 7 Dias
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 px-4 text-center border-t border-[#2A2A2A]">
        <p className="text-sm mb-3 font-bold">© 2024 IA que Dá Dinheiro - Todos os direitos reservados</p>
        <p className="text-xs max-w-3xl mx-auto mb-4 leading-relaxed">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho 
          de uma estratégia não deve ser interpretada como garantia de resultados. Os resultados 
          podem variar de pessoa para pessoa.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <button onClick={handleWhatsAppOpen} className="hover:text-green-400 transition-colors font-bold">
            WhatsApp
          </button>
          <button onClick={handleTelegramOpen} className="hover:text-blue-400 transition-colors font-bold">
            Telegram
          </button>
        </div>
      </footer>
    </div>
  );
}
