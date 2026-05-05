"use client";

import {
  Check, Shield, Users, Star, ArrowRight, Lock,
  MessageCircle, Zap, Rocket, X, Sparkles,
  DollarSign, AlertCircle, Gift, Send, Brain, BookOpen,
  Video, FileText, CheckCircle, Play, Wifi, Battery,
  TrendingUp, ChevronRight, ChevronDown,
  Clock, Target, Lightbulb, Award, Layers, MousePointer
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

/* ─── Paleta central ─── */
const G = {
  primary: "#00C853",
  primaryLight: "#69F0AE",
  accent: "#7C3AED",
  accentLight: "#A78BFA",
  bg: "#06060f",
  bgDark: "#030309",
  bgCard: "#0d0d1a",
  bgCardBorder: "#1a1a2e",
  gold: "#F59E0B",
  text: "#e2e2f0",
  muted: "#4a4a6a",
  mutedLight: "#8888aa",
};

const CTAButton = ({
  onClick,
  children,
  size = "lg",
  full = false,
  variant = "green",
}: {
  onClick: () => void;
  children: React.ReactNode;
  size?: "lg" | "md" | "sm";
  full?: boolean;
  variant?: "green" | "gold";
}) => {
  const py = size === "lg" ? "py-5 sm:py-6" : size === "md" ? "py-4" : "py-3";
  const px = size === "lg" ? "px-10 sm:px-14" : size === "md" ? "px-8" : "px-6";
  const text = size === "lg" ? "text-lg sm:text-xl" : size === "md" ? "text-base sm:text-lg" : "text-sm sm:text-base";
  const bg = variant === "gold"
    ? "linear-gradient(135deg, #F59E0B, #FBBF24)"
    : "linear-gradient(135deg, #00C853, #00E676)";
  const shadow = variant === "gold"
    ? "0 0 40px rgba(245,158,11,0.4), 0 4px 24px rgba(0,0,0,0.5)"
    : "0 0 40px rgba(0,200,83,0.4), 0 4px 24px rgba(0,0,0,0.5)";
  return (
    <button
      onClick={onClick}
      className={`${full ? "w-full" : "w-full sm:w-auto"} flex items-center justify-center gap-3 font-black ${py} ${px} ${text} rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] relative overflow-hidden group`}
      style={{ background: bg, color: "#000", boxShadow: shadow }}
    >
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </button>
  );
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  const [chatType, setChatType] = useState<"whatsapp" | "telegram" | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 0, seconds: 0 });
  const [chatMessages, setChatMessages] = useState<Array<{ type: "bot" | "user"; text: string }>>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [onlineCount, setOnlineCount] = useState(214);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const STORAGE_KEY = "offer_deadline_v3";
    const stored = localStorage.getItem(STORAGE_KEY);
    let deadline: number;
    if (stored) {
      deadline = parseInt(stored, 10);
      if (deadline < Date.now()) {
        deadline = Date.now() + 2 * 60 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, String(deadline));
      }
    } else {
      deadline = Date.now() + 2 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, String(deadline));
    }
    const tick = () => {
      const diff = Math.max(0, deadline - Date.now());
      setTimeLeft({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const base = 190 + Math.floor(Math.random() * 50);
    setOnlineCount(base);
    const t = setInterval(() => {
      setOnlineCount((p) => Math.max(160, Math.min(310, p + Math.floor(Math.random() * 7) - 3)));
    }, 9000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const CHECKOUT_URL = "https://pay.kiwify.com.br/2VJCa4D";
  const handleCheckout = () => window.open(CHECKOUT_URL, "_blank");

  const openChat = (type: "whatsapp" | "telegram") => {
    setChatType(type);
    setChatMessages(
      type === "whatsapp"
        ? [
            { type: "bot", text: "👋 Olá! Sou o suporte do IA que Dá Dinheiro." },
            { type: "bot", text: "📱 WhatsApp: +55 (19) 98116-8970" },
            { type: "bot", text: "Selecione sua dúvida abaixo:" },
          ]
        : [
            { type: "bot", text: "👋 Olá! Bem-vindo ao suporte." },
            { type: "bot", text: "Posso tirar suas dúvidas aqui mesmo:" },
          ]
    );
  };

  const faqDatabase = [
    {
      q: "Sou iniciante, esse curso serve para mim?",
      a: "Sim. O treinamento foi criado exatamente para pessoas que estão começando do zero e querem aprender de forma simples como usar IA para criar ideias, produtos digitais, conteúdos e páginas de venda. Não é necessário nenhum conhecimento prévio.",
    },
    {
      q: "Preciso aparecer nos vídeos ou nas redes sociais?",
      a: "Não. O método mostra caminhos que podem ser totalmente aplicados sem precisar aparecer, gravar vídeos com seu rosto ou criar conteúdo nas redes sociais.",
    },
    {
      q: "Preciso saber tecnologia ou programação?",
      a: "Não. As aulas são diretas e pensadas para iniciantes. Usamos ferramentas simples como ChatGPT e Canva, que qualquer pessoa consegue aprender.",
    },
    {
      q: "O acesso é imediato após o pagamento?",
      a: "Sim. Após a confirmação do pagamento (instantâneo no cartão ou PIX), você recebe o acesso ao conteúdo por e-mail em até 2 minutos.",
    },
    {
      q: "Tem garantia? Como funciona?",
      a: "Sim. Você tem 7 dias de garantia para acessar o conteúdo, assistir às aulas e decidir se faz sentido para você. Se não gostar, pode solicitar reembolso dentro do prazo, sem burocracia e sem precisar justificar.",
    },
    {
      q: "Por quanto tempo tenho acesso?",
      a: "Acesso vitalício. Você paga uma vez e acessa para sempre, incluindo todas as atualizações futuras do curso, sem nenhum custo adicional.",
    },
    {
      q: "Quais ferramentas vou usar no curso?",
      a: "O foco é em ferramentas acessíveis como ChatGPT, Canva e outras IAs gratuitas ou de baixo custo. Você não precisa investir em softwares caros para começar.",
    },
    {
      q: "Como funciona o pagamento?",
      a: "Você pode pagar com cartão de crédito em até 12x de R$ 4,70, PIX (com desconto extra) ou boleto bancário. Tudo 100% seguro pela plataforma Kiwify.",
    },
  ];

  const handleFaqQ = (q: string, a: string) => {
    setChatMessages((p) => [
      ...p,
      { type: "user", text: q },
      { type: "bot", text: a },
      { type: "bot", text: "Mais alguma dúvida? Clique abaixo para garantir seu acesso!" },
    ]);
  };

  return (
    <div className="min-h-screen" style={{ background: G.bg, color: G.text }}>

      {/* ═══ STICKY MOBILE ═══ */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-3 p-3 md:hidden"
        style={{ background: "rgba(3,3,9,0.97)", borderTop: `2px solid ${G.primary}`, backdropFilter: "blur(12px)" }}
      >
        <div className="flex-1 min-w-0">
          <p className="font-black text-white text-xs leading-tight">Acesso completo por R$ 47</p>
          <p className="text-[10px]" style={{ color: G.muted }}>⚡ Imediato · 🛡️ Garantia 7 dias</p>
        </div>
        <button
          onClick={handleCheckout}
          className="flex-shrink-0 flex items-center gap-2 font-black text-sm px-5 py-3 rounded-xl"
          style={{ background: "linear-gradient(135deg, #00C853, #00E676)", color: "#000", boxShadow: "0 0 20px rgba(0,200,83,0.5)" }}
        >
          ACESSAR AGORA
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* ═══ CHAT FLOAT ═══ */}
      <div className="fixed bottom-20 md:bottom-6 right-4 z-50 flex flex-col gap-3">
        <button
          onClick={() => openChat("whatsapp")}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
          style={{ background: "#25D366", boxShadow: "0 0 20px rgba(37,211,102,0.5)" }}
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center animate-pulse" style={{ background: "#ff4444", color: "#fff" }}>1</span>
        </button>
      </div>

      {/* ═══ CHAT BOX ═══ */}
      {chatType && (
        <div
          className="fixed bottom-20 md:bottom-6 right-4 z-50 w-[calc(100vw-2rem)] max-w-[380px] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          style={{ maxHeight: "80vh", background: "#fff" }}
        >
          <div className="flex items-center justify-between p-4 flex-shrink-0" style={{ background: "#075E54" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-black text-sm">Suporte WhatsApp</p>
                <p className="text-green-300 text-xs font-bold">🟢 Online agora</p>
              </div>
            </div>
            <button onClick={() => { setChatType(null); setChatMessages([]); }} className="text-white p-2 hover:bg-white/20 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0" style={{ background: "#ECE5DD" }}>
            {chatMessages.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[82%] p-3 rounded-2xl text-sm font-medium leading-relaxed shadow-sm"
                  style={m.type === "bot"
                    ? { background: "#fff", color: "#222", borderRadius: "4px 16px 16px 16px" }
                    : { background: "#DCF8C6", color: "#111", borderRadius: "16px 4px 16px 16px" }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="p-3 bg-white border-t overflow-y-auto flex-shrink-0" style={{ maxHeight: "170px" }}>
            <p className="text-[11px] text-gray-400 text-center font-bold mb-2">Escolha uma dúvida:</p>
            <div className="space-y-1.5">
              {faqDatabase.slice(0, 5).map((f, i) => (
                <button key={i} onClick={() => handleFaqQ(f.q, f.a)}
                  className="w-full text-left text-xs p-2.5 rounded-xl font-bold transition-all border"
                  style={{ background: "#f0fdf4", borderColor: "#bbf7d0", color: "#166534" }}>
                  {f.q}
                </button>
              ))}
            </div>
          </div>
          <div className="p-4 flex-shrink-0" style={{ background: "#075E54", borderTop: `3px solid ${G.primary}` }}>
            <button onClick={handleCheckout}
              className="w-full py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              style={{ background: G.primary, color: "#000", boxShadow: `0 0 20px rgba(0,200,83,0.5)` }}>
              <Sparkles className="w-4 h-4" />
              QUERO COMEÇAR POR R$ 47
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[10px] text-white/70 mt-2 font-bold">⚡ Acesso imediato · 🛡️ Garantia 7 dias</p>
          </div>
        </div>
      )}

      {/* ═══ BARRA ONLINE ═══ */}
      <div className="py-2 px-4 flex items-center justify-center gap-2 text-xs font-bold"
        style={{ background: "#08080f", borderBottom: "1px solid #1a1a2e" }}>
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
        <span style={{ color: "#555" }}>
          <span className="font-black" style={{ color: G.primary }}>{onlineCount} pessoas</span> estão visualizando esta página agora
        </span>
      </div>

      {/* ═══ BARRA TIMER ═══ */}
      <div className="py-2.5 px-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm font-black"
        style={{ background: "#0d0d1a", borderBottom: "1px solid #1a1a2e", color: G.mutedLight }}>
        <span className="flex items-center gap-1.5" style={{ color: G.gold }}>
          <AlertCircle className="w-4 h-4" /> OFERTA ESPECIAL ENCERRA EM:
        </span>
        <span className="px-4 py-1 rounded-lg tabular-nums tracking-widest text-base font-black border"
          style={{ background: "#0a0a14", color: G.gold, borderColor: "#2a2a1a" }}>
          {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
        </span>
        <span className="hidden sm:inline text-xs" style={{ color: G.muted }}>· Após o timer: preço normal</span>
      </div>

      {/* ══════════════════════════════════
          1. HERO
      ══════════════════════════════════ */}
      <section className="relative px-4 pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-6 px-4 py-2 rounded-full border"
            style={{ background: "rgba(124,58,237,0.1)", borderColor: "rgba(124,58,237,0.3)", color: G.accentLight }}>
            <Brain className="w-3.5 h-3.5" />
            Treinamento para iniciantes · Ferramentas de IA · Passo a passo completo
          </div>

          <h1 className="font-black leading-[1.08] mb-5 text-white"
            style={{ fontSize: "clamp(2rem, 5.5vw, 3.6rem)" }}>
            Aprenda a Usar Inteligência Artificial Para{" "}
            <span style={{ color: G.primary }}>Criar Sua Primeira Estrutura de Renda Extra Online</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: G.mutedLight }}>
            Método prático para iniciantes que querem usar <strong className="text-white">ChatGPT, Canva e outras ferramentas de IA</strong> para criar ideias, produtos digitais, páginas de venda e conteúdos — mesmo começando do zero.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {[
              { icon: CheckCircle, text: "Não precisa aparecer", c: G.primary },
              { icon: CheckCircle, text: "Sem experiência prévia", c: G.primary },
              { icon: CheckCircle, text: "Passo a passo completo", c: G.primary },
              { icon: Shield, text: "Garantia de 7 dias", c: G.gold },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-bold" style={{ color: "#888" }}>
                <t.icon className="w-4 h-4 flex-shrink-0" style={{ color: t.c }} />
                {t.text}
              </div>
            ))}
          </div>

          {/* Preço no hero */}
          <div className="inline-block mb-6 px-6 py-4 rounded-2xl border-2 text-center"
            style={{ background: "rgba(0,200,83,0.06)", borderColor: "rgba(0,200,83,0.25)" }}>
            <p className="text-sm mb-0.5" style={{ color: "#555" }}>Acesso completo por apenas</p>
            <div className="flex items-baseline gap-1 justify-center">
              <span className="font-black text-xl" style={{ color: G.primary }}>R$</span>
              <span className="font-black" style={{ fontSize: "4rem", color: G.primary, lineHeight: 1 }}>47</span>
            </div>
            <p className="text-xs mt-1" style={{ color: "#555" }}>ou 12x de R$ 4,70 · PIX com desconto</p>
          </div>

          {/* 2. BOTÃO CTA HERO */}
          <div className="flex flex-col items-center gap-3">
            <CTAButton onClick={handleCheckout} size="lg">
              <Rocket className="w-6 h-6" />
              QUERO COMEÇAR POR R$ 47
              <ArrowRight className="w-6 h-6" />
            </CTAButton>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs" style={{ color: G.muted }}>
              <span>🔒 Pagamento seguro via Kiwify</span>
              <span>·</span>
              <span>💳 Cartão, PIX ou Boleto</span>
              <span>·</span>
              <span>⚡ Acesso em 2 minutos</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          3. VSL
      ══════════════════════════════════ */}
      <section className="py-14 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.accentLight }}>ASSISTA ANTES DE ENTRAR</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Como a IA Pode Te Ajudar a Começar uma Renda Extra do Zero
            </h2>
            <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: G.mutedLight }}>
              Em poucos minutos você vai entender como funciona o método e por que ele foi criado para pessoas comuns que querem começar do zero usando inteligência artificial.
            </p>
          </div>

          {/* Player VSL premium */}
          <div
            className="relative rounded-2xl overflow-hidden border-2 cursor-pointer group"
            style={{ borderColor: "rgba(124,58,237,0.4)", boxShadow: "0 0 60px rgba(124,58,237,0.15), 0 20px 60px rgba(0,0,0,0.5)" }}
            onClick={handleCheckout}
          >
            <div className="aspect-video w-full flex items-center justify-center relative"
              style={{ background: "linear-gradient(135deg, #0a0a18, #0d0d22)" }}>
              {/* Glow de fundo */}
              <div className="absolute inset-0"
                style={{ background: "radial-gradient(circle at center, rgba(124,58,237,0.12) 0%, transparent 70%)" }} />
              {/* Grid sutil */}
              <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: "linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

              <div className="text-center z-10 px-4">
                {/* Botão play */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-all duration-300"
                  style={{
                    background: "rgba(124,58,237,0.2)",
                    border: "3px solid rgba(124,58,237,0.7)",
                    boxShadow: "0 0 50px rgba(124,58,237,0.4)"
                  }}>
                  <Play className="w-10 h-10 sm:w-12 sm:h-12 ml-1" style={{ color: G.accentLight }} />
                </div>
                <p className="font-black text-white text-lg sm:text-xl mb-2">
                  IA que Dá Dinheiro — Apresentação Completa
                </p>
                <p className="text-sm" style={{ color: G.mutedLight }}>
                  Clique para assistir · Aprenda como funciona em poucos minutos
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#888" }}>
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Disponível por tempo limitado
                </div>
              </div>
            </div>
          </div>

          {/* 4. BOTÃO ABAIXO DA VSL */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <CTAButton onClick={handleCheckout} size="lg" variant="green">
              <Lock className="w-6 h-6" />
              GARANTIR MEU ACESSO AGORA
              <ArrowRight className="w-6 h-6" />
            </CTAButton>
            <p className="text-xs" style={{ color: G.muted }}>🛡️ 7 dias de garantia · sem perguntas · dinheiro de volta</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          5. PARA QUEM É
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bg }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>PARA QUEM É ESSE TREINAMENTO</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Esse Curso Foi Feito Para Você Se...
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Brain, text: "Você quer aprender a usar IA de forma prática, sem termos técnicos", c: G.accentLight },
              { icon: Target, text: "Está começando do zero e quer um passo a passo claro para seguir", c: G.primary },
              { icon: Clock, text: "Tem pouco tempo disponível e precisa de um método direto ao ponto", c: G.gold },
              { icon: Shield, text: "Não quer aparecer, gravar vídeos com o rosto ou criar conteúdo nas redes", c: G.primary },
              { icon: Lightbulb, text: "Quer criar ideias de produtos digitais usando ferramentas como ChatGPT e Canva", c: G.accentLight },
              { icon: Rocket, text: "Busca estruturar sua primeira oferta digital e dar o primeiro passo", c: G.gold },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 hover:border-purple-800"
                style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${item.c}15` }}>
                  <item.icon className="w-5 h-5" style={{ color: item.c }} />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-2xl border text-center" style={{ background: "rgba(0,200,83,0.05)", borderColor: "rgba(0,200,83,0.2)" }}>
            <p className="font-bold text-sm sm:text-base" style={{ color: "#aaa" }}>
              Se você se identificou com algum ponto acima,{" "}
              <strong className="text-white">esse treinamento foi criado para você</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          6. O QUE VAI APRENDER
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.accentLight }}>CONTEÚDO DO TREINAMENTO</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">O Que Você Vai Aprender</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Brain, title: "Fundamentos de IA", desc: "Entenda como o ChatGPT e outras IAs funcionam na prática, sem complicação", accent: G.accentLight },
              { icon: Lightbulb, title: "Criação de Ideias", desc: "Use IA para gerar ideias de produtos digitais e ofertas simples com potencial de venda", accent: G.primary },
              { icon: FileText, title: "Produtos Digitais", desc: "Aprenda a estruturar e criar seu primeiro produto digital usando ferramentas de IA", accent: G.gold },
              { icon: MousePointer, title: "Páginas de Venda", desc: "Crie páginas de venda simples e persuasivas com ajuda de IA, sem precisar de programação", accent: G.accentLight },
              { icon: Video, title: "Criação de Conteúdo", desc: "Produza textos, scripts e conteúdos de forma rápida usando inteligência artificial", accent: G.primary },
              { icon: TrendingUp, title: "Primeira Venda", desc: "Estratégias simples para buscar sua primeira venda online e validar sua oferta", accent: G.gold },
            ].map((b, i) => (
              <div key={i} className="rounded-xl p-6 border transition-all duration-300 hover:translate-y-[-3px] group"
                style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${b.accent}15` }}>
                  <b.icon className="w-6 h-6" style={{ color: b.accent }} />
                </div>
                <h3 className="font-black text-lg text-white mb-2">{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: G.muted }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          7. MÓDULOS
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bg }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>ESTRUTURA DO CURSO</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">4 Módulos Estratégicos</h2>
            <p className="mt-3 text-sm" style={{ color: G.muted }}>9 aulas práticas, diretas ao ponto, sem enrolação</p>
          </div>
          <div className="space-y-3">
            {[
              {
                n: "01", title: "Fundamentos e Primeiros Passos com IA",
                lessons: "2 aulas",
                tags: ["Setup das ferramentas", "Primeiros prompts", "ChatGPT na prática"],
                desc: "Configure tudo e entenda como usar o ChatGPT e outras IAs para criar ideias e textos",
                c: G.accentLight
              },
              {
                n: "02", title: "Criando Sua Ideia de Produto Digital",
                lessons: "3 aulas",
                tags: ["Ideias com IA", "Validação simples", "Estrutura da oferta"],
                desc: "Use IA para criar uma ideia de produto digital viável, mesmo sem experiência prévia",
                c: G.primary
              },
              {
                n: "03", title: "Montando Sua Estrutura de Venda",
                lessons: "2 aulas",
                tags: ["Página de venda", "Texto persuasivo", "Ferramentas gratuitas"],
                desc: "Crie sua primeira página de venda e estruture sua oferta com ajuda das ferramentas de IA",
                c: G.gold
              },
              {
                n: "04", title: "Buscando Sua Primeira Venda",
                lessons: "2 aulas",
                tags: ["Primeiros clientes", "Divulgação simples", "Próximos passos"],
                desc: "Estratégias simples para começar a divulgar sua oferta e buscar a primeira venda",
                c: G.accentLight
              },
            ].map((m, i) => (
              <div key={i} className="rounded-xl p-5 sm:p-6 border flex flex-col sm:flex-row items-start gap-4 sm:gap-6 transition-all duration-300 hover:border-purple-900"
                style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0"
                  style={{ background: `${m.c}15`, color: m.c }}>{m.n}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="font-black text-white text-base sm:text-lg">{m.title}</h3>
                    <span className="text-xs font-bold flex-shrink-0 px-2 py-0.5 rounded-full"
                      style={{ background: `${m.c}15`, color: m.c }}>{m.lessons}</span>
                  </div>
                  <p className="text-sm mb-3" style={{ color: G.mutedLight }}>{m.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((tag, j) => (
                      <div key={j} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border"
                        style={{ background: G.bgDark, borderColor: "#1a1a2e", color: "#666" }}>
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
            <CTAButton onClick={handleCheckout} size="md">
              <BookOpen className="w-5 h-5" />
              COMEÇAR COM IA HOJE
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          8. BÔNUS
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.gold }}>INCLUSOS NO SEU ACESSO</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
              +5 Bônus <span style={{ color: G.primary }}>Completamente Grátis</span>
            </h2>
            <p style={{ color: G.muted }}>Materiais extras para acelerar seus primeiros resultados</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { title: "Lista de Prompts Prontos", icon: FileText, desc: "Templates de prompts validados para usar direto no ChatGPT hoje mesmo", val: "R$ 47" },
              { title: "Ferramentas Recomendadas", icon: Zap, desc: "As melhores IAs gratuitas e de baixo custo para cada tipo de tarefa", val: "R$ 37" },
              { title: "Checklist da Primeira Venda", icon: CheckCircle, desc: "Passo a passo visual para não esquecer nenhuma etapa importante", val: "R$ 47" },
              { title: "Scripts para Conteúdo", icon: Video, desc: "Roteiros prontos para criar conteúdo simples sem precisar aparecer", val: "R$ 37" },
              { title: "Modelos de Página de Venda", icon: Layers, desc: "Templates de texto para montar sua página de venda com ajuda da IA", val: "R$ 29" },
            ].map((b, i) => (
              <div key={i} className="rounded-xl p-5 border transition-all duration-300 hover:border-yellow-900"
                style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(245,158,11,0.1)" }}>
                    <b.icon className="w-5 h-5" style={{ color: G.gold }} />
                  </div>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(245,158,11,0.1)", color: G.gold, border: "1px solid rgba(245,158,11,0.3)" }}>
                    INCLUSO
                  </span>
                </div>
                <h3 className="font-black text-white text-base mb-1">{b.title}</h3>
                <p className="text-sm mb-3" style={{ color: G.muted }}>{b.desc}</p>
                <p className="text-xs line-through" style={{ color: "#2a2a3a" }}>Valor separado: {b.val}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton onClick={handleCheckout} size="lg" variant="gold">
              <Gift className="w-6 h-6" />
              QUERO OS BÔNUS INCLUSOS
              <ArrowRight className="w-6 h-6" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SEÇÃO DE CONFIANÇA — Por que é ideal para iniciantes
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bg }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>FEITO PARA INICIANTES</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Por Que Esse Treinamento é Ideal Para Você?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Shield, title: "Não precisa aparecer", desc: "O método mostra caminhos que podem ser aplicados sem mostrar rosto ou criar vídeos pessoais", c: G.primary },
              { icon: Award, title: "Zero experiência nécessária", desc: "As aulas foram criadas para quem nunca usou IA ou criou um produto digital antes", c: G.accentLight },
              { icon: Zap, title: "Acesso imediato", desc: "Após confirmar o pagamento, seu acesso chega por e-mail em até 2 minutos", c: G.gold },
              { icon: Layers, title: "Passo a passo simples", desc: "Cada módulo segue uma sequência lógica: você sempre sabe exatamente o que fazer a seguir", c: G.primary },
              { icon: Brain, title: "Ferramentas fáceis de usar", desc: "ChatGPT, Canva e outras IAs gratuitas — sem precisar instalar nada complexo", c: G.accentLight },
              { icon: Shield, title: "Garantia de 7 dias", desc: "Acesse tudo, assista às aulas e decida com calma. Se não gostar, dinheiro de volta sem burocracia", c: G.gold },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-6 border text-center transition-all duration-300 hover:border-purple-900"
                style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${item.c}12` }}>
                  <item.icon className="w-7 h-7" style={{ color: item.c }} />
                </div>
                <h3 className="font-black text-white text-base mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: G.muted }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          DEPOIMENTOS
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>O QUE DIZEM OS ALUNOS</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Quem Aplicou o Método <span style={{ color: G.primary }}>Deu o Primeiro Passo</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                text: "Nunca imaginei que conseguiria criar um produto digital. Em poucas semanas aprendi a usar o ChatGPT de um jeito que faz sentido pra mim. O passo a passo é muito claro.",
                name: "Ana Paula S.",
                role: "Iniciante em marketing digital",
                initials: "AP",
                color: "#7C3AED"
              },
              {
                text: "Sempre tive receio de tecnologia. Esse treinamento me mostrou que dá pra usar IA mesmo sem saber nada. Consegui estruturar minha primeira ideia de produto e montar uma página de venda.",
                name: "Carlos S.",
                role: "Autônomo — começando do zero",
                initials: "CS",
                color: "#00C853"
              },
              {
                text: "Estava perdida vendo vídeos aleatórios na internet. Aqui tem um caminho definido, sabe? Cada aula leva pra próxima de forma natural. Recomendo para quem está no início.",
                name: "Mariana C.",
                role: "Iniciante em renda extra online",
                initials: "MC",
                color: "#F59E0B"
              },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border flex flex-col" style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                <div className="flex items-center gap-3 p-4 border-b" style={{ borderColor: G.bgCardBorder }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 text-white"
                    style={{ background: t.color }}>
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-white text-sm">{t.name}</p>
                    <p className="text-[11px]" style={{ color: G.muted }}>{t.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array(5).fill(0).map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
                <div className="p-5 flex-1">
                  <p className="text-sm leading-relaxed italic" style={{ color: "#bbb" }}>&quot;{t.text}&quot;</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { n: "3.847+", l: "Alunos no curso" },
              { n: "97%", l: "Satisfação geral" },
              { n: "Vitalício", l: "Acesso ao conteúdo" },
              { n: "7 dias", l: "Garantia total" }
            ].map((s, i) => (
              <div key={i} className="text-center py-5 rounded-xl border" style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                <p className="font-black text-2xl sm:text-3xl" style={{ color: G.primary }}>{s.n}</p>
                <p className="text-xs mt-1" style={{ color: G.muted }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          9. GARANTIA
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bg }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl p-8 sm:p-12 border-2"
            style={{ background: G.bgCard, borderColor: "rgba(0,200,83,0.25)", boxShadow: "0 0 60px rgba(0,200,83,0.05)" }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(0,200,83,0.08)", border: "2px solid rgba(0,200,83,0.25)" }}>
              <Shield className="w-10 h-10" style={{ color: G.primary }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">Garantia de 7 Dias</h2>
            <p className="font-black text-lg sm:text-xl mb-5" style={{ color: G.primary }}>Sem risco. Sem burocracia.</p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#aaa" }}>
              Você tem 7 dias para acessar o conteúdo, assistir às aulas e decidir se o treinamento faz sentido para você.{" "}
              <strong className="text-white">Se não gostar, pode solicitar reembolso dentro do prazo da garantia, sem burocracia e sem precisar justificar.</strong> O risco é todo nosso.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {[
                { t: "100% do valor", d: "Devolução integral" },
                { t: "Até 7 dias", d: "Sem justificar" },
                { t: "Sem burocracia", d: "Simples e direto" },
              ].map((x, i) => (
                <div key={i} className="py-4 px-3 rounded-xl border" style={{ background: "rgba(0,200,83,0.04)", borderColor: "rgba(0,200,83,0.15)" }}>
                  <p className="font-black text-sm text-white mb-0.5">{x.t}</p>
                  <p className="text-xs" style={{ color: G.muted }}>{x.d}</p>
                </div>
              ))}
            </div>
            <CTAButton onClick={handleCheckout} full size="lg">
              <Shield className="w-6 h-6" />
              COMEÇAR SEM RISCO — R$ 47
              <ArrowRight className="w-6 h-6" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          10. OFERTA / PREÇO
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.gold }}>INVESTIMENTO ÚNICO · ACESSO VITALÍCIO</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Acesse Tudo Por Apenas</h2>
          </div>

          <div className="relative rounded-2xl p-8 border-2"
            style={{ background: "linear-gradient(145deg, #0d0d1a, #06060f)", borderColor: "rgba(124,58,237,0.4)", boxShadow: "0 0 60px rgba(124,58,237,0.1)" }}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full font-black text-xs whitespace-nowrap"
              style={{ background: "linear-gradient(90deg, #7C3AED, #A78BFA)", color: "#fff" }}>
              ACESSO COMPLETO + 5 BÔNUS INCLUSOS
            </div>

            <div className="text-center mb-6 pt-2">
              <p className="text-sm line-through mb-1" style={{ color: "#333" }}>De R$ 297,00</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl font-black" style={{ color: G.primary }}>R$</span>
                <span className="font-black leading-none" style={{ fontSize: "5.5rem", color: G.primary, lineHeight: 1 }}>47</span>
              </div>
              <p className="text-sm mt-1" style={{ color: "#555" }}>ou 12x de R$ 4,70 · PIX com desconto extra</p>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "4 módulos + 9 aulas práticas",
                "Acesso vitalício + atualizações gratuitas",
                "5 bônus exclusivos inclusos",
                "Suporte via WhatsApp",
                "Certificado de conclusão",
                "Garantia de 7 dias",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: G.primary }}>
                    <Check className="w-3 h-3 text-black" />
                  </div>
                  <span className="text-sm sm:text-base" style={{ color: "#ddd" }}>{item}</span>
                </div>
              ))}
            </div>

            <CTAButton onClick={handleCheckout} full size="lg">
              <Lock className="w-5 h-5" />
              GARANTIR MEU ACESSO AGORA
              <ArrowRight className="w-5 h-5" />
            </CTAButton>

            <div className="flex items-center justify-center gap-5 mt-4">
              {[
                { icon: Shield, text: "Garantia 7 dias", c: G.primary },
                { icon: Lock, text: "100% seguro", c: G.accentLight },
                { icon: Zap, text: "Acesso imediato", c: G.gold },
              ].map((x, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs font-bold" style={{ color: "#444" }}>
                  <x.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: x.c }} />
                  {x.text}
                </div>
              ))}
            </div>
          </div>

          {/* Timer na seção de preço */}
          <div className="mt-5 p-4 rounded-xl border text-center" style={{ background: "rgba(245,158,11,0.05)", borderColor: "rgba(245,158,11,0.2)" }}>
            <p className="text-xs font-bold mb-1" style={{ color: G.gold }}>⏱️ Esta oferta expira em:</p>
            <p className="font-black text-xl tabular-nums" style={{ color: G.gold }}>
              {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
            </p>
            <p className="text-xs mt-1" style={{ color: "#444" }}>Aproveite enquanto está disponível neste valor</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          11. FAQ
      ══════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bg }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>PERGUNTAS FREQUENTES</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Ainda tem dúvidas?</h2>
            <p className="mt-3 text-sm" style={{ color: G.muted }}>Respondemos as perguntas mais comuns abaixo</p>
          </div>

          <div className="space-y-3">
            {faqDatabase.map((item, i) => (
              <div key={i} className="rounded-xl border overflow-hidden transition-all duration-300"
                style={{ background: G.bgCard, borderColor: openFaq === i ? "rgba(124,58,237,0.4)" : G.bgCardBorder }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors"
                  style={{ color: openFaq === i ? G.accentLight : "#ddd" }}
                >
                  <span className="font-bold text-sm sm:text-base">{item.q}</span>
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", color: openFaq === i ? G.accentLight : G.muted }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <div className="pt-3 border-t text-sm sm:text-base leading-relaxed" style={{ borderColor: G.bgCardBorder, color: "#999" }}>
                      {item.a}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 9. WHATSAPP suporte */}
          <div className="mt-10 text-center">
            <p className="text-sm mb-4" style={{ color: G.muted }}>Ainda ficou com dúvida? Fale com o suporte no WhatsApp.</p>
            <button onClick={() => openChat("whatsapp")}
              className="inline-flex items-center gap-2 font-black text-sm px-6 py-3 rounded-xl transition-all hover:scale-[1.02]"
              style={{ background: "#25D366", color: "#fff", boxShadow: "0 0 20px rgba(37,211,102,0.3)" }}>
              <MessageCircle className="w-4 h-4" />
              FALAR COM O SUPORTE
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          12. CTA FINAL
      ══════════════════════════════════ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: G.bgDark }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.07) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-xs font-bold" style={{ color: "#555" }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span><strong style={{ color: G.primary }}>{onlineCount} pessoas</strong> estão visualizando esta oferta agora</span>
          </div>

          <h2 className="font-black leading-tight text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
            Dê o Primeiro Passo com IA{" "}
            <span style={{ color: G.primary }}>Ainda Hoje</span>
          </h2>

          <p className="text-base sm:text-lg" style={{ color: "#777" }}>
            Por <strong className="text-white">R$ 47</strong> você tem acesso ao treinamento completo, 5 bônus e uma estrutura passo a passo para aprender a usar inteligência artificial e começar sua renda extra online — com garantia de 7 dias.
          </p>

          {/* Box de tudo incluso */}
          <div className="p-6 rounded-2xl border-2 text-left" style={{ background: "rgba(124,58,237,0.05)", borderColor: "rgba(124,58,237,0.2)" }}>
            <p className="font-black text-center text-white mb-4">Você leva tudo isso por R$ 47:</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "4 módulos + 9 aulas práticas",
                "Acesso vitalício + atualizações",
                "5 bônus exclusivos inclusos",
                "Suporte via WhatsApp",
                "Certificado de conclusão",
                "Garantia de 7 dias",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "#bbb" }}>
                  <Check className="w-4 h-4 flex-shrink-0" style={{ color: G.primary }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <CTAButton onClick={handleCheckout} size="lg">
            <Rocket className="w-6 h-6" />
            COMEÇAR COM IA HOJE — R$ 47
            <ArrowRight className="w-6 h-6" />
          </CTAButton>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: Lock, text: "Pagamento 100% seguro", c: G.accentLight },
              { icon: Zap, text: "Acesso em 2 minutos", c: G.gold },
              { icon: Shield, text: "Garantia de 7 dias", c: G.primary },
            ].map((x, i) => (
              <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "#444" }}>
                <x.icon className="w-4 h-4 flex-shrink-0" style={{ color: x.c }} />
                {x.text}
              </div>
            ))}
          </div>

          {/* Timer final */}
          <div className="p-4 rounded-xl border" style={{ background: "rgba(245,158,11,0.05)", borderColor: "rgba(245,158,11,0.2)" }}>
            <p className="text-xs font-bold mb-1" style={{ color: G.gold }}>⏱️ Esta oferta expira em:</p>
            <p className="font-black text-2xl tabular-nums" style={{ color: G.gold }}>
              {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
            </p>
            <p className="text-xs mt-1" style={{ color: "#444" }}>Aproveite enquanto está disponível neste valor</p>
          </div>

          {/* WhatsApp CTA final */}
          <p className="text-sm" style={{ color: "#444" }}>
            Ainda tem alguma dúvida?{" "}
            <button onClick={() => openChat("whatsapp")}
              className="font-bold underline transition-colors hover:text-green-400"
              style={{ color: "#25D366" }}>
              Fale com o suporte no WhatsApp
            </button>
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-4 text-center border-t" style={{ background: "#020209", borderColor: "#0d0d1a" }}>
        <p className="text-sm font-bold mb-3" style={{ color: "#222" }}>© 2024 IA que Dá Dinheiro · Todos os direitos reservados</p>
        <p className="text-xs max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: "#1a1a2e" }}>
          Este produto não garante a obtenção de resultados. Os resultados variam de acordo com o esforço, dedicação e contexto de cada pessoa. Qualquer referência a resultados específicos é meramente ilustrativa e não representa uma garantia de rendimento.
        </p>
        <div className="flex justify-center gap-8">
          <button onClick={() => openChat("whatsapp")} className="text-sm font-bold transition-colors hover:text-green-400" style={{ color: "#1a1a2e" }}>Suporte WhatsApp</button>
        </div>
      </footer>

      {/* Espaço mobile */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
