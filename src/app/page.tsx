"use client";

import { Check, Shield, Clock, TrendingUp, Users, Star, ArrowRight, Lock, MessageCircle, ChevronDown, Zap, Target, Award, Rocket, X, Sparkles, DollarSign, Trophy, AlertCircle, Gift, Timer, Send, Brain, Lightbulb, BookOpen, Video, FileText, CheckCircle, Play, Phone, Wifi, Battery } from "lucide-react";
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

  const CHECKOUT_URL = "https://pay.kiwify.com.br/2VJCa4D";

  const handleCheckout = () => {
    window.open(CHECKOUT_URL, '_blank');
  };

  const handleWhatsAppOpen = () => {
    setChatType('whatsapp');
    setChatMessages([
      { type: 'bot', text: '👋 Olá! Sou o assistente virtual do WhatsApp!' },
      { type: 'bot', text: '📱 Número: +55 (19) 98116-8970' },
      { type: 'bot', text: '🤖 Estou aqui para te ajudar com todas as suas dúvidas sobre o curso! Escolha uma pergunta abaixo:' }
    ]);
  };

  const handleTelegramOpen = () => {
    setChatType('telegram');
    setChatMessages([
      { type: 'bot', text: '👋 Olá! Bem-vindo ao Telegram!' },
      { type: 'bot', text: '🔒 Para acessar nosso grupo exclusivo no Telegram, você precisa fazer parte da área de membros adquirindo o curso.' },
      { type: 'bot', text: '💬 Mas fique tranquilo! Posso te ajudar com dúvidas sobre o curso aqui mesmo. Escolha uma pergunta abaixo:' }
    ]);
  };

  const handleCloseChat = () => {
    setChatType(null);
    setChatMessages([]);
    setSelectedQuestion(null);
  };

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
    <div className="min-h-screen bg-[#050505]">

      {/* Botões Flutuantes */}
      <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col gap-3">
        <button
          onClick={handleWhatsAppOpen}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce relative group"
          aria-label="Chat WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-[#FF4444] text-white text-xs font-black rounded-full w-5 h-5 flex items-center justify-center animate-pulse text-[10px]">
            1
          </span>
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#25D366] text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat WhatsApp
          </div>
        </button>

        <button
          onClick={handleTelegramOpen}
          className="bg-[#229ED9] hover:bg-[#1A85C0] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 relative group"
          aria-label="Chat Telegram"
        >
          <Send className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-[#FF4444] text-white text-xs font-black rounded-full w-5 h-5 flex items-center justify-center animate-pulse text-[10px]">
            !
          </span>
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#229ED9] text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat Telegram
          </div>
        </button>
      </div>

      {/* ChatBox */}
      {chatType && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100vw-2rem)] md:w-[420px] max-w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300 max-h-[85vh] md:max-h-[600px] flex flex-col">
          <div className={`p-3 md:p-4 flex items-center justify-between flex-shrink-0 ${
            chatType === 'whatsapp'
              ? 'bg-[#075E54]'
              : 'bg-[#229ED9]'
          }`}>
            <div className="flex items-center gap-2 md:gap-3 min-w-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                {chatType === 'whatsapp' ? (
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                ) : (
                  <Send className="w-5 h-5 md:w-6 md:h-6 text-white" />
                )}
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-black text-sm md:text-base truncate">
                  {chatType === 'whatsapp' ? 'WhatsApp Suporte' : 'Telegram Suporte'}
                </h3>
                <p className="text-white/90 text-[10px] md:text-xs font-bold truncate">
                  {chatType === 'whatsapp'
                    ? '🟢 Online agora'
                    : '🟢 Resposta Instantânea'}
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

          <div id="chat-messages" className="p-3 md:p-4 bg-[#ECE5DD] flex-1 overflow-y-auto space-y-2 md:space-y-3 min-h-0">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`flex gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.type === 'bot' && (
                  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    chatType === 'whatsapp' ? 'bg-[#075E54]' : 'bg-[#229ED9]'
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
                    ? 'bg-white text-gray-800 rounded-tl-none'
                    : `text-white rounded-tr-none ${chatType === 'whatsapp' ? 'bg-[#DCF8C6]' : 'bg-[#229ED9]'}`
                }`}>
                  <p className={`text-xs md:text-sm font-medium leading-relaxed ${msg.type === 'user' && chatType === 'whatsapp' ? 'text-gray-800' : ''}`}>{msg.text}</p>
                </div>
                {msg.type === 'user' && (
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[9px] md:text-xs font-black">Vc</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-3 md:p-4 bg-white border-t border-gray-200 max-h-48 md:max-h-56 overflow-y-auto flex-shrink-0">
            <p className="text-[10px] md:text-xs text-gray-500 text-center font-bold mb-2 md:mb-3">💬 Escolha uma pergunta:</p>
            <div className="space-y-1.5 md:space-y-2">
              {faqDatabase.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuestionClick(faq.question, faq.answer, faq.followUp)}
                  className={`w-full p-2 md:p-3 rounded-xl text-left text-xs md:text-sm text-gray-700 shadow-sm transition-all border font-bold hover:scale-[1.02] duration-200 ${
                    chatType === 'whatsapp'
                      ? 'bg-[#F0FFF4] hover:bg-[#DCF8C6] border-[#25D366]/30 hover:border-[#25D366]'
                      : 'bg-[#EBF8FF] hover:bg-[#BEE3F8] border-[#229ED9]/30 hover:border-[#229ED9]'
                  }`}
                >
                  {faq.question}
                </button>
              ))}
            </div>
          </div>

          <div className={`p-3 md:p-4 border-t-4 border-[#D4AF37] flex-shrink-0 ${
            chatType === 'whatsapp' ? 'bg-[#075E54]' : 'bg-[#229ED9]'
          }`}>
            <Button
              onClick={() => {
                handleFinalCTA();
                setTimeout(() => handleCheckout(), 1500);
              }}
              className="w-full bg-[#D4AF37] hover:bg-[#C9A227] text-black font-black py-3 md:py-4 text-sm md:text-base shadow-2xl hover:scale-105 transition-all duration-300"
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

      {/* Header Urgência */}
      <div className="bg-[#FF4444] text-white py-3 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 animate-pulse flex-shrink-0" />
            <p className="text-xs sm:text-sm font-black whitespace-nowrap">
              OFERTA EXPIRA EM:
            </p>
          </div>
          <div className="flex items-center gap-1.5 bg-black/30 px-4 py-1.5 rounded-lg">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-black tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-[8px] tracking-wider">HRS</div>
            </div>
            <div className="text-xl sm:text-2xl font-black">:</div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-black tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-[8px] tracking-wider">MIN</div>
            </div>
            <div className="text-xl sm:text-2xl font-black">:</div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-black tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-[8px] tracking-wider">SEG</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 px-4">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* Badge topo */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] px-5 py-2.5 rounded-full text-sm font-black">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              +3.847 PESSOAS JÁ MUDARAM DE VIDA
            </div>
          </div>

          {/* Headline + Mockup lado a lado no desktop */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

            {/* Texto Hero */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                Ganhe de{" "}
                <span className="text-[#D4AF37]">R$ 1.000</span>
                {" "}a{" "}
                <span className="text-[#D4AF37]">R$ 5.000</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-bold">
                  todo mês usando IA — sem aparecer
                </span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                Método validado, passo a passo, para quem está começando do zero.
                <span className="text-white font-bold"> Sem experiência. Sem aparecer. Sem criar conteúdo.</span>
              </p>

              {/* Micro provas */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center lg:justify-start">
                {[
                  { icon: Check, text: "Acesso Vitalício", color: "text-[#25D366]" },
                  { icon: Shield, text: "Garantia 7 Dias", color: "text-[#229ED9]" },
                  { icon: Zap, text: "Resultado em 30 dias", color: "text-[#D4AF37]" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold text-gray-300">
                    <item.icon className={`w-4 h-4 ${item.color} flex-shrink-0`} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Principal */}
              <div className="space-y-3">
                <button
                  onClick={handleCheckout}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-black text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-[1.03] relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                  <span className="relative z-10">QUERO MUDAR MINHA VIDA AGORA</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center sm:text-left text-xs text-gray-500">
                  🔒 Pagamento 100% seguro via Kiwify · Cartão, PIX ou Boleto
                </p>
              </div>
            </div>

            {/* Mockup de Celular — CORRIGIDO */}
            <div className="flex-shrink-0 flex justify-center">
              <div className="relative">
                {/* Glow atrás do celular */}
                <div className="absolute inset-0 bg-[#D4AF37]/20 blur-3xl rounded-full scale-75"></div>

                {/* Corpo do celular */}
                <div className="relative w-[200px] sm:w-[240px] h-[400px] sm:h-[480px] bg-[#1A1A1A] rounded-[36px] border-[6px] border-[#333] shadow-[0_30px_80px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] mx-auto">

                  {/* Borda interna brilhante */}
                  <div className="absolute inset-0 rounded-[30px] border border-white/5 pointer-events-none"></div>

                  {/* Câmera/Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#0A0A0A] rounded-b-2xl flex items-center justify-center gap-1.5 z-10">
                    <div className="w-2 h-2 rounded-full bg-[#1A1A1A] border border-[#333]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2A3A4A]"></div>
                  </div>

                  {/* Botões laterais */}
                  <div className="absolute -left-[8px] top-24 w-[4px] h-8 bg-[#2A2A2A] rounded-l-sm"></div>
                  <div className="absolute -left-[8px] top-36 w-[4px] h-12 bg-[#2A2A2A] rounded-l-sm"></div>
                  <div className="absolute -left-[8px] top-52 w-[4px] h-12 bg-[#2A2A2A] rounded-l-sm"></div>
                  <div className="absolute -right-[8px] top-32 w-[4px] h-16 bg-[#2A2A2A] rounded-r-sm"></div>

                  {/* Tela do celular */}
                  <div className="absolute inset-[3px] rounded-[28px] bg-[#0A0A0A] overflow-hidden">

                    {/* Status bar */}
                    <div className="flex items-center justify-between px-4 pt-8 pb-1.5">
                      <span className="text-white text-[9px] font-bold">9:41</span>
                      <div className="flex items-center gap-1">
                        <Wifi className="w-2.5 h-2.5 text-white" />
                        <Battery className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* App content */}
                    <div className="px-3 py-2 space-y-2.5">

                      {/* Header app */}
                      <div className="bg-[#D4AF37] rounded-xl p-3 text-center">
                        <p className="text-black font-black text-[11px] leading-tight">IA QUE DÁ DINHEIRO</p>
                        <p className="text-black/70 text-[8px] font-bold mt-0.5">Curso Completo</p>
                      </div>

                      {/* Notificação de venda */}
                      <div className="bg-[#1A2A1A] border border-[#25D366]/40 rounded-lg p-2.5 flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                          <DollarSign className="w-3 h-3 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[#25D366] text-[9px] font-black">VENDA REALIZADA!</p>
                          <p className="text-gray-400 text-[8px]">+ R$ 247,00</p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="bg-[#111] rounded-lg p-2.5 text-center">
                          <p className="text-[#D4AF37] font-black text-sm">R$ 3.2k</p>
                          <p className="text-gray-500 text-[8px]">Este mês</p>
                        </div>
                        <div className="bg-[#111] rounded-lg p-2.5 text-center">
                          <p className="text-[#25D366] font-black text-sm">47</p>
                          <p className="text-gray-500 text-[8px]">Vendas</p>
                        </div>
                      </div>

                      {/* Progresso */}
                      <div className="bg-[#111] rounded-lg p-2.5">
                        <div className="flex justify-between mb-1.5">
                          <p className="text-white text-[9px] font-bold">Meta do mês</p>
                          <p className="text-[#D4AF37] text-[9px] font-bold">64%</p>
                        </div>
                        <div className="h-1.5 bg-[#222] rounded-full overflow-hidden">
                          <div className="h-full w-[64%] bg-[#D4AF37] rounded-full"></div>
                        </div>
                      </div>

                      {/* Módulos */}
                      <div className="space-y-1">
                        {["Fundamentos IA", "Monetização", "Primeira Venda"].map((mod, i) => (
                          <div key={i} className="flex items-center gap-2 bg-[#111] rounded-lg px-2.5 py-1.5">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${i < 2 ? 'bg-[#25D366]' : 'bg-[#333]'}`}>
                              {i < 2 ? <Check className="w-2.5 h-2.5 text-white" /> : <Play className="w-2 h-2 text-white" />}
                            </div>
                            <p className="text-gray-300 text-[9px] font-medium">{mod}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge flutuante */}
                <div className="absolute -top-3 -right-3 bg-[#FF4444] text-white text-[10px] font-black px-2 py-1 rounded-full shadow-lg animate-bounce whitespace-nowrap">
                  47 VAGAS
                </div>
                <div className="absolute -bottom-3 -left-3 bg-[#25D366] text-white text-[10px] font-black px-2 py-1 rounded-full shadow-lg whitespace-nowrap">
                  + R$3.2k/mês
                </div>
              </div>
            </div>
          </div>

          {/* Scarcity bar */}
          <div className="mt-12 flex justify-center">
            <div className="bg-[#1A1A1A] border border-[#FF4444]/30 rounded-xl px-6 py-4 text-center max-w-md w-full">
              <p className="text-[#FF4444] font-black text-sm mb-2">⚠️ APENAS 47 VAGAS NESTE PREÇO</p>
              <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-[#FF4444] rounded-full animate-pulse"></div>
              </div>
              <p className="text-gray-400 text-xs mt-2">85% das vagas já foram preenchidas · Após atingir o limite: R$ 297</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Preço — NOVO */}
      <section className="py-16 px-4 bg-[#080808]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gray-400 text-base mb-2">Investimento único, resultado para sempre</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Acesso Completo Por
            </h2>
          </div>

          <div className="relative max-w-lg mx-auto">
            {/* Badge mais popular */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-xs font-black px-6 py-1.5 rounded-full z-10 whitespace-nowrap">
              OFERTA ESPECIAL — 95% OFF
            </div>

            <div className="bg-[#111] border-2 border-[#D4AF37] rounded-2xl p-8 text-center shadow-[0_0_60px_rgba(212,175,55,0.15)]">

              <div className="flex items-center justify-center gap-3 mb-6">
                <div>
                  <p className="text-gray-500 text-sm line-through">De R$ 297</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#D4AF37] text-2xl font-black">R$</span>
                    <span className="text-[#D4AF37] text-6xl sm:text-7xl font-black leading-none">47</span>
                  </div>
                  <p className="text-gray-400 text-sm">ou 12x de R$ 4,70</p>
                </div>
              </div>

              {/* O que está incluso */}
              <div className="space-y-3 mb-8 text-left">
                {[
                  "Curso completo com 4 módulos e 9 aulas",
                  "Acesso vitalício + atualizações grátis",
                  "5 bônus exclusivos no valor de R$ 197",
                  "Grupo VIP no Telegram",
                  "Suporte via WhatsApp",
                  "Certificado de conclusão"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-200 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleCheckout}
                className="w-full inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-black text-lg sm:text-xl px-8 py-4 sm:py-5 rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                <Lock className="w-5 h-5 relative z-10" />
                <span className="relative z-10">GARANTIR ACESSO AGORA</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Shield className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Garantia 7 dias</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Lock className="w-3.5 h-3.5 text-[#229ED9]" />
                  <span>100% seguro</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Acesso imediato</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Autoridade */}
      <section className="py-16 md:py-24 px-4 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-black mb-4">
              QUEM ESTÁ POR TRÁS DESTE MÉTODO
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-[#D4AF37]/10 border-2 border-[#D4AF37]/30 p-1 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                  alt="Júlia - Especialista em IA"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left space-y-4">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1">
                  Olá, me chamo <span className="text-[#D4AF37]">Júlia</span>
                </h2>
                <p className="text-gray-500 text-sm">Especialista em IA para Monetização</p>
              </div>

              <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>Quando descobri a Inteligência Artificial, estava precisando de uma renda extra e não sabia por onde começar.</p>
                <p>Em poucos meses, aprendi que era <strong className="text-white">muito mais simples do que parecia</strong> — e que qualquer pessoa podia fazer isso de casa, sem aparecer, sem experiência.</p>
                <p className="text-[#D4AF37] font-bold">Hoje minha missão é mostrar que você também pode, mesmo partindo do zero.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24 px-4 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 border border-[#FF6B35]/30 text-[#FF6B35] px-4 py-2 rounded-full text-sm font-black mb-4">
              O QUE VOCÊ VAI CONQUISTAR
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Transforme Sua Vida Com IA
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: DollarSign, title: "Renda Extra Real", desc: "De R$ 1.000 a R$ 5.000/mês trabalhando de casa", accent: "#25D366" },
              { icon: Clock, title: "Flexibilidade Total", desc: "Apenas 2-3h por dia no seu próprio horário", accent: "#229ED9" },
              { icon: Rocket, title: "Resultado Rápido", desc: "Primeira venda em até 30 dias seguindo o método", accent: "#FF6B35" },
              { icon: Brain, title: "Método Prático", desc: "Aprenda IA aplicada ao ponto, sem enrolação", accent: "#A855F7" },
              { icon: Shield, title: "100% Anônimo", desc: "Sem mostrar rosto, sem gravar vídeos, sem aparecer", accent: "#D4AF37" },
              { icon: Users, title: "Suporte VIP", desc: "Grupo Telegram + WhatsApp sempre disponível", accent: "#EC4899" }
            ].map((benefit, index) => (
              <div key={index} className="bg-[#0F0F0F] border border-[#1A1A1A] hover:border-[#2A2A2A] rounded-xl p-6 transition-all duration-300 group hover:translate-y-[-2px]">
                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{ backgroundColor: `${benefit.accent}20` }}>
                  <benefit.icon className="w-6 h-6" style={{ color: benefit.accent }} />
                </div>
                <h3 className="text-white font-black text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos — MELHORADOS */}
      <section className="py-16 md:py-24 px-4 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-black mb-4">
              RESULTADOS REAIS DE ALUNOS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Quem Aplicou, Transformou
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
            {[
              {
                text: "Em 3 semanas já fiz minha primeira venda de R$ 247. O método é simples demais! Nunca imaginei que seria tão fácil trabalhar de casa com IA.",
                name: "Ana Paula S.",
                role: "Ex-atendente, agora empreendedora digital",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
                earnings: "R$ 2.800/mês"
              },
              {
                text: "Comecei do absoluto zero, sem saber nada de tecnologia. Hoje estou faturando mais do que no meu emprego. Melhor investimento que já fiz.",
                name: "Carlos S.",
                role: "Antes motorista de app, hoje empreendedor",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                earnings: "R$ 4.100/mês"
              },
              {
                text: "Achei que era golpe, mas resolvi tentar pela garantia de 7 dias. Hoje já passei meu salário anterior. A Júlia explica tudo de forma simples!",
                name: "Mariana C.",
                role: "Designer que triplicou a renda",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
                earnings: "R$ 3.500/mês"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-xl p-6 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-5 flex-1 italic">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-[#1A1A1A]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#D4AF37]/30"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs truncate">{testimonial.role}</p>
                  </div>
                  <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg px-2 py-1 text-right flex-shrink-0">
                    <p className="text-[#25D366] font-black text-xs">{testimonial.earnings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Número social proof */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {[
              { number: "3.847+", label: "Alunos ativos" },
              { number: "97%", label: "Recomendam o curso" },
              { number: "30 dias", label: "Para 1ª venda" },
              { number: "R$5k", label: "Máximo mensal" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-[#D4AF37] font-black text-2xl sm:text-3xl">{stat.number}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-16 md:py-24 px-4 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-black mb-4 animate-pulse">
              BÔNUS EXCLUSIVOS — GRÁTIS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
              5 Bônus no Valor de R$ 197
            </h2>
            <p className="text-gray-500 text-base">Inclusos sem custo adicional, por tempo limitado</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
            {[
              { title: "Lista de Prompts Prontos", icon: FileText, desc: "Templates validados para usar hoje mesmo", value: "R$ 47" },
              { title: "Ferramentas Recomendadas", icon: Zap, desc: "As melhores IAs para cada tipo de tarefa", value: "R$ 37" },
              { title: "Checklist Primeira Venda", icon: CheckCircle, desc: "Passo a passo para sua primeira venda", value: "R$ 47" },
              { title: "Scripts de Vídeos", icon: Video, desc: "Roteiros prontos para criar conteúdo", value: "R$ 37" },
              { title: "Modelos de Post", icon: Sparkles, desc: "Templates para Instagram, Facebook e mais", value: "R$ 29" }
            ].map((bonus, index) => (
              <div key={index} className="bg-[#0F0F0F] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 rounded-xl p-5 transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center">
                    <bonus.icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-[#25D366] text-xs font-black bg-[#25D366]/10 border border-[#25D366]/30 px-2 py-0.5 rounded-full">GRÁTIS</span>
                </div>
                <h3 className="text-white font-black text-base mb-1">{bonus.title}</h3>
                <p className="text-gray-500 text-sm flex-1">{bonus.desc}</p>
                <p className="text-gray-600 text-xs mt-3 line-through">Valor: {bonus.value}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleCheckout}
              className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-black text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
            >
              <Gift className="w-5 h-5 sm:w-6 sm:h-6" />
              QUERO TODOS OS BÔNUS GRÁTIS
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="py-16 md:py-24 px-4 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 border border-[#FF6B35]/30 text-[#FF6B35] px-4 py-2 rounded-full text-sm font-black mb-4">
              CONTEÚDO COMPLETO
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              4 Módulos Estratégicos
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                module: "01",
                title: "Fundamentos e Primeiros Passos",
                lessons: "2 aulas práticas",
                highlights: ["Setup inicial completo", "Primeiros passos com IA", "Ferramentas essenciais"],
                color: "#229ED9"
              },
              {
                module: "02",
                title: "Métodos Práticos de Monetização",
                lessons: "3 aulas práticas",
                highlights: ["Templates prontos", "Casos de sucesso reais", "Atalhos que funcionam"],
                color: "#25D366"
              },
              {
                module: "03",
                title: "Sua Primeira Venda Garantida",
                lessons: "2 aulas práticas",
                highlights: ["Scripts de venda prontos", "Onde encontrar clientes", "Como fechar vendas"],
                color: "#FF6B35"
              },
              {
                module: "04",
                title: "Escala e Multiplicação de Resultados",
                lessons: "2 aulas práticas",
                highlights: ["Automação inteligente", "Escala de 10x", "Gestão de tempo"],
                color: "#D4AF37"
              }
            ].map((course, index) => (
              <div key={index} className="bg-[#0F0F0F] border border-[#1A1A1A] hover:border-[#2A2A2A] rounded-xl p-5 sm:p-6 transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg" style={{ backgroundColor: `${course.color}20`, color: course.color }}>
                  {course.module}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-white font-black text-lg sm:text-xl">{course.title}</h3>
                    <span className="text-xs font-bold text-gray-500 flex-shrink-0">{course.lessons}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-400 bg-[#111] px-3 py-1.5 rounded-lg border border-[#1A1A1A]">
                        <Zap className="w-3 h-3 flex-shrink-0" style={{ color: course.color }} />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={handleCheckout}
              className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-black text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
            >
              <BookOpen className="w-5 h-5" />
              QUERO ACESSO COMPLETO
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 md:py-24 px-4 bg-[#080808]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-[#0F0F0F] border-2 border-[#25D366]/30 rounded-2xl p-8 sm:p-12 shadow-[0_0_60px_rgba(37,211,102,0.05)]">
            <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-[#25D366]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Garantia de 7 Dias
            </h2>
            <p className="text-[#25D366] font-black text-xl sm:text-2xl mb-6">
              Você não corre NENHUM risco
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              Acesse o curso completo, aplique o método, veja os resultados. Se por qualquer motivo não gostar em até 7 dias,
              <strong className="text-white"> devolvemos 100% do seu dinheiro</strong>, sem perguntas, sem burocracia.
              O risco é todo nosso — você só tem a ganhar.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { title: "100% do dinheiro de volta", desc: "Devolução total sem questionamentos" },
                { title: "Em até 7 dias", desc: "Testou e não gostou, recebe de volta" },
                { title: "Sem burocracia", desc: "Um email é suficiente para cancelar" }
              ].map((item, i) => (
                <div key={i} className="bg-[#25D366]/5 border border-[#25D366]/20 rounded-xl p-4">
                  <p className="text-white font-black text-sm mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={handleCheckout}
              className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-black text-lg sm:text-xl px-8 py-4 sm:py-5 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(37,211,102,0.3)]"
            >
              <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
              COMEÇAR SEM RISCOS AGORA
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 px-4 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#FF4444]/10 border border-[#FF4444]/30 text-[#FF4444] px-5 py-2.5 rounded-full text-sm font-black animate-pulse">
            ⏰ ÚLTIMAS VAGAS NESTE PREÇO
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            Sua Decisão Hoje<br />
            <span className="text-[#D4AF37]">Define Seu Futuro</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Enquanto você hesita, outras pessoas estão fazendo sua primeira venda. Não deixe para amanhã o que pode mudar sua vida hoje.
          </p>

          <button
            onClick={handleCheckout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-black text-xl sm:text-2xl px-10 sm:px-16 py-5 sm:py-6 rounded-xl shadow-[0_0_60px_rgba(212,175,55,0.4)] hover:shadow-[0_0_80px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-[1.03] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
            <Rocket className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
            <span className="relative z-10 leading-tight">GARANTIR ACESSO AGORA</span>
            <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Lock className="w-4 h-4 text-[#229ED9]" />
              <span>Pagamento 100% seguro</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Zap className="w-4 h-4 text-[#D4AF37]" />
              <span>Acesso em 2 minutos</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Shield className="w-4 h-4 text-[#25D366]" />
              <span>Garantia 7 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030303] text-gray-600 py-10 px-4 text-center border-t border-[#111]">
        <p className="text-sm mb-3 font-bold text-gray-500">© 2024 IA que Dá Dinheiro - Todos os direitos reservados</p>
        <p className="text-xs max-w-2xl mx-auto mb-6 leading-relaxed">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho
          de uma estratégia não deve ser interpretada como garantia de resultados. Os resultados
          podem variar de pessoa para pessoa.
        </p>
        <div className="flex justify-center gap-8 text-sm">
          <button onClick={handleWhatsAppOpen} className="hover:text-[#25D366] transition-colors font-bold">
            WhatsApp
          </button>
          <button onClick={handleTelegramOpen} className="hover:text-[#229ED9] transition-colors font-bold">
            Telegram
          </button>
        </div>
      </footer>
    </div>
  );
}
