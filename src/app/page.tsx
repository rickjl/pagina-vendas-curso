"use client";

import {
  Check, Shield, Clock, Users, Star, ArrowRight, Lock,
  MessageCircle, Zap, Target, Award, Rocket, X, Sparkles,
  DollarSign, AlertCircle, Gift, Send, Brain, BookOpen,
  Video, FileText, CheckCircle, Play, Wifi, Battery,
  TrendingUp, ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [chatType, setChatType] = useState<'whatsapp' | 'telegram' | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 52, seconds: 17 });
  const [chatMessages, setChatMessages] = useState<Array<{ type: 'bot' | 'user'; text: string }>>([]);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setPulse(p => !p), 2000);
    return () => clearInterval(interval);
  }, []);

  const CHECKOUT_URL = "https://pay.kiwify.com.br/2VJCa4D";
  const handleCheckout = () => window.open(CHECKOUT_URL, '_blank');

  const faqDatabase = [
    { question: "💳 Como funciona o pagamento?", answer: "Cartão em até 12x de R$ 4,70, PIX com desconto ou boleto. Acesso imediato após confirmação, 100% seguro via Kiwify.", followUp: "Quer garantir sua vaga agora?" },
    { question: "📚 O que vou aprender?", answer: "4 módulos com 9 aulas práticas — do zero ao avançado. Método completo e validado para ganhar dinheiro com IA.", followUp: "Quer ver os módulos completos?" },
    { question: "⏰ Por quanto tempo tenho acesso?", answer: "Acesso VITALÍCIO! Paga uma vez, acessa para sempre. Atualizações futuras também são gratuitas para você.", followUp: "Incrível, né? Quer começar agora?" },
    { question: "🛡️ Como funciona a garantia?", answer: "Garantia INCONDICIONAL de 7 dias. Acesse tudo, aplique o método — se não gostar, 100% do dinheiro de volta. Sem perguntas.", followUp: "Você não tem nada a perder!" },
    { question: "👤 Preciso aparecer?", answer: "NÃO! Método 100% anônimo. Sem gravar vídeos, sem criar conteúdo, sem mostrar rosto. Funciona nos bastidores.", followUp: "Perfeito para quem não quer se expor!" },
    { question: "🎓 Sou iniciante, funciona?", answer: "SIM! Criado especialmente para iniciantes. Explicado do zero, passo a passo. Quem mais fatura são os que começaram do zero!", followUp: "Você está no lugar certo!" },
    { question: "💰 Quanto posso ganhar?", answer: "Alunos ganham de R$ 1.000 a R$ 5.000/mês. Depende da dedicação, mas seguindo o método você tem tudo para ter resultados incríveis.", followUp: "Pronto para começar?" },
    { question: "⏱️ Quanto tempo por dia?", answer: "Apenas 2 a 3 horas por dia já é suficiente! Muitos fazem nas horas vagas, após o trabalho ou nos finais de semana.", followUp: "Cabe na sua rotina!" },
    { question: "📱 Terei suporte?", answer: "SIM! Grupo VIP no Telegram + WhatsApp direto. Nossa equipe e alunos prontos para te ajudar. Você nunca ficará sozinho!", followUp: "Suporte completo incluído!" },
    { question: "🎁 Quais são os bônus?", answer: "5 bônus grátis: Prompts Prontos, Ferramentas Recomendadas, Checklist Primeira Venda, Scripts de Vídeos e Modelos de Post.", followUp: "Bônus exclusivos por tempo limitado!" },
    { question: "🚀 Quando começo?", answer: "AGORA MESMO! Pagamento confirmado, acesso por email em 2 minutos. Pode começar a assistir as aulas imediatamente!", followUp: "Vamos começar?" },
    { question: "💻 Celular serve?", answer: "Sim! Funciona em computador, celular e tablet. Plataforma 100% responsiva. Estude de onde quiser, quando quiser!", followUp: "Total flexibilidade para você!" }
  ];

  const handleQuestionClick = (q: string, a: string, f: string) => {
    setChatMessages(prev => [...prev, { type: 'user', text: q }, { type: 'bot', text: a }, { type: 'bot', text: f }]);
    setTimeout(() => {
      const el = document.getElementById('chat-messages');
      if (el) el.scrollTop = el.scrollHeight;
    }, 100);
  };

  const openChat = (type: 'whatsapp' | 'telegram') => {
    setChatType(type);
    setChatMessages(type === 'whatsapp'
      ? [
          { type: 'bot', text: '👋 Olá! Sou assistente do suporte!' },
          { type: 'bot', text: '📱 WhatsApp: +55 (19) 98116-8970' },
          { type: 'bot', text: 'Escolha uma pergunta abaixo e te respondo agora:' }
        ]
      : [
          { type: 'bot', text: '👋 Olá! Bem-vindo ao suporte Telegram!' },
          { type: 'bot', text: '🔒 O grupo VIP é exclusivo para alunos. Mas posso tirar suas dúvidas agora:' }
        ]);
  };

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="min-h-screen" style={{ background: '#060d06', color: '#ffffff' }}>

      {/* ── Floating Buttons ── */}
      <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3">
        <button onClick={() => openChat('whatsapp')}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
          style={{ background: '#25D366', boxShadow: '0 0 20px rgba(37,211,102,0.5)' }}>
          <MessageCircle className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center animate-pulse"
            style={{ background: '#ff4444', color: '#fff' }}>1</span>
        </button>
        <button onClick={() => openChat('telegram')}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
          style={{ background: '#229ED9', boxShadow: '0 0 20px rgba(34,158,217,0.4)' }}>
          <Send className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* ── Chat ── */}
      {chatType && (
        <div className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-[400px] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          style={{ maxHeight: '85vh', background: '#fff' }}>
          <div className="flex items-center justify-between p-4 flex-shrink-0"
            style={{ background: chatType === 'whatsapp' ? '#075E54' : '#229ED9' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.2)' }}>
                {chatType === 'whatsapp' ? <MessageCircle className="w-5 h-5 text-white" /> : <Send className="w-5 h-5 text-white" />}
              </div>
              <div>
                <p className="text-white font-black text-sm">{chatType === 'whatsapp' ? 'WhatsApp Suporte' : 'Telegram Suporte'}</p>
                <p className="text-green-300 text-xs font-bold">🟢 Online agora</p>
              </div>
            </div>
            <button onClick={() => { setChatType(null); setChatMessages([]); }} className="text-white p-2 hover:bg-white/20 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div id="chat-messages" className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0"
            style={{ background: '#ECE5DD' }}>
            {chatMessages.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                  m.type === 'bot'
                    ? 'bg-white text-gray-800 rounded-tl-none'
                    : 'text-gray-800 rounded-tr-none'
                }`} style={m.type === 'user' ? { background: '#DCF8C6' } : {}}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-white border-t overflow-y-auto flex-shrink-0" style={{ maxHeight: '180px' }}>
            <p className="text-xs text-gray-400 text-center font-bold mb-2">Escolha uma dúvida:</p>
            <div className="space-y-1.5">
              {faqDatabase.map((f, i) => (
                <button key={i} onClick={() => handleQuestionClick(f.question, f.answer, f.followUp)}
                  className="w-full text-left text-xs p-2.5 rounded-xl font-bold transition-all hover:scale-[1.01] border"
                  style={{ background: '#f0fdf4', borderColor: '#bbf7d0', color: '#166534' }}>
                  {f.question}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 flex-shrink-0" style={{ background: '#075E54', borderTop: '3px solid #00C853' }}>
            <button onClick={() => { handleCheckout(); }}
              className="w-full py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              style={{ background: '#00C853', color: '#000', boxShadow: '0 0 20px rgba(0,200,83,0.5)' }}>
              <Sparkles className="w-4 h-4" />
              GARANTIR MINHA VAGA AGORA
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[10px] text-white/80 mt-2 font-bold">⚡ Acesso imediato · 🛡️ Garantia 7 dias</p>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════
          BARRA DE URGÊNCIA
      ══════════════════════════════════ */}
      <div className="py-2.5 px-4 text-center text-sm font-black flex flex-wrap items-center justify-center gap-2 sm:gap-4"
        style={{ background: 'linear-gradient(90deg, #004d20, #00C853, #004d20)', color: '#000' }}>
        <span className="flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4" />
          OFERTA ENCERRA EM:
        </span>
        <span className="bg-black text-white px-4 py-1 rounded-lg font-black tabular-nums tracking-widest text-base">
          {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
        </span>
        <span className="hidden sm:inline">· Apenas 47 vagas neste preço</span>
      </div>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="relative px-4 pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.12) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* Social proof topo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border text-sm font-bold"
              style={{ background: 'rgba(0,200,83,0.1)', borderColor: 'rgba(0,200,83,0.3)', color: '#00C853' }}>
              <div className="flex -space-x-2">
                {['photo-1494790108377-be9c29b29330', 'photo-1507003211169-0a1dd7228f2d', 'photo-1487412720507-e7ab37603c6f'].map((p, i) => (
                  <img key={i} src={`https://images.unsplash.com/${p}?w=60&h=60&fit=crop`}
                    className="w-7 h-7 rounded-full border-2 object-cover" style={{ borderColor: '#060d06' }} />
                ))}
              </div>
              <span>+3.847 alunos já transformaram a renda</span>
            </div>
          </div>

          {/* Layout hero */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* ── Texto ── */}
            <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

              {/* Tag acima do título */}
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(0,200,83,0.15)', color: '#00C853', border: '1px solid rgba(0,200,83,0.3)' }}>
                <TrendingUp className="w-3.5 h-3.5" />
                Método validado por +3.847 pessoas
              </div>

              <h1 className="font-black leading-[1.08] mb-6" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
                Descubra Como Ganhar{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #00C853, #69F0AE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  R$ 1.000 a R$ 5.000
                </span>
                {' '}por Mês<br />
                <span className="text-gray-300" style={{ fontSize: '70%', fontWeight: 800 }}>
                  Usando IA — Sem Aparecer, Sem Experiência
                </span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Um método simples e validado que pessoas comuns estão usando para criar uma
                <strong className="text-white"> renda extra de casa</strong>, trabalhando apenas 2-3h por dia,
                sem precisar aparecer ou criar conteúdo.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                {[
                  { icon: CheckCircle, text: 'Acesso Vitalício', color: '#00C853' },
                  { icon: Shield, text: 'Garantia 7 Dias', color: '#00C853' },
                  { icon: Zap, text: '1ª venda em 30 dias', color: '#FFB300' },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold" style={{ color: '#aaa' }}>
                    <t.icon className="w-4 h-4 flex-shrink-0" style={{ color: t.color }} />
                    {t.text}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <button onClick={handleCheckout}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 font-black text-lg sm:text-xl px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.03] relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #00C853, #00E676)',
                    color: '#000',
                    boxShadow: '0 0 40px rgba(0,200,83,0.5), 0 4px 24px rgba(0,0,0,0.4)'
                  }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(135deg, #00E676, #69F0AE)' }} />
                  <DollarSign className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">QUERO MINHA RENDA EXTRA AGORA</span>
                  <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-center sm:text-left" style={{ color: '#555' }}>
                  🔒 Kiwify · Cartão, PIX ou Boleto · 100% Seguro
                </p>
              </div>
            </div>

            {/* ── Mockup Celular ── */}
            <div className="flex-shrink-0 flex justify-center">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 rounded-full blur-3xl scale-90 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.25) 0%, transparent 70%)' }} />

                {/* Frame */}
                <div className="relative mx-auto rounded-[40px] border-[6px] overflow-hidden"
                  style={{
                    width: '220px', height: '460px',
                    borderColor: '#1a2a1a',
                    background: '#0a0f0a',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.07)'
                  }}>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 rounded-b-2xl z-10 flex items-center justify-center"
                    style={{ background: '#050d05' }}>
                    <div className="w-2 h-2 rounded-full mr-1" style={{ background: '#1a2a1a' }} />
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#1e3a2f' }} />
                  </div>

                  {/* Botão lateral */}
                  <div className="absolute -right-2 top-28 w-1 h-16 rounded-r-sm" style={{ background: '#1a2a1a' }} />

                  {/* Screen */}
                  <div className="h-full overflow-hidden" style={{ background: '#060d06' }}>
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-4 pt-8 pb-2">
                      <span className="text-[10px] font-bold" style={{ color: '#aaa' }}>9:41</span>
                      <div className="flex items-center gap-1">
                        <Wifi className="w-3 h-3" style={{ color: '#aaa' }} />
                        <Battery className="w-3.5 h-3.5" style={{ color: '#aaa' }} />
                      </div>
                    </div>

                    <div className="px-3 space-y-2.5">
                      {/* Header */}
                      <div className="rounded-xl p-3 text-center"
                        style={{ background: 'linear-gradient(135deg, #00C853, #004d20)' }}>
                        <p className="text-white font-black text-[11px]">IA QUE DÁ DINHEIRO</p>
                        <p className="text-white/70 text-[8px] mt-0.5">Painel do Aluno</p>
                      </div>

                      {/* Notif venda */}
                      <div className="rounded-xl p-2.5 flex items-center gap-2 border"
                        style={{ background: 'rgba(0,200,83,0.08)', borderColor: 'rgba(0,200,83,0.25)' }}>
                        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: '#00C853' }}>
                          <DollarSign className="w-3.5 h-3.5 text-black" />
                        </div>
                        <div>
                          <p className="font-black text-[9px]" style={{ color: '#00C853' }}>VENDA REALIZADA!</p>
                          <p className="text-[8px]" style={{ color: '#666' }}>Pix recebido · + R$ 247,00</p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="rounded-xl p-2.5 text-center" style={{ background: '#0f1a0f' }}>
                          <p className="font-black text-sm" style={{ color: '#00C853' }}>R$3.2k</p>
                          <p className="text-[8px]" style={{ color: '#555' }}>Este mês</p>
                        </div>
                        <div className="rounded-xl p-2.5 text-center" style={{ background: '#0f1a0f' }}>
                          <p className="font-black text-sm" style={{ color: '#69F0AE' }}>47</p>
                          <p className="text-[8px]" style={{ color: '#555' }}>Vendas</p>
                        </div>
                      </div>

                      {/* Barra progresso */}
                      <div className="rounded-xl p-2.5" style={{ background: '#0f1a0f' }}>
                        <div className="flex justify-between mb-2">
                          <p className="text-[9px] font-bold text-white">Meta mensal</p>
                          <p className="text-[9px] font-black" style={{ color: '#00C853' }}>64%</p>
                        </div>
                        <div className="h-2 rounded-full" style={{ background: '#1a2a1a' }}>
                          <div className="h-full w-[64%] rounded-full" style={{ background: 'linear-gradient(90deg, #00C853, #69F0AE)' }} />
                        </div>
                      </div>

                      {/* Módulos */}
                      {['Fundamentos IA', 'Monetização', 'Primeira Venda'].map((m, i) => (
                        <div key={i} className="flex items-center gap-2 px-2.5 py-2 rounded-lg" style={{ background: '#0f1a0f' }}>
                          <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: i < 2 ? '#00C853' : '#1a2a1a' }}>
                            {i < 2 ? <Check className="w-2.5 h-2.5 text-black" /> : <Play className="w-2 h-2 text-white" />}
                          </div>
                          <p className="text-[9px] font-medium" style={{ color: '#aaa' }}>{m}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Badges flutuantes */}
                <div className="absolute -top-3 -right-4 text-[10px] font-black px-2.5 py-1 rounded-full animate-bounce whitespace-nowrap"
                  style={{ background: '#ff4444', color: '#fff', boxShadow: '0 4px 12px rgba(255,68,68,0.5)' }}>
                  47 VAGAS
                </div>
                <div className="absolute -bottom-3 -left-4 text-[10px] font-black px-2.5 py-1.5 rounded-full whitespace-nowrap"
                  style={{ background: '#00C853', color: '#000', boxShadow: '0 4px 12px rgba(0,200,83,0.5)' }}>
                  +R$ 3.200/mês
                </div>
              </div>
            </div>
          </div>

          {/* Barra de escassez */}
          <div className="mt-14 max-w-md mx-auto rounded-2xl p-5 border text-center"
            style={{ background: 'rgba(255,68,68,0.05)', borderColor: 'rgba(255,68,68,0.2)' }}>
            <p className="font-black text-sm mb-2" style={{ color: '#ff6666' }}>
              ⚠️ APENAS 47 VAGAS NESTE PREÇO
            </p>
            <div className="h-2.5 rounded-full mb-2" style={{ background: '#111' }}>
              <div className="h-full w-[85%] rounded-full" style={{ background: 'linear-gradient(90deg, #ff4444, #ff8800)' }} />
            </div>
            <p className="text-xs" style={{ color: '#555' }}>
              85% preenchidas · Preço sobe para R$ 297 ao atingir o limite
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SEÇÃO DE PREÇO
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: '#040a04' }}>
        <div className="max-w-lg mx-auto">

          <div className="text-center mb-8">
            <p className="font-black text-sm uppercase tracking-widest mb-2" style={{ color: '#00C853' }}>
              Investimento único · acesso vitalício
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Comece Hoje Por Apenas</h2>
          </div>

          <div className="relative rounded-2xl p-8 border-2"
            style={{
              background: 'linear-gradient(145deg, #0a1a0a, #060d06)',
              borderColor: '#00C853',
              boxShadow: '0 0 60px rgba(0,200,83,0.15)'
            }}>

            {/* Badge 95% OFF */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full font-black text-xs whitespace-nowrap"
              style={{ background: 'linear-gradient(90deg, #00C853, #00E676)', color: '#000' }}>
              95% DE DESCONTO — OFERTA LIMITADA
            </div>

            {/* Preço */}
            <div className="text-center mb-6 pt-2">
              <p className="text-sm line-through mb-1" style={{ color: '#555' }}>De R$ 297,00</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl font-black" style={{ color: '#00C853' }}>R$</span>
                <span className="font-black leading-none" style={{ fontSize: '5rem', color: '#00C853', lineHeight: 1 }}>47</span>
              </div>
              <p className="text-sm mt-1" style={{ color: '#666' }}>ou 12x de R$ 4,70 · PIX com desconto extra</p>
            </div>

            {/* Itens inclusos */}
            <div className="space-y-3 mb-8">
              {[
                '4 módulos + 9 aulas práticas completas',
                'Acesso vitalício + atualizações grátis',
                '5 bônus exclusivos (valor R$ 197)',
                'Grupo VIP no Telegram',
                'Suporte via WhatsApp',
                'Certificado de conclusão incluso',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: '#00C853' }}>
                    <Check className="w-3 h-3 text-black" />
                  </div>
                  <span className="text-sm sm:text-base" style={{ color: '#ddd' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA preço */}
            <button onClick={handleCheckout}
              className="w-full flex items-center justify-center gap-3 font-black text-lg py-5 rounded-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #00C853, #00E676)',
                color: '#000',
                boxShadow: '0 0 40px rgba(0,200,83,0.5)'
              }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #00E676, #69F0AE)' }} />
              <Lock className="w-5 h-5 relative z-10" />
              <span className="relative z-10">GARANTIR ACESSO AGORA</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
            </button>

            <div className="flex items-center justify-center gap-5 mt-4">
              {[
                { icon: Shield, text: 'Garantia 7 dias', c: '#00C853' },
                { icon: Lock, text: '100% seguro', c: '#69F0AE' },
                { icon: Zap, text: 'Acesso imediato', c: '#FFB300' },
              ].map((x, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs font-bold" style={{ color: '#555' }}>
                  <x.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: x.c }} />
                  {x.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          BENEFÍCIOS
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: '#060d06' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: '#00C853' }}>
              O QUE VOCÊ VAI CONQUISTAR
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Sua Nova Realidade em 30 Dias</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: DollarSign, title: 'Renda Extra Real', desc: 'De R$ 1.000 a R$ 5.000/mês trabalhando de casa', accent: '#00C853' },
              { icon: Clock, title: 'Apenas 2-3h por Dia', desc: 'Trabalhe no seu ritmo, sem abrir mão da sua rotina', accent: '#69F0AE' },
              { icon: Rocket, title: 'Resultado em 30 Dias', desc: 'Primeira venda garantida seguindo o método passo a passo', accent: '#FFB300' },
              { icon: Brain, title: 'Método Simples', desc: 'IA aplicada de forma prática, sem termos técnicos', accent: '#00BFA5' },
              { icon: Shield, title: '100% Anônimo', desc: 'Sem mostrar rosto, sem gravar vídeos, sem aparecer', accent: '#00C853' },
              { icon: Users, title: 'Suporte Completo', desc: 'Grupo VIP no Telegram + WhatsApp sem resposta perdida', accent: '#69F0AE' },
            ].map((b, i) => (
              <div key={i} className="rounded-xl p-6 border transition-all duration-300 hover:translate-y-[-3px] group"
                style={{ background: '#0a1a0a', borderColor: '#0f2a0f' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${b.accent}15` }}>
                  <b.icon className="w-6 h-6" style={{ color: b.accent }} />
                </div>
                <h3 className="font-black text-lg text-white mb-2">{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          AUTORIDADE
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: '#040a04' }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-6 sm:p-10 border flex flex-col sm:flex-row items-center sm:items-start gap-8"
            style={{ background: '#0a1a0a', borderColor: '#0f2a0f' }}>

            <div className="flex-shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2"
                style={{ borderColor: '#00C853' }}>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                  alt="Júlia" className="w-full h-full object-cover" />
              </div>
              <div className="text-center mt-3">
                <p className="font-black text-white text-sm">Júlia</p>
                <p className="text-xs" style={{ color: '#00C853' }}>Especialista em IA</p>
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <p className="font-black text-xl sm:text-2xl text-white mb-4">
                De onde surgiu o <span style={{ color: '#00C853' }}>método</span>
              </p>
              <div className="space-y-3 text-sm sm:text-base leading-relaxed" style={{ color: '#aaa' }}>
                <p>Quando descobri a IA, estava precisando de uma renda extra e sem ideia por onde começar.</p>
                <p>Em poucos meses percebi que era <strong className="text-white">muito mais simples do que parecia</strong> e que qualquer pessoa conseguia aplicar — sem experiência técnica, sem aparecer.</p>
                <p style={{ color: '#00C853', fontWeight: 700 }}>Hoje minha missão é provar que você também consegue, partindo do zero.</p>
              </div>

              <div className="flex flex-wrap gap-4 mt-6 justify-center sm:justify-start">
                {['+3.847 alunos', '97% aprovação', 'Desde 2022'].map((s, i) => (
                  <div key={i} className="text-center px-4 py-2 rounded-xl border"
                    style={{ background: 'rgba(0,200,83,0.08)', borderColor: 'rgba(0,200,83,0.2)' }}>
                    <p className="font-black text-sm" style={{ color: '#00C853' }}>{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          DEPOIMENTOS
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: '#060d06' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: '#00C853' }}>
              RESULTADOS REAIS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Quem Aplicou, <span style={{ color: '#00C853' }}>Transformou</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              {
                text: 'Em 3 semanas fiz minha primeira venda de R$ 247. O método é simples demais! Nunca imaginei trabalhar de casa ganhando assim.',
                name: 'Ana Paula S.',
                role: 'Ex-atendente de loja',
                img: 'photo-1494790108377-be9c29b29330',
                earn: 'R$ 2.800/mês'
              },
              {
                text: 'Comecei sem saber nada de tecnologia. Hoje estou faturando mais do que no meu emprego. Melhor R$ 47 que já investi na vida.',
                name: 'Carlos S.',
                role: 'Antes motorista de app',
                img: 'photo-1507003211169-0a1dd7228f2d',
                earn: 'R$ 4.100/mês'
              },
              {
                text: 'Achei que era golpe e resolvi tentar pela garantia de 7 dias. Erro meu foi ter esperado tanto tempo. A Júlia explica tudo!',
                name: 'Mariana C.',
                role: 'Designer freelancer',
                img: 'photo-1487412720507-e7ab37603c6f',
                earn: 'R$ 3.500/mês'
              }
            ].map((t, i) => (
              <div key={i} className="rounded-xl p-6 border flex flex-col"
                style={{ background: '#0a1a0a', borderColor: '#0f2a0f' }}>
                <div className="flex gap-1 mb-4">
                  {Array(5).fill(0).map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-sm leading-relaxed flex-1 italic mb-5" style={{ color: '#bbb' }}>
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: '#0f2a0f' }}>
                  <img src={`https://images.unsplash.com/${t.img}?w=80&h=80&fit=crop`}
                    className="w-10 h-10 rounded-full object-cover border-2" style={{ borderColor: '#00C853' }} />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-xs truncate" style={{ color: '#555' }}>{t.role}</p>
                  </div>
                  <div className="px-2.5 py-1.5 rounded-lg border flex-shrink-0 text-center"
                    style={{ background: 'rgba(0,200,83,0.1)', borderColor: 'rgba(0,200,83,0.25)' }}>
                    <p className="font-black text-xs" style={{ color: '#00C853' }}>{t.earn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { n: '3.847+', l: 'Alunos ativos' },
              { n: '97%', l: 'Satisfação' },
              { n: '30 dias', l: '1ª venda média' },
              { n: 'R$ 5k', l: 'Máx. mensal' },
            ].map((s, i) => (
              <div key={i} className="text-center py-4 rounded-xl border"
                style={{ background: '#0a1a0a', borderColor: '#0f2a0f' }}>
                <p className="font-black text-2xl sm:text-3xl" style={{ color: '#00C853' }}>{s.n}</p>
                <p className="text-xs mt-1" style={{ color: '#555' }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          BÔNUS
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: '#040a04' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: '#FFB300' }}>
              BÔNUS EXCLUSIVOS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
              +5 Bônus <span style={{ color: '#00C853' }}>Completamente Grátis</span>
            </h2>
            <p style={{ color: '#555', fontSize: '1rem' }}>Valor total: R$ 197 · Inclusos sem custo adicional</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { title: 'Lista de Prompts Prontos', icon: FileText, desc: 'Templates validados para usar hoje mesmo', val: 'R$ 47' },
              { title: 'Ferramentas Recomendadas', icon: Zap, desc: 'As melhores IAs para cada tarefa', val: 'R$ 37' },
              { title: 'Checklist Primeira Venda', icon: CheckCircle, desc: 'Passo a passo para sua 1ª venda', val: 'R$ 47' },
              { title: 'Scripts de Vídeos', icon: Video, desc: 'Roteiros prontos para criar conteúdo', val: 'R$ 37' },
              { title: 'Modelos de Post', icon: Sparkles, desc: 'Templates para Instagram e Facebook', val: 'R$ 29' },
            ].map((b, i) => (
              <div key={i} className="rounded-xl p-5 border transition-all duration-300 hover:border-[#00C853]/40"
                style={{ background: '#0a1a0a', borderColor: '#0f2a0f' }}>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(0,200,83,0.1)' }}>
                    <b.icon className="w-5 h-5" style={{ color: '#00C853' }} />
                  </div>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(0,200,83,0.12)', color: '#00C853', border: '1px solid rgba(0,200,83,0.3)' }}>
                    GRÁTIS
                  </span>
                </div>
                <h3 className="font-black text-white text-base mb-1">{b.title}</h3>
                <p className="text-sm mb-3" style={{ color: '#555' }}>{b.desc}</p>
                <p className="text-xs line-through" style={{ color: '#333' }}>Valor: {b.val}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button onClick={handleCheckout}
              className="w-full sm:w-auto flex items-center justify-center gap-3 font-black text-lg sm:text-xl px-10 py-5 rounded-2xl mx-auto transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #00C853, #00E676)',
                color: '#000',
                boxShadow: '0 0 40px rgba(0,200,83,0.4)'
              }}>
              <Gift className="w-6 h-6" />
              QUERO OS BÔNUS GRÁTIS AGORA
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          MÓDULOS
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: '#060d06' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: '#00C853' }}>
              CONTEÚDO COMPLETO
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">4 Módulos Estratégicos</h2>
          </div>

          <div className="space-y-3">
            {[
              { n: '01', title: 'Fundamentos e Primeiros Passos', lessons: '2 aulas', tags: ['Setup completo', 'Primeiros passos', 'Ferramentas essenciais'], c: '#00C853' },
              { n: '02', title: 'Métodos Práticos de Monetização', lessons: '3 aulas', tags: ['Templates prontos', 'Casos reais', 'Atalhos validados'], c: '#69F0AE' },
              { n: '03', title: 'Sua Primeira Venda Garantida', lessons: '2 aulas', tags: ['Scripts de venda', 'Onde buscar clientes', 'Como fechar'], c: '#FFB300' },
              { n: '04', title: 'Escala e Multiplicação de Renda', lessons: '2 aulas', tags: ['Automação', 'Escala 10x', 'Gestão de tempo'], c: '#00BFA5' },
            ].map((m, i) => (
              <div key={i} className="rounded-xl p-5 sm:p-6 border flex flex-col sm:flex-row items-start gap-4 sm:gap-6 transition-all duration-300 hover:translate-x-1"
                style={{ background: '#0a1a0a', borderColor: '#0f2a0f' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0"
                  style={{ background: `${m.c}15`, color: m.c }}>
                  {m.n}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <h3 className="font-black text-white text-lg">{m.title}</h3>
                    <span className="text-xs font-bold flex-shrink-0" style={{ color: '#444' }}>{m.lessons}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((tag, j) => (
                      <div key={j} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border"
                        style={{ background: '#060d06', borderColor: '#1a2a1a', color: '#666' }}>
                        <ChevronRight className="w-3 h-3 flex-shrink-0" style={{ color: m.c }} />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button onClick={handleCheckout}
              className="w-full sm:w-auto flex items-center justify-center gap-3 font-black text-base sm:text-lg px-8 py-4 rounded-xl mx-auto transition-all duration-300 hover:scale-[1.02]"
              style={{ background: 'rgba(0,200,83,0.1)', color: '#00C853', border: '1px solid rgba(0,200,83,0.3)' }}>
              <BookOpen className="w-5 h-5" />
              QUERO ACESSO AOS 4 MÓDULOS
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          GARANTIA
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: '#040a04' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl p-8 sm:p-12 border-2"
            style={{ background: '#0a1a0a', borderColor: 'rgba(0,200,83,0.3)', boxShadow: '0 0 60px rgba(0,200,83,0.06)' }}>

            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: 'rgba(0,200,83,0.1)', border: '2px solid rgba(0,200,83,0.3)' }}>
              <Shield className="w-10 h-10" style={{ color: '#00C853' }} />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
              Garantia de 7 Dias
            </h2>
            <p className="font-black text-xl sm:text-2xl mb-6" style={{ color: '#00C853' }}>
              Risco zero. 100% do dinheiro de volta.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#aaa' }}>
              Acesse o curso completo, aplique o método e se por qualquer motivo não gostar em até 7 dias,
              <strong className="text-white"> devolvemos 100% do seu dinheiro</strong>. Sem perguntas.
              Sem burocracia. Só precisa de um email. O risco é nosso — você só tem a ganhar.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {[
                { t: '100% do valor', d: 'Devolução integral' },
                { t: 'Até 7 dias', d: 'Sem precisar justificar' },
                { t: 'Sem burocracia', d: 'Um email e pronto' },
              ].map((x, i) => (
                <div key={i} className="py-4 px-3 rounded-xl border"
                  style={{ background: 'rgba(0,200,83,0.05)', borderColor: 'rgba(0,200,83,0.15)' }}>
                  <p className="font-black text-sm text-white mb-0.5">{x.t}</p>
                  <p className="text-xs" style={{ color: '#555' }}>{x.d}</p>
                </div>
              ))}
            </div>

            <button onClick={handleCheckout}
              className="w-full flex items-center justify-center gap-3 font-black text-xl py-5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #00C853, #00E676)',
                color: '#000',
                boxShadow: '0 0 30px rgba(0,200,83,0.4)'
              }}>
              <Shield className="w-6 h-6" />
              COMEÇAR SEM RISCO AGORA
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA FINAL
      ══════════════════════════════════ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: '#060d06' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,200,83,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-sm font-black px-5 py-2.5 rounded-full animate-pulse"
            style={{ background: 'rgba(255,68,68,0.1)', color: '#ff6666', border: '1px solid rgba(255,68,68,0.3)' }}>
            <AlertCircle className="w-4 h-4" />
            ÚLTIMAS VAGAS NESTE PREÇO
          </div>

          <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            A Decisão de Hoje<br />
            <span style={{
              background: 'linear-gradient(90deg, #00C853, #69F0AE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Muda o Seu Amanhã
            </span>
          </h2>

          <p className="text-base sm:text-lg" style={{ color: '#555' }}>
            Enquanto você hesita, outras pessoas estão aplicando o método e fazendo suas primeiras vendas.
            Não deixe o medo de tentar te impedir de transformar sua vida.
          </p>

          <button onClick={handleCheckout}
            className="w-full sm:w-auto flex items-center justify-center gap-3 font-black text-xl sm:text-2xl px-12 py-6 rounded-2xl mx-auto transition-all duration-300 hover:scale-[1.03] relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #00C853, #00E676)',
              color: '#000',
              boxShadow: '0 0 60px rgba(0,200,83,0.5), 0 8px 32px rgba(0,0,0,0.4)'
            }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #00E676, #69F0AE)' }} />
            <Rocket className="w-7 h-7 relative z-10" />
            <span className="relative z-10">GARANTIR ACESSO AGORA</span>
            <ArrowRight className="w-7 h-7 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {[
              { icon: Lock, text: 'Pagamento 100% seguro', c: '#69F0AE' },
              { icon: Zap, text: 'Acesso em 2 minutos', c: '#FFB300' },
              { icon: Shield, text: 'Garantia de 7 dias', c: '#00C853' },
            ].map((x, i) => (
              <div key={i} className="flex items-center gap-2 text-sm" style={{ color: '#444' }}>
                <x.icon className="w-4 h-4 flex-shrink-0" style={{ color: x.c }} />
                {x.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-4 text-center border-t" style={{ background: '#020702', borderColor: '#0a150a' }}>
        <p className="text-sm font-bold mb-3" style={{ color: '#333' }}>
          © 2024 IA que Dá Dinheiro · Todos os direitos reservados
        </p>
        <p className="text-xs max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: '#2a2a2a' }}>
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como garantia de resultados. Os resultados podem variar de pessoa para pessoa.
        </p>
        <div className="flex justify-center gap-8">
          <button onClick={() => openChat('whatsapp')} className="text-sm font-bold transition-colors hover:text-green-400" style={{ color: '#333' }}>WhatsApp</button>
          <button onClick={() => openChat('telegram')} className="text-sm font-bold transition-colors hover:text-blue-400" style={{ color: '#333' }}>Telegram</button>
        </div>
      </footer>
    </div>
  );
}
