"use client";

import { Check, Shield, Clock, TrendingUp, Users, Star, ArrowRight, Lock, MessageCircle, ChevronDown, Zap, Target, Award, Rocket, X, Sparkles, DollarSign, Trophy, AlertCircle, Gift, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 30 });
  
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
  
  // NÚMEROS DE CONTATO
  const WHATSAPP_NUMBER = "5519981168970";
  const TELEGRAM_USERNAME = "seucanalaqui";
  
  // LINK DE CHECKOUT DA KIWIFY
  const CHECKOUT_URL = "https://pay.kiwify.com.br/2VJCa4D";
  
  const handleCheckout = () => {
    window.open(CHECKOUT_URL, '_blank');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Oi, quero entrar no curso IA que Dá Dinheiro. Como funciona o acesso?");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleTelegram = () => {
    window.open(`https://t.me/${TELEGRAM_USERNAME}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      
      {/* Botão WhatsApp Flutuante */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* Botão Chat de Dúvidas Flutuante */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        aria-label="Chat de Dúvidas"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* ChatBox Flutuante */}
      {chatOpen && (
        <div className="fixed bottom-36 right-4 left-4 md:bottom-44 md:right-6 md:left-auto z-50 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 md:p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 md:w-6 md:h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm md:text-base">Atendimento Rápido</h3>
                <p className="text-blue-100 text-xs">Resposta em minutos</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white hover:bg-blue-600 p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 md:p-6 bg-gray-50 max-h-80 md:max-h-96 overflow-y-auto">
            <div className="space-y-3 md:space-y-4">
              <div className="flex gap-2 md:gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <div className="bg-white p-3 md:p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                  <p className="text-gray-800 text-xs md:text-sm font-medium">
                    Olá! 👋 Estou aqui para te ajudar
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Escolha uma opção ou fale direto comigo
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center font-medium">Dúvidas mais comuns:</p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-white hover:bg-blue-50 p-2.5 md:p-3 rounded-xl text-left text-xs md:text-sm text-gray-700 shadow-sm transition-colors border border-gray-200 font-medium"
                >
                  💳 Como funciona o pagamento?
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-white hover:bg-blue-50 p-2.5 md:p-3 rounded-xl text-left text-xs md:text-sm text-gray-700 shadow-sm transition-colors border border-gray-200 font-medium"
                >
                  📚 O que vou aprender no curso?
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-white hover:bg-blue-50 p-2.5 md:p-3 rounded-xl text-left text-xs md:text-sm text-gray-700 shadow-sm transition-colors border border-gray-200 font-medium"
                >
                  ⏰ Por quanto tempo tenho acesso?
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-white hover:bg-blue-50 p-2.5 md:p-3 rounded-xl text-left text-xs md:text-sm text-gray-700 shadow-sm transition-colors border border-gray-200 font-medium"
                >
                  🛡️ Como funciona a garantia?
                </button>
              </div>
            </div>
          </div>

          <div className="p-3 md:p-4 bg-white border-t border-gray-200">
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 md:py-3 text-sm md:text-base"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Falar Agora no WhatsApp
            </Button>
          </div>
        </div>
      )}

      {/* Header com Urgência e Contador */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white py-3 md:py-4 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
            <p className="text-xs md:text-base font-black">
              🔥 OFERTA EXPIRA EM:
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-3 bg-black/30 px-4 py-2 rounded-xl backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-[10px] md:text-xs">HORAS</div>
            </div>
            <div className="text-2xl md:text-3xl font-black">:</div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-[10px] md:text-xs">MIN</div>
            </div>
            <div className="text-2xl md:text-3xl font-black">:</div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-[10px] md:text-xs">SEG</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - SUPER OTIMIZADA */}
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 px-6 py-3 text-sm md:text-base font-black shadow-2xl border-2 border-yellow-300 animate-pulse">
            ⚡ +3.847 PESSOAS JÁ MUDARAM DE VIDA
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight">
            Imagine Ganhar de<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 drop-shadow-2xl">
              R$ 1.000 a R$ 5.000
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-gray-300">
              Todo Mês, Trabalhando de Casa
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            <span className="text-yellow-400 font-black">Você não precisa de experiência.</span> Não precisa aparecer. Não precisa criar conteúdo.<br />
            <span className="text-white font-bold">Apenas seguir um método simples e validado</span> que já transformou a vida de milhares de pessoas comuns como você.
          </p>

          <div className="mb-10 space-y-6">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 md:px-16 py-7 md:py-10 text-xl md:text-3xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 w-full md:w-auto group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer"></div>
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 mr-3 group-hover:rotate-12 transition-transform" />
              QUERO MUDAR MINHA VIDA AGORA
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
              <div className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/30">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-bold">Certificado Incluso</span>
              </div>
            </div>
          </div>

          <div className="inline-block bg-slate-800/50 backdrop-blur-sm border-2 border-orange-500/30 rounded-2xl p-6 md:p-8">
            <p className="text-orange-400 font-black text-lg md:text-xl mb-3">⚠️ ATENÇÃO: APENAS 47 VAGAS NESTE PREÇO</p>
            <p className="text-gray-300 text-sm md:text-base">Após atingir o limite, o valor volta para R$ 297</p>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL - Números Impactantes */}
      <section className="bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 py-12 md:py-20 border-y border-purple-500/30 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Números Que Comprovam Nosso Sucesso
            </h2>
            <p className="text-gray-300 text-lg">Resultados reais de pessoas reais</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              { number: "3.847+", label: "Alunos Transformados", icon: Users, color: "from-blue-500 to-cyan-500" },
              { number: "R$ 2.8M+", label: "Gerado pelos Alunos", icon: DollarSign, color: "from-green-500 to-emerald-500" },
              { number: "4.9★", label: "Avaliação Média", icon: Star, color: "from-yellow-500 to-orange-500" },
              { number: "98%", label: "Satisfação Garantida", icon: Trophy, color: "from-purple-500 to-pink-500" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
                <p className="text-3xl md:text-5xl font-black text-white mb-2 group-hover:scale-105 transition-transform">{stat.number}</p>
                <p className="text-sm md:text-base text-gray-300 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Identificação - COPY EMOCIONAL */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border border-orange-500/30 px-6 py-3 text-base font-black">
              💭 VOCÊ SE IDENTIFICA?
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Se Você Está Cansado de...<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Este Curso É Para Você
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {[
              { emoji: "😰", text: "Depender de um salário que mal paga as contas no final do mês" },
              { emoji: "⏰", text: "Acordar cedo, pegar trânsito e chegar exausto em casa todos os dias" },
              { emoji: "😔", text: "Ver oportunidades passarem porque não tem tempo ou dinheiro para aproveitar" },
              { emoji: "💔", text: "Sentir que está preso em uma rotina sem perspectiva de melhora" },
              { emoji: "😓", text: "Tentar ganhar dinheiro online mas não saber por onde começar" },
              { emoji: "🚫", text: "Ter medo de aparecer ou criar conteúdo nas redes sociais" }
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-slate-800/50 border-2 border-slate-700 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0 group-hover:scale-125 transition-transform">{item.emoji}</div>
                  <p className="text-gray-300 text-lg leading-relaxed font-medium pt-2">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-4xl font-black text-white mb-6">
                🎯 Agora Imagine Isso...
              </h3>
              <div className="space-y-4 text-left">
                {[
                  "✅ Acordar quando quiser, sem despertador, sem pressa",
                  "✅ Trabalhar de casa, no seu ritmo, apenas 2-3 horas por dia",
                  "✅ Ver dinheiro entrando na sua conta todos os dias",
                  "✅ Ter liberdade para viajar, aproveitar a família, viver de verdade",
                  "✅ Não depender mais de patrão ou salário fixo",
                  "✅ Construir um futuro financeiro sólido e seguro"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-green-500/20">
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <p className="text-white text-lg font-bold">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-8 text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              💰 SIM, QUERO ESSA TRANSFORMAÇÃO
              <ArrowRight className="ml-3 w-7 h-7" />
            </Button>
            <p className="text-gray-400 mt-4 text-sm">
              ⚡ Acesso imediato após o pagamento
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO DO CURSO - MAIS VISUAL */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-white px-6 py-3 text-base font-black shadow-lg">
              📚 MÉTODO COMPLETO E VALIDADO
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              O Que Você Vai Aprender
            </h2>
            <p className="text-gray-300 text-xl mb-3 font-medium">4 módulos estratégicos + 9 aulas práticas</p>
            <p className="text-2xl text-yellow-400 font-black">✨ Pronto para aplicar HOJE MESMO</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                module: "MÓDULO 1",
                title: "Fundamentos e Primeiros Passos",
                description: "Do zero absoluto até sua primeira configuração. Tudo explicado de forma simples e direta.",
                lessons: "2 aulas práticas",
                icon: "🎯",
                highlights: ["Setup inicial completo", "Primeiros passos com IA", "Ferramentas essenciais"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                module: "MÓDULO 2",
                title: "Métodos Práticos de Monetização",
                description: "Estratégias validadas e testadas para começar a ganhar dinheiro rapidamente com IA.",
                lessons: "3 aulas práticas",
                icon: "💰",
                highlights: ["Templates prontos para usar", "Casos de sucesso reais", "Atalhos que funcionam"],
                color: "from-green-500 to-emerald-500"
              },
              {
                module: "MÓDULO 3",
                title: "Sua Primeira Venda Garantida",
                description: "Passo a passo exato para conseguir seus primeiros clientes e fazer sua primeira venda.",
                lessons: "2 aulas práticas",
                icon: "🚀",
                highlights: ["Scripts de venda prontos", "Onde encontrar clientes", "Como fechar vendas"],
                color: "from-orange-500 to-red-500"
              },
              {
                module: "MÓDULO 4",
                title: "Escala e Multiplicação de Resultados",
                description: "Como organizar e automatizar para multiplicar seus ganhos exponencialmente.",
                lessons: "2 aulas práticas",
                icon: "📈",
                highlights: ["Automação inteligente", "Escala de 10x", "Gestão de tempo"],
                color: "from-purple-500 to-pink-500"
              }
            ].map((course, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-6xl group-hover:scale-110 transition-transform">{course.icon}</div>
                  <div className="flex-1">
                    <Badge className={`mb-3 bg-gradient-to-r ${course.color} text-white border-0 text-sm font-black px-4 py-1`}>
                      {course.module}
                    </Badge>
                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors">{course.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-base">{course.description}</p>
                <div className="space-y-3 mb-6">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300 bg-slate-700/30 p-2 rounded-lg">
                      <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="font-bold">{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-green-400 font-black text-base">
                  <Check className="w-5 h-5" />
                  <span>{course.lessons}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <Card className="p-8 md:p-12 bg-gradient-to-r from-green-900/40 to-emerald-900/40 border-4 border-green-500/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
              <div className="text-center relative z-10">
                <Gift className="w-20 h-20 text-green-400 mx-auto mb-6 animate-bounce" />
                <h3 className="text-3xl md:text-4xl font-black text-white mb-8">
                  🎁 BÔNUS EXCLUSIVOS (Valor: R$ 231)
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  {[
                    { title: "Mindset Milionário", value: "R$ 97", lessons: "3 aulas transformadoras", icon: "🧠" },
                    { title: "Produtividade 10x", value: "R$ 67", lessons: "Guia completo", icon: "⚡" },
                    { title: "Gestão Financeira", value: "R$ 67", lessons: "Planilhas prontas", icon: "💎" }
                  ].map((bonus, idx) => (
                    <div key={idx} className="bg-slate-800/70 rounded-2xl p-6 border-2 border-green-500/30 hover:border-green-500 transition-all hover:scale-105">
                      <div className="text-5xl mb-4">{bonus.icon}</div>
                      <p className="text-green-400 font-black text-xl mb-2">{bonus.title}</p>
                      <p className="text-gray-300 text-sm mb-4 font-medium">{bonus.lessons}</p>
                      <Badge className="bg-green-500 text-white font-black text-base px-4 py-2">{bonus.value}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-8 text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              🎯 QUERO ACESSO COMPLETO AGORA
              <ArrowRight className="ml-3 w-7 h-7" />
            </Button>
          </div>
        </div>
      </section>

      {/* Prova Social - DEPOIMENTOS VISUAIS */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-400 text-black px-6 py-3 text-base font-black shadow-xl">
              ⭐ HISTÓRIAS REAIS DE TRANSFORMAÇÃO
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Pessoas Comuns, Resultados Extraordinários
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto font-medium">
              Veja como o método transformou a vida de quem estava na mesma situação que você
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
              {
                name: "Mariana Silva",
                role: "Ex-recepcionista, 28 anos",
                result: "R$ 3.200 no primeiro mês",
                text: "Estava desempregada e desesperada. Não acreditava que conseguiria. Segui o método exatamente como ensinado e em 30 dias fiz minha primeira venda. Hoje já faturei mais de R$ 3 mil e minha vida mudou completamente!",
                rating: 5,
                image: "👩‍💼"
              },
              {
                name: "Carlos Eduardo",
                role: "Ex-motorista de app, 35 anos",
                result: "R$ 5.800 em 45 dias",
                text: "Trabalhava 12 horas por dia no Uber e mal conseguia pagar as contas. Com o curso, aprendi a vender online e hoje trabalho 3 horas por dia de casa. Minha qualidade de vida melhorou 1000%!",
                rating: 5,
                image: "👨‍💼"
              },
              {
                name: "Juliana Costa",
                role: "Dona de casa, 32 anos",
                result: "R$ 2.100 no segundo mês",
                text: "Sempre quis ajudar nas contas mas não tinha tempo para trabalhar fora. Com o método, consigo ganhar dinheiro cuidando dos meus filhos. Hoje contribuo com as despesas e ainda sobra!",
                rating: 5,
                image: "👩"
              },
              {
                name: "Roberto Alves",
                role: "Aposentado, 58 anos",
                result: "R$ 1.850 mensais",
                text: "Achei que era tarde demais para aprender algo novo. Mas o curso é tão simples que até eu consegui! Agora tenho uma renda extra que complementa minha aposentadoria e posso ajudar meus filhos.",
                rating: 5,
                image: "👴"
              },
              {
                name: "Fernanda Lima",
                role: "Estudante, 22 anos",
                result: "R$ 2.400 em 3 semanas",
                text: "Precisava pagar minha faculdade e não tinha tempo para trabalhar. O curso me ensinou a ganhar dinheiro online nas horas vagas. Consegui pagar minha mensalidade sem depender dos meus pais!",
                rating: 5,
                image: "👩‍🎓"
              },
              {
                name: "Paulo Santos",
                role: "Ex-vendedor, 41 anos",
                result: "R$ 7.300 no terceiro mês",
                text: "Já trabalhava com vendas mas nunca online. O método me abriu os olhos para um mundo novo de possibilidades. Hoje ganho mais que meu salário antigo trabalhando de casa e no meu horário!",
                rating: 5,
                image: "👨"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-6xl">{testimonial.image}</div>
                  <div>
                    <p className="font-black text-white text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic text-sm">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="border-t-2 border-slate-700 pt-4">
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black text-base px-4 py-2">
                    💰 {testimonial.result}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-2 border-purple-500/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mb-10">
            <p className="text-3xl md:text-4xl font-black text-white mb-4">
              Mais de 3.847 Alunos Transformados
            </p>
            <p className="text-gray-300 mb-6 text-xl font-medium">
              Sua história de sucesso pode ser a próxima!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-black text-xs border-2 border-white">
                  ✓
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-8 text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              💎 QUERO FAZER PARTE DESSA HISTÓRIA
              <ArrowRight className="ml-3 w-7 h-7" />
            </Button>
          </div>
        </div>
      </section>

      {/* OFERTA COMPLETA - MAIS IMPACTANTE */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 text-lg font-black shadow-2xl animate-pulse">
              🎁 OFERTA ESPECIAL POR TEMPO LIMITADO
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Tudo Que Você Recebe Hoje
            </h2>
            <p className="text-gray-300 text-xl font-bold">Investimento único • Acesso vitalício • Zero mensalidades</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="p-10 md:p-14 bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-orange-500 shadow-2xl shadow-orange-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-2 font-black text-sm rotate-45 translate-x-8 -translate-y-2">
                95% OFF
              </div>
              
              <div className="space-y-5 mb-10">
                {[
                  { item: "✅ Curso Completo IA que Dá Dinheiro", value: "R$ 297", highlight: true },
                  { item: "✅ 4 Módulos Estratégicos + 9 Aulas Práticas", value: "R$ 197", highlight: true },
                  { item: "🎁 BÔNUS 1: Mindset Milionário (3 aulas)", value: "R$ 97", highlight: false },
                  { item: "🎁 BÔNUS 2: Produtividade Máxima", value: "R$ 67", highlight: false },
                  { item: "🎁 BÔNUS 3: Gestão Financeira Pessoal", value: "R$ 67", highlight: false },
                  { item: "✅ Grupo VIP no Telegram (Suporte)", value: "R$ 147", highlight: true },
                  { item: "✅ Certificado de Conclusão", value: "R$ 47", highlight: true },
                  { item: "✅ Atualizações Vitalícias Gratuitas", value: "R$ 197", highlight: true }
                ].map((bonus, index) => (
                  <div key={index} className={`flex items-center justify-between border-b border-slate-700 pb-4 ${bonus.highlight ? 'bg-slate-700/20 -mx-4 px-4 py-4 rounded-lg' : ''}`}>
                    <span className="text-white text-lg md:text-xl font-black pr-4">{bonus.item}</span>
                    <span className="text-gray-400 line-through text-base md:text-lg whitespace-nowrap font-bold">{bonus.value}</span>
                  </div>
                ))}
              </div>

              <div className="border-t-4 border-orange-500 pt-8 text-center">
                <p className="text-gray-400 text-2xl mb-3 font-bold">Valor Total Normal:</p>
                <p className="text-5xl md:text-6xl text-gray-500 line-through mb-6 font-black">R$ 1.116</p>
                <p className="text-gray-300 text-3xl mb-6 font-black">Hoje você paga apenas:</p>
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-10 md:p-12 mb-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  <p className="text-7xl md:text-9xl font-black text-white mb-4 relative z-10">R$ 47</p>
                  <p className="text-white text-2xl md:text-3xl font-black relative z-10">ou 12x de R$ 4,70</p>
                  <p className="text-green-100 text-lg mt-4 font-bold relative z-10">💳 Parcelamento sem juros no cartão</p>
                </div>
                <Badge className="bg-red-600 text-white px-10 py-5 text-xl md:text-2xl font-black animate-pulse shadow-2xl">
                  🔥 Economia de R$ 1.069 (95% de desconto)
                </Badge>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-14 py-10 text-3xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 w-full md:w-auto relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer"></div>
              <span className="relative z-10 flex items-center">
                🎯 GARANTIR MINHA VAGA POR R$ 47
                <ArrowRight className="ml-3 w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
            <p className="text-gray-400 mt-6 text-lg font-bold">
              ⚡ Acesso liberado em 2 minutos • 🛡️ Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>

      {/* GARANTIA - MAIS VISUAL */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-8 bg-green-500/20 rounded-full mb-6 backdrop-blur-sm animate-pulse">
                <Shield className="w-24 h-24 text-green-400" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                Garantia Incondicional de 7 Dias
              </h2>
              <p className="text-2xl text-green-400 font-black">
                Você não corre NENHUM risco!
              </p>
            </div>

            <Card className="p-10 md:p-14 bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-green-500 shadow-2xl shadow-green-500/30">
              <div className="space-y-8">
                <div className="flex items-start gap-6 bg-green-500/10 p-6 rounded-2xl border-2 border-green-500/30">
                  <Check className="w-10 h-10 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4">100% Sem Riscos</h3>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      Tenho tanta certeza de que este curso vai transformar sua vida que ofereço uma 
                      <span className="text-green-400 font-black"> garantia incondicional de 7 dias</span>. 
                      Teste tudo, aplique o método, veja os resultados. Se não gostar, devolvo seu dinheiro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 bg-green-500/10 p-6 rounded-2xl border-2 border-green-500/30">
                  <Check className="w-10 h-10 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Devolução Total e Imediata</h3>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      Se por qualquer motivo você não ficar satisfeito, basta enviar um único email e 
                      devolvo <span className="text-green-400 font-black">100% do seu dinheiro</span>, 
                      sem perguntas, sem burocracia, sem enrolação.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 bg-green-500/10 p-6 rounded-2xl border-2 border-green-500/30">
                  <Check className="w-10 h-10 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4">O Risco É Todo Meu!</h3>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      Acesse o curso completo, assista todas as aulas, aplique o método, entre no grupo VIP. 
                      Se não gostar, recebe seu dinheiro de volta. 
                      <span className="text-green-400 font-black"> Você só tem a ganhar!</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl border-4 border-green-500">
                <p className="text-center text-2xl md:text-3xl text-white font-black">
                  ⚡ Literalmente ZERO riscos para você!
                </p>
              </div>
            </Card>

            <div className="text-center mt-12">
              <Button 
                onClick={handleCheckout}
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-8 text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 w-full md:w-auto"
              >
                🛡️ COMEÇAR SEM RISCOS AGORA
                <ArrowRight className="ml-3 w-7 h-7" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - OTIMIZADA */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border border-blue-500/30 px-6 py-3 text-base font-black">
              ❓ PERGUNTAS FREQUENTES
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Tire Suas Últimas Dúvidas
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto font-medium">
              Respostas claras e diretas para as dúvidas mais comuns
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            {[
              {
                question: "Sou iniciante total, nunca vendi nada online. Consigo fazer?",
                answer: "SIM! O curso foi criado especialmente para iniciantes. Tudo é explicado do zero, passo a passo, de forma simples e direta. Você não precisa de nenhuma experiência prévia. Nossos alunos que mais faturam são justamente os que começaram do absoluto zero."
              },
              {
                question: "Como funciona o acesso ao curso?",
                answer: "Assim que o pagamento for confirmado (instantâneo no cartão ou até 2 dias no boleto), você recebe por email o login e senha para acessar a plataforma. O acesso é vitalício - você pode assistir quando quiser, quantas vezes quiser, para sempre."
              },
              {
                question: "Preciso aparecer ou mostrar meu rosto?",
                answer: "NÃO! Este é um dos grandes diferenciais do método. Você não precisa aparecer, não precisa gravar vídeos mostrando o rosto, não precisa criar conteúdo nas redes sociais. Tudo é feito de forma anônima e discreta."
              },
              {
                question: "Quanto tempo por dia preciso dedicar?",
                answer: "Com apenas 2 a 3 horas por dia você já consegue aplicar tudo que ensinamos e começar a ver resultados. Muitos alunos fazem nas horas vagas, depois do trabalho ou nos finais de semana. Você adapta ao seu ritmo."
              },
              {
                question: "Quais formas de pagamento são aceitas?",
                answer: "Aceitamos cartão de crédito (em até 12x), PIX (com desconto) e boleto bancário. O pagamento é 100% seguro, processado pela Kiwify, uma das maiores plataformas de produtos digitais do Brasil."
              },
              {
                question: "Terei suporte se tiver dúvidas?",
                answer: "SIM! Você terá acesso ao nosso grupo VIP exclusivo no Telegram, onde nossa equipe e outros alunos estão prontos para te ajudar. Além disso, você pode entrar em contato direto pelo WhatsApp. Ninguém fica sem suporte!"
              }
            ].map((faq, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/50 border-2 border-slate-700 hover:border-orange-500 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-700/30 transition-colors"
                >
                  <h3 className="font-black text-lg md:text-xl text-white pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg font-medium">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-8 text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              ✅ DÚVIDAS ESCLARECIDAS - QUERO COMEÇAR
              <ArrowRight className="ml-3 w-7 h-7" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final Urgente - SUPER IMPACTANTE */}
      <section className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-8 bg-yellow-400 text-black px-8 py-4 text-lg md:text-xl font-black animate-pulse shadow-2xl">
            ⏰ ÚLTIMAS VAGAS NESTE PREÇO PROMOCIONAL
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Sua Decisão Agora Define<br />
            <span className="text-yellow-400">Seu Futuro Financeiro</span>
          </h2>
          <p className="text-xl md:text-3xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-bold">
            Você tem duas escolhas:<br />
            <span className="text-red-200">Continuar na mesma situação</span> ou 
            <span className="text-yellow-400"> dar o primeiro passo HOJE</span> para 
            construir a vida que você sempre sonhou
          </p>
          
          <Button 
            onClick={handleCheckout}
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 px-16 py-12 text-3xl md:text-4xl font-black rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 mb-8 w-full md:w-auto group"
          >
            🚀 SIM, QUERO MUDAR MINHA VIDA AGORA
            <ArrowRight className="ml-4 w-10 h-10 group-hover:translate-x-2 transition-transform" />
          </Button>

          <div className="space-y-4">
            <p className="text-white text-2xl md:text-3xl font-black">
              ⚡ Acesso Imediato — Comece em 2 Minutos
            </p>
            <p className="text-white/90 text-lg md:text-xl font-bold">
              🔒 Pagamento 100% Seguro | 🛡️ Garantia Incondicional de 7 Dias
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Contato - OTIMIZADA */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Ainda Tem Dúvidas?<br />
              <span className="text-green-400">Fale Conosco Agora!</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-bold">
              Nossa equipe está pronta para te ajudar a dar o primeiro passo
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 hover:border-green-500 transition-all duration-300 hover:scale-105">
                <MessageCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">WhatsApp</h3>
                <p className="text-gray-300 mb-6 text-lg font-medium">
                  Tire suas dúvidas diretamente pelo WhatsApp
                </p>
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white w-full py-6 text-lg font-black"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                <MessageCircle className="w-20 h-20 text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Telegram</h3>
                <p className="text-gray-300 mb-6 text-lg font-medium">
                  Entre no nosso canal oficial do Telegram
                </p>
                <Button 
                  onClick={handleTelegram}
                  className="bg-blue-500 hover:bg-blue-600 text-white w-full py-6 text-lg font-black"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Entrar no Telegram
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-8 px-4 text-center border-t border-slate-800">
        <p className="text-sm md:text-base mb-3 font-bold">© 2024 IA que Dá Dinheiro - Todos os direitos reservados</p>
        <p className="text-xs md:text-sm max-w-3xl mx-auto mb-4 leading-relaxed">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho 
          de uma estratégia não deve ser interpretada como garantia de resultados. Os resultados 
          podem variar de pessoa para pessoa.
        </p>
        <div className="flex justify-center gap-6 text-sm md:text-base">
          <button onClick={handleWhatsApp} className="hover:text-green-400 transition-colors font-bold">
            WhatsApp
          </button>
          <button onClick={handleTelegram} className="hover:text-blue-400 transition-colors font-bold">
            Telegram
          </button>
        </div>
      </footer>
    </div>
  );
}
