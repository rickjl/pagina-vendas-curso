"use client";

import { Check, Shield, Clock, TrendingUp, Users, Star, ArrowRight, Lock, MessageCircle, ChevronDown, Zap, Target, Award, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Chatbox from "@/components/custom/chatbox";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
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
      {/* Chatbox de Dúvidas */}
      <Chatbox />
      
      {/* Botão WhatsApp Flutuante */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Header com Urgência */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-4 text-center animate-pulse">
        <p className="text-sm md:text-base font-bold flex items-center justify-center gap-2">
          <Clock className="w-5 h-5" />
          🔥 ÚLTIMAS VAGAS - Apenas 47 pessoas podem entrar neste preço!
        </p>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 px-6 py-3 text-sm font-bold shadow-lg">
          ⚡ Mais de 3.847 alunos já estão faturando
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          Nunca Foi Tão Fácil<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient">
            Ganhar Dinheiro na Internet
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Com este método de curso, <span className="text-yellow-400 font-bold">já vem tudo pronto</span> - 
          é só <span className="text-green-400 font-bold">copiar, colar e sair ganhando dinheiro</span>. 
          Simples assim!
        </p>

        {/* CTA TOPO */}
        <div className="mb-10">
          <Button 
            onClick={handleCheckout}
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-8 text-xl md:text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-bounce"
          >
            🚀 QUERO COMEÇAR AGORA
            <ArrowRight className="ml-3 w-7 h-7" />
          </Button>
          <p className="text-sm text-gray-400 mt-4 flex items-center justify-center gap-2">
            <Shield className="w-5 h-5 text-green-400" />
            Garantia de 7 dias ou seu dinheiro de volta
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-400" />
            <span>Acesso imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-400" />
            <span>Tudo pronto para usar</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-400" />
            <span>Suporte dedicado</span>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL - NÚMEROS IMPACTANTES */}
      <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 py-12 md:py-16 border-y border-purple-500/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: "3.847+", label: "Alunos Ativos", icon: Users },
              { number: "R$ 2.8M+", label: "Faturado pelos Alunos", icon: TrendingUp },
              { number: "4.9/5", label: "Avaliação Média", icon: Star },
              { number: "98%", label: "Taxa de Satisfação", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mb-3 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl md:text-4xl font-black text-white mb-1">{stat.number}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-4">
            Este Curso é Para Você Se...
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Identifique-se com pelo menos uma dessas situações
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Está cansado de depender de um salário fixo e quer ter renda extra",
              "Quer trabalhar de casa e ter mais liberdade e tempo com a família",
              "Já tentou ganhar dinheiro online mas não conseguiu resultados",
              "Não tem experiência com internet mas quer aprender do zero",
              "Quer um método simples, sem precisar aparecer ou criar conteúdo",
              "Busca uma fonte de renda que funcione mesmo com pouco tempo disponível"
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-slate-800/50 border-2 border-slate-700 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA MEIO 1 */}
          <div className="text-center mt-12">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-7 text-xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            >
              💰 QUERO COMEÇAR HOJE
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* CONTEÚDO DO CURSO - MELHORADO */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-white px-6 py-3 text-base font-bold">
              📚 CONTEÚDO COMPLETO
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              O Que Você Vai Aprender
            </h2>
            <p className="text-gray-400 text-lg mb-2">4 módulos práticos com tudo que você precisa</p>
            <p className="text-xl text-yellow-400 font-bold">✨ Tudo pronto para copiar, colar e lucrar!</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
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
              <Card key={index} className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{course.icon}</div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {course.module}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">{course.description}</p>
                <div className="space-y-2 mb-4">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <Check className="w-5 h-5" />
                  <span>{course.lessons}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50">
              <div className="text-center">
                <Rocket className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  🎁 BÔNUS EXCLUSIVOS INCLUSOS
                </h3>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {[
                    { title: "Mindset Milionário", value: "R$ 97", lessons: "3 aulas" },
                    { title: "Produtividade Máxima", value: "R$ 67", lessons: "Guia completo" },
                    { title: "Gestão Financeira", value: "R$ 67", lessons: "Planilhas prontas" }
                  ].map((bonus, idx) => (
                    <div key={idx} className="bg-slate-800/50 rounded-xl p-4 border border-green-500/30">
                      <p className="text-green-400 font-bold text-lg mb-1">{bonus.title}</p>
                      <p className="text-gray-400 text-sm mb-2">{bonus.lessons}</p>
                      <Badge className="bg-green-500 text-white">{bonus.value}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* CTA MEIO 2 */}
          <div className="text-center mt-12">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-8 text-xl md:text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
            >
              🎯 QUERO ACESSO COMPLETO
              <ArrowRight className="ml-3 w-7 h-7" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-4">
            O Que Você Vai Conquistar
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Resultados reais que vão transformar sua vida financeira
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              <Card key={index} className="p-8 bg-slate-800/50 border-2 border-slate-700 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA MEIO 3 */}
          <div className="text-center mt-12">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-7 text-xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            >
              ⚡ ACESSE O MÉTODO AGORA
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Prova Social - MELHORADA */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-4">
            Veja o Que Nossos Alunos Estão Dizendo
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Resultados reais de pessoas comuns que decidiram mudar de vida
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
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
              <Card key={index} className="p-6 bg-slate-800/50 border-2 border-slate-700 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <Badge className="mt-2 bg-green-500 text-white">
                    {testimonial.result}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-white mb-2">
              Mais de 3.847 alunos já estão transformando suas vidas
            </p>
            <p className="text-gray-400 mb-8">E você pode ser o próximo!</p>

            {/* CTA MEIO 4 */}
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-7 text-xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            >
              💎 QUERO COMEÇAR HOJE
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE - MELHORADO */}
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 text-base font-bold">
              🎁 OFERTA COMPLETA
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              O Que Você Recebe Hoje
            </h2>
            <p className="text-gray-400 text-lg">Investimento único de apenas R$ 47</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-orange-500 shadow-2xl shadow-orange-500/20">
              <div className="space-y-6 mb-10">
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
                  <div key={index} className="flex items-center justify-between border-b border-slate-700 pb-4">
                    <span className="text-white text-lg font-semibold">{bonus.item}</span>
                    <span className="text-gray-400 line-through text-sm">{bonus.value}</span>
                  </div>
                ))}
              </div>

              <div className="border-t-4 border-orange-500 pt-8 text-center">
                <p className="text-gray-400 text-lg mb-2">Valor Total:</p>
                <p className="text-4xl text-gray-500 line-through mb-4">R$ 1.116</p>
                <p className="text-gray-300 text-xl mb-3">Hoje por apenas:</p>
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-6 shadow-2xl">
                  <p className="text-6xl md:text-8xl font-black text-white mb-2">R$ 47</p>
                  <p className="text-white text-lg">ou 12x de R$ 4,70</p>
                </div>
                <Badge className="bg-red-600 text-white px-6 py-3 text-base font-bold animate-pulse">
                  🔥 Economia de R$ 1.069 (95% OFF)
                </Badge>
              </div>
            </Card>
          </div>

          {/* CTA MEIO 5 */}
          <div className="text-center mt-12">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-8 text-xl md:text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
            >
              🎯 COMPRAR AGORA - R$ 47
              <ArrowRight className="ml-3 w-7 h-7" />
            </Button>
          </div>
        </div>
      </section>

      {/* GARANTIA DE 7 DIAS */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-6 bg-green-500/20 rounded-full mb-6 backdrop-blur-sm">
                <Shield className="w-20 h-20 text-green-400" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Garantia Incondicional de 7 Dias
              </h2>
              <p className="text-xl text-gray-300">
                Você não corre nenhum risco - Risco Zero Total
              </p>
            </div>

            <Card className="p-8 md:p-12 bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-green-500 shadow-2xl shadow-green-500/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Check className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">100% Sem Riscos</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Eu tenho tanta certeza de que este curso vai transformar sua vida que vou te dar uma 
                      <span className="text-green-400 font-bold"> garantia incondicional de 7 dias</span>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Devolução Total</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Se por qualquer motivo você não ficar satisfeito, basta enviar um único email e eu 
                      devolvo <span className="text-green-400 font-bold">100% do seu dinheiro</span>, sem perguntas, sem burocracia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Teste Sem Compromisso</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Você pode testar o curso completo, assistir todas as aulas, aplicar o método 
                      e se não gostar, recebe seu dinheiro de volta. <span className="text-green-400 font-bold">O risco é todo meu!</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-green-500/10 rounded-2xl border-2 border-green-500">
                <p className="text-center text-xl text-white font-bold">
                  ⚡ Você só tem a ganhar - Literalmente ZERO riscos!
                </p>
              </div>
            </Card>

            {/* CTA MEIO 6 */}
            <div className="text-center mt-12">
              <Button 
                onClick={handleCheckout}
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-8 text-xl md:text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
              >
                🛡️ ACESSE SEM RISCOS AGORA
                <ArrowRight className="ml-3 w-7 h-7" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Tire suas últimas dúvidas antes de começar sua transformação
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
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
                  <h3 className="font-bold text-lg text-white pr-4">{faq.question}</h3>
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
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA MEIO 7 */}
          <div className="text-center mt-12">
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-7 text-xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            >
              ✅ QUERO MEU PRIMEIRO R$ 1.000
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final Urgente */}
      <section className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-yellow-400 text-black px-6 py-3 text-base font-bold animate-pulse">
            ⏰ ÚLTIMAS VAGAS DISPONÍVEIS
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Sua Nova Vida Começa Agora
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Você tem duas escolhas: continuar na mesma situação ou dar o primeiro passo 
            para transformar sua vida financeira <span className="font-bold underline">hoje mesmo</span>
          </p>
          
          {/* CTA FINAL */}
          <Button 
            onClick={handleCheckout}
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 px-12 py-10 text-2xl md:text-3xl font-black rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300 mb-6"
          >
            🚀 QUERO COMEÇAR AGORA
            <ArrowRight className="ml-3 w-8 h-8" />
          </Button>

          <div className="space-y-3">
            <p className="text-white text-lg font-bold">
              ⚡ Acesso Imediato - Comece Hoje
            </p>
            <p className="text-white/80 text-sm">
              🔒 Pagamento 100% Seguro | 🛡️ Garantia de 7 Dias
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Ainda Tem Dúvidas? Fale Conosco!
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Nossa equipe está pronta para te ajudar a dar o primeiro passo
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 hover:border-green-500 transition-all duration-300">
                <MessageCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">WhatsApp</h3>
                <p className="text-gray-300 mb-6">
                  Tire suas dúvidas diretamente pelo WhatsApp
                </p>
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white w-full py-6 text-lg font-bold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300">
                <MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Telegram</h3>
                <p className="text-gray-300 mb-6">
                  Entre no nosso canal oficial do Telegram
                </p>
                <Button 
                  onClick={handleTelegram}
                  className="bg-blue-500 hover:bg-blue-600 text-white w-full py-6 text-lg font-bold"
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
        <p className="text-sm mb-2">© 2024 IA que Dá Dinheiro - Todos os direitos reservados</p>
        <p className="text-xs max-w-3xl mx-auto mb-4">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho 
          de uma estratégia não deve ser interpretada como garantia de resultados. Os resultados 
          podem variar de pessoa para pessoa.
        </p>
        <div className="flex justify-center gap-6 text-sm">
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
