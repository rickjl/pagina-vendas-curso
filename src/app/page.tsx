"use client";

import { Check, Shield, Clock, TrendingUp, Users, Star, ArrowRight, Lock, MessageCircle, ChevronDown, Zap, Target, Award, Rocket, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  
  // NÚMEROS DE CONTATO
  const WHATSAPP_NUMBER = "5519981168970"; // WhatsApp da empresa
  const TELEGRAM_USERNAME = "seucanalaqui"; // Seu username do Telegram (sem @)
  
  // LINK DE CHECKOUT DA KIWIFY - CONFIGURADO
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      
      {/* Botão WhatsApp Flutuante - MOBILE OTIMIZADO */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* Botão Chat de Dúvidas Flutuante - MOBILE OTIMIZADO */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        aria-label="Chat de Dúvidas"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* ChatBox Flutuante - MOBILE OTIMIZADO */}
      {chatOpen && (
        <div className="fixed bottom-36 right-4 left-4 md:bottom-44 md:right-6 md:left-auto z-50 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header do Chat */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 md:p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 md:w-6 md:h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm md:text-base">Chat de Dúvidas</h3>
                <p className="text-blue-100 text-xs">Online agora</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white hover:bg-blue-600 p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Corpo do Chat - MOBILE OTIMIZADO */}
          <div className="p-4 md:p-6 bg-gray-50 max-h-80 md:max-h-96 overflow-y-auto">
            <div className="space-y-3 md:space-y-4">
              {/* Mensagem do Atendente */}
              <div className="flex gap-2 md:gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <div className="bg-white p-3 md:p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                  <p className="text-gray-800 text-xs md:text-sm">
                    Olá! 👋 Como posso te ajudar hoje?
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Tire suas dúvidas sobre o curso
                  </p>
                </div>
              </div>

              {/* Opções Rápidas */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center">Perguntas frequentes:</p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-white hover:bg-blue-50 p-2.5 md:p-3 rounded-xl text-left text-xs md:text-sm text-gray-700 shadow-sm transition-colors border border-gray-200"
                >
                  💰 Como funciona o pagamento?
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-white hover:bg-blue-50 p-2.5 md:p-3 rounded-xl text-left text-xs md:text-sm text-gray-700 shadow-sm transition-colors border border-gray-200"
                >
                  📚 Qual o conteúdo do curso?
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-white hover:bg-blue-50 p-2.5 md:p-3 rounded-xl text-left text-xs md:text-sm text-gray-700 shadow-sm transition-colors border border-gray-200"
                >
                  ⏰ Quanto tempo tenho de acesso?
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-white hover:bg-blue-50 p-2.5 md:p-3 rounded-xl text-left text-xs md:text-sm text-gray-700 shadow-sm transition-colors border border-gray-200"
                >
                  🛡️ Como funciona a garantia?
                </button>
              </div>
            </div>
          </div>

          {/* Footer do Chat */}
          <div className="p-3 md:p-4 bg-white border-t border-gray-200">
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 md:py-3 text-sm md:text-base"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      )}

      {/* Header com Urgência - MOBILE OTIMIZADO */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 md:py-3 px-4 text-center animate-pulse">
        <p className="text-xs md:text-base font-bold flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 md:w-5 md:h-5" />
          🔥 ÚLTIMAS VAGAS - Apenas 47 pessoas podem entrar neste preço!
        </p>
      </div>

      {/* Hero Section - MOBILE OTIMIZADO */}
      <section className="container mx-auto px-4 py-8 md:py-12 lg:py-20 text-center">
        <Badge className="mb-4 md:mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold shadow-lg">
          ⚡ Mais de 3.847 alunos já estão faturando
        </Badge>
        
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight">
          Nunca Foi Tão Fácil<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient">
            Ganhar Dinheiro na Internet
          </span>
        </h1>
        
        <p className="text-base md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
          Com este método de curso, <span className="text-yellow-400 font-bold">já vem tudo pronto</span> - 
          é só <span className="text-green-400 font-bold">copiar, colar e sair ganhando dinheiro</span>. 
          Simples assim!
        </p>

        {/* CTA TOPO - MOBILE OTIMIZADO */}
        <div className="mb-6 md:mb-10">
          <Button 
            onClick={handleCheckout}
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 md:px-12 py-6 md:py-8 text-base md:text-xl lg:text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 md:hover:scale-110 animate-bounce w-full md:w-auto"
          >
            🚀 QUERO COMEÇAR AGORA
            <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-7 md:h-7" />
          </Button>
          <p className="text-xs md:text-sm text-gray-400 mt-3 md:mt-4 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
            Garantia de 7 dias ou seu dinheiro de volta
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
            <span>Acesso imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
            <span>Tudo pronto para usar</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
            <span>Suporte dedicado</span>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL - NÚMEROS IMPACTANTES - MOBILE OTIMIZADO */}
      <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 py-8 md:py-12 lg:py-16 border-y border-purple-500/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { number: "3.847+", label: "Alunos Ativos", icon: Users },
              { number: "R$ 2.8M+", label: "Faturado pelos Alunos", icon: TrendingUp },
              { number: "4.9/5", label: "Avaliação Média", icon: Star },
              { number: "98%", label: "Taxa de Satisfação", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mb-2 md:mb-3 shadow-lg">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <p className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1">{stat.number}</p>
                <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quem É - MOBILE OTIMIZADO */}
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white text-center mb-3 md:mb-4">
            Este Curso é Para Você Se...
          </h2>
          <p className="text-center text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
            Identifique-se com pelo menos uma dessas situações
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              "Está cansado de depender de um salário fixo e quer ter renda extra",
              "Quer trabalhar de casa e ter mais liberdade e tempo com a família",
              "Já tentou ganhar dinheiro online mas não conseguiu resultados",
              "Não tem experiência com internet mas quer aprender do zero",
              "Quer um método simples, sem precisar aparecer ou criar conteúdo",
              "Busca uma fonte de renda que funcione mesmo com pouco tempo disponível"
            ].map((item, index) => (
              <Card key={index} className="p-4 md:p-6 bg-slate-800/50 border-2 border-slate-700 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA MEIO 1 - MOBILE OTIMIZADO */}
          <div className="text-center mt-8 md:mt-12">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 md:px-12 py-5 md:py-7 text-lg md:text-xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              💰 QUERO COMEÇAR HOJE
              <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* CONTEÚDO DO CURSO - MOBILE OTIMIZADO */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <Badge className="mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold">
              📚 CONTEÚDO COMPLETO
            </Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-4">
              O Que Você Vai Aprender
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-2">4 módulos práticos com tudo que você precisa</p>
            <p className="text-lg md:text-xl text-yellow-400 font-bold">✨ Tudo pronto para copiar, colar e lucrar!</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              {
                module: "MÓDULO 1",
                title: "Boas-vindas e Fundamentos",
                description: "Introdução ao curso e conceitos essenciais de IA para começar do zero",
                lessons: "2 aulas",
                icon: "🎯",
                highlights: ["Configuração inicial", "Primeiros passos com IA"]
              },
              {
                module: "MÓDULO 2",
                title: "Formas Rápidas de Ganhar Dinheiro com IA",
                description: "Métodos práticos e validados para monetizar usando Inteligência Artificial",
                lessons: "3 aulas",
                icon: "💰",
                highlights: ["Templates prontos", "Estratégias validadas", "Casos de sucesso"]
              },
              {
                module: "MÓDULO 3",
                title: "Sua Primeira Venda",
                description: "Estratégias práticas para conseguir seus primeiros clientes rapidamente",
                lessons: "2 aulas",
                icon: "🚀",
                highlights: ["Scripts de venda", "Onde encontrar clientes"]
              },
              {
                module: "MÓDULO 4",
                title: "Organizando e Escalando",
                description: "Como organizar seu negócio e multiplicar seus resultados exponencialmente",
                lessons: "2 aulas",
                icon: "📈",
                highlights: ["Automação", "Escala de resultados"]
              }
            ].map((course, index) => (
              <Card key={index} className="p-6 md:p-8 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="text-4xl md:text-5xl">{course.icon}</div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs md:text-sm">
                      {course.module}
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{course.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">{course.description}</p>
                <div className="space-y-2 mb-3 md:mb-4">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                      <Zap className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-green-400 font-semibold text-sm md:text-base">
                  <Check className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{course.lessons}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-6 md:p-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50">
              <div className="text-center">
                <Rocket className="w-12 h-12 md:w-16 md:h-16 text-green-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-3">
                  🎁 BÔNUS EXCLUSIVOS INCLUSOS
                </h3>
                <div className="grid md:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6">
                  {[
                    { title: "Mindset Milionário", value: "R$ 97", lessons: "3 aulas" },
                    { title: "Produtividade Máxima", value: "R$ 67", lessons: "Guia completo" },
                    { title: "Gestão Financeira", value: "R$ 67", lessons: "Planilhas prontas" }
                  ].map((bonus, idx) => (
                    <div key={idx} className="bg-slate-800/50 rounded-xl p-3 md:p-4 border border-green-500/30">
                      <p className="text-green-400 font-bold text-base md:text-lg mb-1">{bonus.title}</p>
                      <p className="text-gray-400 text-xs md:text-sm mb-2">{bonus.lessons}</p>
                      <Badge className="bg-green-500 text-white text-xs md:text-sm">{bonus.value}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* CTA MEIO 2 - MOBILE OTIMIZADO */}
          <div className="text-center mt-8 md:mt-12">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl lg:text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 md:hover:scale-110 w-full md:w-auto"
            >
              🎯 QUERO ACESSO COMPLETO
              <ArrowRight className="ml-2 md:ml-3 w-6 h-6 md:w-7 md:h-7" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefícios - MOBILE OTIMIZADO */}
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white text-center mb-3 md:mb-4">
            O Que Você Vai Conquistar
          </h2>
          <p className="text-center text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
            Resultados reais que vão transformar sua vida financeira
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Renda Extra Garantida",
                description: "Aprenda a gerar de R$ 1.000 a R$ 5.000 por mês trabalhando de casa, no seu tempo livre"
              },
              {
                icon: Clock,
                title: "Liberdade de Tempo",
                description: "Trabalhe quando e de onde quiser, dedicando apenas 2-3 horas por dia"
              },
              {
                icon: Shield,
                title: "Método Validado",
                description: "Sistema testado e aprovado por milhares de alunos que já estão faturando"
              },
              {
                icon: Users,
                title: "Comunidade Exclusiva",
                description: "Acesso a grupo VIP com suporte, networking e troca de experiências"
              },
              {
                icon: Lock,
                title: "Sem Aparecer",
                description: "Não precisa mostrar o rosto, gravar vídeos ou criar conteúdo nas redes sociais"
              },
              {
                icon: Target,
                title: "Do Zero ao Lucro",
                description: "Passo a passo completo, mesmo que você nunca tenha vendido nada online"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 md:p-8 bg-slate-800/50 border-2 border-slate-700 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                      <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA MEIO 3 - MOBILE OTIMIZADO */}
          <div className="text-center mt-8 md:mt-12">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 md:px-12 py-5 md:py-7 text-lg md:text-xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              ⚡ ACESSE O MÉTODO AGORA
              <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Prova Social - MOBILE OTIMIZADO */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white text-center mb-3 md:mb-4">
            Veja o Que Nossos Alunos Estão Dizendo
          </h2>
          <p className="text-center text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
            Resultados reais de pessoas comuns que decidiram mudar de vida
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-8 md:mb-12">
            {[
              {
                name: "Mariana Silva",
                role: "Ex-recepcionista",
                result: "R$ 3.200 no primeiro mês",
                text: "Eu não acreditava que conseguiria. Estava desempregada e desesperada. Segui o método do curso e em 30 dias fiz minha primeira venda. Hoje já faturei mais de R$ 3 mil!",
                rating: 5
              },
              {
                name: "Carlos Eduardo",
                role: "Motorista de app",
                result: "R$ 5.800 em 45 dias",
                text: "Trabalhava 12 horas por dia no Uber. Com o curso, aprendi a vender online e hoje trabalho 3 horas por dia de casa. Minha vida mudou completamente!",
                rating: 5
              },
              {
                name: "Juliana Costa",
                role: "Dona de casa",
                result: "R$ 2.100 no segundo mês",
                text: "Sempre quis ajudar nas contas de casa mas não tinha tempo para trabalhar fora. Com o método, consigo ganhar dinheiro cuidando dos meus filhos. Gratidão!",
                rating: 5
              },
              {
                name: "Roberto Alves",
                role: "Aposentado",
                result: "R$ 1.850 mensais",
                text: "Com 58 anos, achei que era tarde demais. Mas o curso é tão simples que até eu consegui. Agora tenho uma renda extra que complementa minha aposentadoria.",
                rating: 5
              },
              {
                name: "Fernanda Lima",
                role: "Estudante",
                result: "R$ 2.400 em 3 semanas",
                text: "Precisava pagar minha faculdade e não tinha tempo para trabalhar. O curso me ensinou a ganhar dinheiro online nas horas vagas. Incrível!",
                rating: 5
              },
              {
                name: "Paulo Santos",
                role: "Vendedor",
                result: "R$ 7.300 no terceiro mês",
                text: "Já trabalhava com vendas mas nunca online. O método me abriu os olhos para um mundo novo. Hoje ganho mais que meu salário antigo trabalhando de casa!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-5 md:p-6 bg-slate-800/50 border-2 border-slate-700 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed italic text-sm md:text-base">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="border-t border-slate-700 pt-3 md:pt-4">
                  <p className="font-bold text-white text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-gray-400">{testimonial.role}</p>
                  <Badge className="mt-2 bg-green-500 text-white text-xs md:text-sm">
                    {testimonial.result}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-white mb-2">
              Mais de 3.847 alunos já estão transformando suas vidas
            </p>
            <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">E você pode ser o próximo!</p>

            {/* CTA MEIO 4 - MOBILE OTIMIZADO */}
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 md:px-12 py-5 md:py-7 text-lg md:text-xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              💎 QUERO COMEÇAR HOJE
              <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE - MOBILE OTIMIZADO */}
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <Badge className="mb-3 md:mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold">
              🎁 OFERTA COMPLETA
            </Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-4">
              O Que Você Recebe Hoje
            </h2>
            <p className="text-gray-400 text-base md:text-lg">Investimento único de apenas R$ 47</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="p-6 md:p-8 lg:p-12 bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-orange-500 shadow-2xl shadow-orange-500/20">
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                {[
                  { item: "✅ Curso Completo IA que Dá Dinheiro", value: "R$ 297" },
                  { item: "✅ 4 Módulos + 9 Aulas Práticas", value: "R$ 197" },
                  { item: "🎁 BÔNUS 1: Mindset Milionário (3 aulas)", value: "R$ 97" },
                  { item: "🎁 BÔNUS 2: Produtividade Máxima", value: "R$ 67" },
                  { item: "🎁 BÔNUS 3: Gestão Financeira Pessoal", value: "R$ 67" },
                  { item: "✅ Grupo VIP no Telegram (Suporte)", value: "R$ 147" },
                  { item: "✅ Certificado de Conclusão", value: "R$ 47" },
                  { item: "✅ Atualizações Vitalícias", value: "R$ 197" }
                ].map((bonus, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-slate-700 pb-3 md:pb-4">
                    <span className="text-white text-sm md:text-lg font-semibold pr-2">{bonus.item}</span>
                    <span className="text-gray-400 line-through text-xs md:text-sm whitespace-nowrap">{bonus.value}</span>
                  </div>
                ))}
              </div>

              <div className="border-t-4 border-orange-500 pt-6 md:pt-8 text-center">
                <p className="text-gray-400 text-base md:text-lg mb-2">Valor Total:</p>
                <p className="text-3xl md:text-4xl text-gray-500 line-through mb-3 md:mb-4">R$ 1.116</p>
                <p className="text-gray-300 text-lg md:text-xl mb-3">Hoje por apenas:</p>
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-5 md:p-6 mb-5 md:mb-6 shadow-2xl">
                  <p className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-2">R$ 47</p>
                  <p className="text-white text-base md:text-lg">ou 12x de R$ 4,70</p>
                </div>
                <Badge className="bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold animate-pulse">
                  🔥 Economia de R$ 1.069 (95% OFF)
                </Badge>
              </div>
            </Card>
          </div>

          {/* CTA MEIO 5 - MOBILE OTIMIZADO */}
          <div className="text-center mt-8 md:mt-12">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl lg:text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 md:hover:scale-110 w-full md:w-auto"
            >
              🎯 COMPRAR AGORA - R$ 47
              <ArrowRight className="ml-2 md:ml-3 w-6 h-6 md:w-7 md:h-7" />
            </Button>
          </div>
        </div>
      </section>

      {/* GARANTIA DE 7 DIAS - MOBILE OTIMIZADO */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block p-4 md:p-6 bg-green-500/20 rounded-full mb-4 md:mb-6 backdrop-blur-sm">
                <Shield className="w-16 h-16 md:w-20 md:h-20 text-green-400" />
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-4">
                Garantia Incondicional de 7 Dias
              </h2>
              <p className="text-lg md:text-xl text-gray-300">
                Você não corre nenhum risco - Risco Zero Total
              </p>
            </div>

            <Card className="p-6 md:p-8 lg:p-12 bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-green-500 shadow-2xl shadow-green-500/20">
              <div className="space-y-5 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <Check className="w-7 h-7 md:w-8 md:h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">100% Sem Riscos</h3>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      Eu tenho tanta certeza de que este curso vai transformar sua vida que vou te dar uma 
                      <span className="text-green-400 font-bold"> garantia incondicional de 7 dias</span>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <Check className="w-7 h-7 md:w-8 md:h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Devolução Total</h3>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      Se por qualquer motivo você não ficar satisfeito, basta enviar um único email e eu 
                      devolvo <span className="text-green-400 font-bold">100% do seu dinheiro</span>, sem perguntas, sem burocracia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <Check className="w-7 h-7 md:w-8 md:h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Teste Sem Compromisso</h3>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      Você pode testar o curso completo, assistir todas as aulas, aplicar o método 
                      e se não gostar, recebe seu dinheiro de volta. <span className="text-green-400 font-bold">O risco é todo meu!</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-10 p-5 md:p-6 bg-green-500/10 rounded-2xl border-2 border-green-500">
                <p className="text-center text-lg md:text-xl text-white font-bold">
                  ⚡ Você só tem a ganhar - Literalmente ZERO riscos!
                </p>
              </div>
            </Card>

            {/* CTA MEIO 6 - MOBILE OTIMIZADO */}
            <div className="text-center mt-8 md:mt-12">
              <Button 
                onClick={handleCheckout}
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl lg:text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 md:hover:scale-110 w-full md:w-auto"
              >
                🛡️ ACESSE SEM RISCOS AGORA
                <ArrowRight className="ml-2 md:ml-3 w-6 h-6 md:w-7 md:h-7" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - MOBILE OTIMIZADO */}
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white text-center mb-3 md:mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-center text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
            Tire suas últimas dúvidas antes de começar sua transformação
          </p>

          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
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
                  className="w-full p-4 md:p-6 text-left flex items-center justify-between gap-3 md:gap-4 hover:bg-slate-700/30 transition-colors"
                >
                  <h3 className="font-bold text-base md:text-lg text-white pr-2">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 md:w-6 md:h-6 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA MEIO 7 - MOBILE OTIMIZADO */}
          <div className="text-center mt-8 md:mt-12">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 md:px-12 py-5 md:py-7 text-lg md:text-xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              ✅ QUERO MEU PRIMEIRO R$ 1.000
              <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final Urgente - MOBILE OTIMIZADO */}
      <section className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-4 md:mb-6 bg-yellow-400 text-black px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold animate-pulse">
            ⏰ ÚLTIMAS VAGAS DISPONÍVEIS
          </Badge>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
            Sua Nova Vida Começa Agora
          </h2>
          <p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
            Você tem duas escolhas: continuar na mesma situação ou dar o primeiro passo 
            para transformar sua vida financeira <span className="font-bold underline">hoje mesmo</span>
          </p>
          
          {/* CTA FINAL - MOBILE OTIMIZADO */}
          <Button 
            onClick={handleCheckout}
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 px-8 md:px-12 py-8 md:py-10 text-xl md:text-2xl lg:text-3xl font-black rounded-2xl shadow-2xl hover:scale-105 md:hover:scale-110 transition-all duration-300 mb-5 md:mb-6 w-full md:w-auto"
          >
            🚀 QUERO COMEÇAR AGORA
            <ArrowRight className="ml-2 md:ml-3 w-7 h-7 md:w-8 md:h-8" />
          </Button>

          <div className="space-y-2 md:space-y-3">
            <p className="text-white text-base md:text-lg font-bold">
              ⚡ Acesso Imediato - Comece Hoje
            </p>
            <p className="text-white/80 text-xs md:text-sm">
              🔒 Pagamento 100% Seguro | 🛡️ Garantia de 7 Dias
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Contato - MOBILE OTIMIZADO */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
              Ainda Tem Dúvidas? Fale Conosco!
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10">
              Nossa equipe está pronta para te ajudar a dar o primeiro passo
            </p>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <Card className="p-6 md:p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 hover:border-green-500 transition-all duration-300">
                <MessageCircle className="w-12 h-12 md:w-16 md:h-16 text-green-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">WhatsApp</h3>
                <p className="text-gray-300 mb-5 md:mb-6 text-sm md:text-base">
                  Tire suas dúvidas diretamente pelo WhatsApp
                </p>
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white w-full py-5 md:py-6 text-base md:text-lg font-bold"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
              </Card>

              <Card className="p-6 md:p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300">
                <MessageCircle className="w-12 h-12 md:w-16 md:h-16 text-blue-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Telegram</h3>
                <p className="text-gray-300 mb-5 md:mb-6 text-sm md:text-base">
                  Entre no nosso canal oficial do Telegram
                </p>
                <Button 
                  onClick={handleTelegram}
                  className="bg-blue-500 hover:bg-blue-600 text-white w-full py-5 md:py-6 text-base md:text-lg font-bold"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Entrar no Telegram
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - MOBILE OTIMIZADO */}
      <footer className="bg-slate-950 text-gray-400 py-6 md:py-8 px-4 text-center border-t border-slate-800">
        <p className="text-xs md:text-sm mb-2">© 2024 IA que Dá Dinheiro - Todos os direitos reservados</p>
        <p className="text-xs max-w-3xl mx-auto mb-3 md:mb-4">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho 
          de uma estratégia não deve ser interpretada como garantia de resultados. Os resultados 
          podem variar de pessoa para pessoa.
        </p>
        <div className="flex justify-center gap-4 md:gap-6 text-xs md:text-sm">
          <button onClick={handleWhatsApp} className="hover:text-green-400 transition-colors">
            WhatsApp
          </button>
          <button onClick={handleTelegram} className="hover:text-blue-400 transition-colors">
            Telegram
          </button>
        </div>
      </footer>
    </div>
  );
}
