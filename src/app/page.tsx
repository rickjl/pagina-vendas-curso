"use client";

import {
  Check, Shield, Star, ArrowRight, Lock,
  MessageCircle, Zap, Rocket, X, Sparkles,
  AlertCircle, Gift, Brain, BookOpen,
  Video, FileText, CheckCircle,
  TrendingUp, ChevronRight, ChevronDown,
  Clock, Target, Lightbulb, Award, Layers, MousePointer,
  Quote, Heart, Play
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

/*
  MAPA DE IMAGENS — cada uma aparece UMA única vez
  img1 → Hero (menina celular / resultado Kiwify) — ATENÇÃO
  img6 → "Para Quem É" (jovem quarto celular)    — IDENTIFICAÇÃO
  img7 → "O Que Vai Aprender" (jovem na mesa)    — DESEJO / FOCO
  img3 → "Não precisa de tech" (mulher cozinha)  — QUEBRA DE OBJEÇÃO
  img4 → Depoimentos (mãe com bebê)              — EMOÇÃO
  img2 → Prova Social / Resultados (homem note)  — PROVA
  img5 → CTA Final (rapaz quarto simples)        — IDENTIFICAÇÃO FINAL
*/
const IMGS = {
  img1: "https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_37qm9CDZknhPoc8NQaP3T2LBkwE/c816ada1-d800-4258-9688-6f46e94ea37f.png",
  img2: "https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_37qm9CDZknhPoc8NQaP3T2LBkwE/065d6a28-184a-4498-a177-857a11151661.png",
  img3: "https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_37qm9CDZknhPoc8NQaP3T2LBkwE/277b8333-03c0-4f9b-ac9f-f36d0f0b7931.png",
  img4: "https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_37qm9CDZknhPoc8NQaP3T2LBkwE/114b3660-7e61-450e-8891-ce467d4f2454.png",
  img5: "https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_37qm9CDZknhPoc8NQaP3T2LBkwE/750f8ca4-5311-4289-aaa9-14686a724be2.png",
  img6: "https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_37qm9CDZknhPoc8NQaP3T2LBkwE/fec475e4-f912-4388-bca6-4d045ac8c2d9.png",
  img7: "https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_37qm9CDZknhPoc8NQaP3T2LBkwE/68291e51-e4ab-495d-b392-a26930061b81.png",
};

/* ─── Botão CTA ─── */
const CTAButton = ({
  onClick, children, size = "lg", full = false, variant = "green",
}: {
  onClick: () => void; children: React.ReactNode;
  size?: "lg" | "md" | "sm"; full?: boolean; variant?: "green" | "gold";
}) => {
  const py = size === "lg" ? "py-5 sm:py-6" : size === "md" ? "py-4" : "py-3";
  const px = size === "lg" ? "px-10 sm:px-14" : size === "md" ? "px-8" : "px-6";
  const text = size === "lg" ? "text-lg sm:text-xl" : size === "md" ? "text-base sm:text-lg" : "text-sm sm:text-base";
  const bg = variant === "gold" ? "linear-gradient(135deg, #F59E0B, #FBBF24)" : "linear-gradient(135deg, #00C853, #00E676)";
  const shadow = variant === "gold" ? "0 0 40px rgba(245,158,11,0.4), 0 4px 24px rgba(0,0,0,0.5)" : "0 0 40px rgba(0,200,83,0.4), 0 4px 24px rgba(0,0,0,0.5)";
  return (
    <button onClick={onClick}
      className={`${full ? "w-full" : "w-full sm:w-auto"} flex items-center justify-center gap-3 font-black ${py} ${px} ${text} rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]`}
      style={{ background: bg, color: "#000", boxShadow: shadow }}>
      <span className="flex items-center gap-3">{children}</span>
    </button>
  );
};

/* ─── Card de foto ─── */
const PhotoCard = ({ src, badge, label, subLabel, aspect = "portrait" }: {
  src: string; badge?: string; label: string; subLabel?: string; aspect?: "portrait" | "square";
}) => (
  <div className="relative rounded-2xl overflow-hidden group w-full h-full"
    style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)" }}>
    <div style={{ aspectRatio: aspect === "portrait" ? "3/4" : "1/1" }}>
      <img src={src} alt={label} loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        style={{ display: "block" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(3,3,9,0.88) 0%, transparent 52%)" }} />
    </div>
    {badge && (
      <div className="absolute top-3 left-3">
        <span className="text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest"
          style={{ background: G.primary, color: "#000" }}>{badge}</span>
      </div>
    )}
    <div className="absolute bottom-0 left-0 right-0 p-3">
      <p className="font-black text-white text-sm leading-tight">{label}</p>
      {subLabel && <p className="text-[11px] mt-0.5" style={{ color: G.primaryLight }}>{subLabel}</p>}
    </div>
  </div>
);

/* ─── Divisor gradiente ─── */
const Divider = ({ a = G.accent, b = G.primary }: { a?: string; b?: string }) => (
  <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${a}50, ${b}50, transparent)` }} />
);

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  const [chatType, setChatType] = useState<"whatsapp" | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 0, seconds: 0 });
  const [chatMessages, setChatMessages] = useState<Array<{ type: "bot" | "user"; text: string }>>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [onlineCount, setOnlineCount] = useState(214);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const KEY = "offer_v4";
    let deadline = parseInt(localStorage.getItem(KEY) || "0", 10);
    if (!deadline || deadline < Date.now()) {
      deadline = Date.now() + 2 * 60 * 60 * 1000;
      localStorage.setItem(KEY, String(deadline));
    }
    const tick = () => {
      const d = Math.max(0, deadline - Date.now());
      setTimeLeft({ hours: Math.floor(d / 3600000), minutes: Math.floor((d % 3600000) / 60000), seconds: Math.floor((d % 60000) / 1000) });
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    setOnlineCount(190 + Math.floor(Math.random() * 50));
    const t = setInterval(() => setOnlineCount(p => Math.max(160, Math.min(310, p + Math.floor(Math.random() * 7) - 3))), 9000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatMessages]);

  const CHECKOUT_URL = "https://pay.kiwify.com.br/2VJCa4D";
  const go = () => window.open(CHECKOUT_URL, "_blank");

  const openChat = () => {
    setChatType("whatsapp");
    setChatMessages([
      { type: "bot", text: "Olá! Sou o suporte do IA que Dá Dinheiro." },
      { type: "bot", text: "WhatsApp: +55 (19) 98116-8970" },
      { type: "bot", text: "Selecione sua dúvida abaixo:" },
    ]);
  };

  const faqs = [
    { q: "Sou iniciante total. Esse curso é pra mim?", a: "Sim. O curso foi criado exatamente para quem está começando do zero. Não é necessário nenhum conhecimento prévio em tecnologia, marketing ou vendas. O passo a passo leva você do zero até a estrutura pronta." },
    { q: "Preciso aparecer ou criar conteúdo nas redes?", a: "Não. O método mostra formas de trabalhar online sem precisar aparecer, gravar vídeos com seu rosto ou depender de seguidores nas redes sociais." },
    { q: "Preciso saber programar ou de tecnologia?", a: "Não. Usamos ferramentas simples como ChatGPT e Canva. Se você sabe usar o celular, você consegue aplicar o que está no curso." },
    { q: "O acesso é imediato após o pagamento?", a: "Sim. Após a confirmação do pagamento (instantâneo no cartão ou PIX), você recebe o link de acesso por e-mail em até 2 minutos." },
    { q: "Como funciona a garantia de 7 dias?", a: "Você tem 7 dias para acessar todo o conteúdo e decidir se faz sentido para você. Se não gostar, basta pedir reembolso. Sem perguntas, sem burocracia, 100% do valor devolvido." },
    { q: "Por quanto tempo tenho acesso?", a: "Acesso vitalício. Você paga uma vez e tem acesso para sempre, incluindo todas as atualizações futuras sem custo adicional." },
    { q: "Quais ferramentas eu vou usar?", a: "ChatGPT, Canva e outras IAs gratuitas ou de baixo custo. Você não precisa investir em nada além do curso para começar." },
    { q: "Como funciona o pagamento?", a: "Cartão de crédito em até 12x de R$ 4,70, PIX com desconto ou boleto bancário. 100% seguro pela plataforma Kiwify." },
  ];

  const handleFaqQ = (q: string, a: string) => {
    setChatMessages(p => [...p, { type: "user", text: q }, { type: "bot", text: a }, { type: "bot", text: "Ficou mais claro? Clique abaixo para garantir seu acesso!" }]);
  };

  return (
    <div className="min-h-screen" style={{ background: G.bg, color: G.text }}>

      {/* ── STICKY MOBILE ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-3 p-3 md:hidden"
        style={{ background: "rgba(3,3,9,0.97)", borderTop: `2px solid ${G.primary}`, backdropFilter: "blur(12px)" }}>
        <div className="flex-1 min-w-0">
          <p className="font-black text-white text-xs">Acesso completo por R$ 47</p>
          <p className="text-[10px]" style={{ color: G.muted }}>Imediato · Garantia 7 dias</p>
        </div>
        <button onClick={go} className="flex-shrink-0 flex items-center gap-2 font-black text-sm px-5 py-3 rounded-xl"
          style={{ background: "linear-gradient(135deg,#00C853,#00E676)", color: "#000", boxShadow: "0 0 20px rgba(0,200,83,0.5)" }}>
          ACESSAR AGORA <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* ── WHATSAPP FLOAT ── */}
      {!chatType && (
        <div className="fixed bottom-20 md:bottom-6 right-4 z-50">
          <button onClick={openChat}
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
            style={{ background: "#25D366", boxShadow: "0 0 20px rgba(37,211,102,0.5)" }}>
            <MessageCircle className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center animate-pulse"
              style={{ background: "#ff4444", color: "#fff" }}>1</span>
          </button>
        </div>
      )}

      {/* ── CHAT BOX ── */}
      {chatType && (
        <div className="fixed bottom-20 md:bottom-6 right-4 z-50 w-[calc(100vw-2rem)] max-w-[380px] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          style={{ maxHeight: "80vh", background: "#fff" }}>
          <div className="flex items-center justify-between p-4 flex-shrink-0" style={{ background: "#075E54" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-black text-sm">Suporte WhatsApp</p>
                <p className="text-green-300 text-xs font-bold">Online agora</p>
              </div>
            </div>
            <button onClick={() => { setChatType(null); setChatMessages([]); }} className="text-white p-2 hover:bg-white/20 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0" style={{ background: "#ECE5DD" }}>
            {chatMessages.map((m, i) => (
              <div key={i} className={`flex ${m.type === "user" ? "justify-end" : "justify-start"}`}>
                <div className="max-w-[82%] p-3 rounded-2xl text-sm font-medium leading-relaxed shadow-sm"
                  style={m.type === "bot"
                    ? { background: "#fff", color: "#222", borderRadius: "4px 16px 16px 16px" }
                    : { background: "#DCF8C6", color: "#111", borderRadius: "16px 4px 16px 16px" }}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="p-3 bg-white border-t overflow-y-auto flex-shrink-0" style={{ maxHeight: "170px" }}>
            <p className="text-[11px] text-gray-400 text-center font-bold mb-2">Escolha uma dúvida:</p>
            <div className="space-y-1.5">
              {faqs.slice(0, 5).map((f, i) => (
                <button key={i} onClick={() => handleFaqQ(f.q, f.a)}
                  className="w-full text-left text-xs p-2.5 rounded-xl font-bold border"
                  style={{ background: "#f0fdf4", borderColor: "#bbf7d0", color: "#166534" }}>{f.q}</button>
              ))}
            </div>
          </div>
          <div className="p-4 flex-shrink-0" style={{ background: "#075E54", borderTop: `3px solid ${G.primary}` }}>
            <button onClick={go} className="w-full py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
              style={{ background: G.primary, color: "#000", boxShadow: `0 0 20px rgba(0,200,83,0.5)` }}>
              <Sparkles className="w-4 h-4" /> QUERO COMEÇAR POR R$ 47 <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[10px] text-white/70 mt-2 font-bold">Acesso imediato · Garantia 7 dias</p>
          </div>
        </div>
      )}

      {/* ── BARRA ONLINE ── */}
      <div className="py-2 px-4 flex items-center justify-center gap-2 text-xs font-bold"
        style={{ background: "#08080f", borderBottom: "1px solid #1a1a2e" }}>
        <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: G.primary }} />
        <span style={{ color: "#555" }}>
          <span className="font-black" style={{ color: G.primary }}>{onlineCount} pessoas</span> visualizando esta página agora
        </span>
      </div>

      {/* ── BARRA TIMER ── */}
      <div className="py-2.5 px-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-black"
        style={{ background: "#0d0d1a", borderBottom: "1px solid #1a1a2e" }}>
        <span className="flex items-center gap-1.5 text-sm" style={{ color: G.gold }}>
          <AlertCircle className="w-4 h-4" /> OFERTA ESPECIAL ENCERRA EM:
        </span>
        <span className="px-4 py-1 rounded-lg tabular-nums tracking-widest text-base border"
          style={{ background: "#0a0a14", color: G.gold, borderColor: "#2a2a1a" }}>
          {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
        </span>
        <span className="hidden sm:inline text-xs" style={{ color: G.muted }}>Após o timer: preço normal</span>
      </div>

      {/* ════════════════════════════════════════
          SEÇÃO 1 · HERO
          Imagem: img1 (menina celular/Kiwify)
          Objetivo: ATENÇÃO + primeira impressão
      ════════════════════════════════════════ */}
      <section className="relative px-4 pt-14 pb-0 md:pt-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* TEXTO */}
            <div className="text-center lg:text-left pb-10 lg:pb-16 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-6 px-4 py-2 rounded-full border"
                style={{ background: "rgba(124,58,237,0.1)", borderColor: "rgba(124,58,237,0.3)", color: G.accentLight }}>
                <Brain className="w-3.5 h-3.5" />
                Treinamento completo · Do zero ao resultado
              </div>

              <h1 className="font-black leading-[1.07] mb-5 text-white"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                Aprenda a Usar IA Para{" "}
                <span style={{ color: G.primary }}>
                  Criar Uma Renda Extra Online — Mesmo Sem Experiência
                </span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0" style={{ color: G.mutedLight }}>
                Descubra como pessoas comuns estão usando o ChatGPT e outras ferramentas de IA para criar produtos digitais e fontes de renda — <strong className="text-white">usando apenas celular ou notebook, sem precisar aparecer.</strong>
              </p>

              {/* Micro-provas */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 mb-7 justify-center lg:justify-start">
                {[
                  { icon: CheckCircle, text: "Zero experiência necessária", c: G.primary },
                  { icon: CheckCircle, text: "Não precisa aparecer", c: G.primary },
                  { icon: CheckCircle, text: "Ferramentas gratuitas", c: G.primary },
                  { icon: Shield, text: "Garantia 7 dias", c: G.gold },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold" style={{ color: "#888" }}>
                    <t.icon className="w-4 h-4 flex-shrink-0" style={{ color: t.c }} />
                    {t.text}
                  </div>
                ))}
              </div>

              {/* Avatares + estrelas */}
              <div className="flex items-center gap-3 mb-7 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[G.accent, G.primary, G.gold, "#e11d48", "#0ea5e9"].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-black text-white"
                      style={{ background: c, borderColor: G.bg }}>
                      {["A", "C", "M", "R", "L"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {Array(5).fill(0).map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-xs font-bold" style={{ color: "#666" }}>
                    <span style={{ color: G.primary }}>+3.800 alunos</span> já estão aprendendo com IA
                  </p>
                </div>
              </div>

              {/* Box de preço */}
              <div className="inline-block mb-6 px-6 py-4 rounded-2xl border-2"
                style={{ background: "rgba(0,200,83,0.06)", borderColor: "rgba(0,200,83,0.25)" }}>
                <p className="text-sm mb-0.5 text-center lg:text-left" style={{ color: "#555" }}>Acesso completo por apenas</p>
                <div className="flex items-baseline gap-1 justify-center lg:justify-start">
                  <span className="font-black text-xl" style={{ color: G.primary }}>R$</span>
                  <span className="font-black" style={{ fontSize: "4rem", color: G.primary, lineHeight: 1 }}>47</span>
                </div>
                <p className="text-xs mt-1 text-center lg:text-left" style={{ color: "#555" }}>ou 12x de R$ 4,70 · PIX com desconto</p>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-3">
                <CTAButton onClick={go} size="lg">
                  <Rocket className="w-6 h-6" />
                  QUERO COMEÇAR AGORA
                  <ArrowRight className="w-6 h-6" />
                </CTAButton>
                <p className="text-xs text-center lg:text-left" style={{ color: G.muted }}>
                  Pagamento seguro via Kiwify · Cartão, PIX ou Boleto · Acesso em 2 minutos
                </p>
              </div>
            </div>

            {/* IMAGEM HERO — img1 */}
            <div className="order-1 lg:order-2 pb-4 lg:pb-16">
              <div className="relative max-w-xs mx-auto lg:max-w-none">
                <PhotoCard
                  src={IMGS.img1}
                  badge="Resultado real"
                  label="Primeiros resultados na Kiwify usando IA"
                  subLabel="Pessoas comuns, resultado real"
                  aspect="portrait"
                />
                {/* Balão flutuante de prova */}
                <div className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl border hidden sm:flex items-center gap-2 shadow-xl"
                  style={{ background: G.bgCard, borderColor: "rgba(0,200,83,0.3)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,200,83,0.15)" }}>
                    <TrendingUp className="w-4 h-4" style={{ color: G.primary }} />
                  </div>
                  <div>
                    <p className="font-black text-white text-xs">Primeiras vendas</p>
                    <p className="text-[10px]" style={{ color: G.primaryLight }}>com IA + método simples</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider a={G.accent} b={G.primary} />

      {/* ════════════════════════════════════════
          SEÇÃO 2 · O MERCADO ESTÁ MUDANDO
          Objetivo: URGÊNCIA + consciência do problema
      ════════════════════════════════════════ */}
      <section className="py-14 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-black text-xs uppercase tracking-widest mb-4" style={{ color: G.accentLight }}>
            O MOMENTO É AGORA
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
            A IA Não é o Futuro.<br />
            <span style={{ color: G.primary }}>É o Presente. E Está Acontecendo Sem Você.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: G.mutedLight }}>
            Pessoas sem formação específica, sem grande capital, sem seguidores — estão usando ferramentas simples de IA para criar produtos digitais, oferecer serviços e gerar renda extra de casa. Quem aprender isso agora vai estar anos à frente de quem esperar.
          </p>

          {/* 3 blocos de realidade */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { n: "73%", label: "das empresas já usam IA no trabalho", c: G.accentLight },
              { n: "R$ 47", label: "é tudo que você precisa para começar hoje", c: G.primary },
              { n: "7 dias", label: "de garantia. Zero risco para você", c: G.gold },
            ].map((b, i) => (
              <div key={i} className="py-6 px-4 rounded-2xl border"
                style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                <p className="font-black text-3xl sm:text-4xl mb-1" style={{ color: b.c }}>{b.n}</p>
                <p className="text-xs leading-snug" style={{ color: G.mutedLight }}>{b.label}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl border"
            style={{ background: "rgba(124,58,237,0.05)", borderColor: "rgba(124,58,237,0.2)" }}>
            <Quote className="w-7 h-7 mx-auto mb-3 opacity-30" style={{ color: G.accentLight }} />
            <p className="text-lg font-black text-white mb-2">
              "A IA não vai roubar seu emprego.{" "}
              <span style={{ color: G.primary }}>A pessoa que sabe usar IA vai."</span>
            </p>
            <p className="text-sm" style={{ color: G.mutedLight }}>
              Quem aprende agora tem vantagem. Quem espera, perde espaço.
            </p>
          </div>
        </div>
      </section>

      <Divider a={G.primary} b={G.gold} />

      {/* ════════════════════════════════════════
          SEÇÃO 3 · VSL
          Objetivo: ENGAJAMENTO + confiança no produto
      ════════════════════════════════════════ */}
      <section className="py-14 px-4" style={{ background: G.bg }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.accentLight }}>
              ANTES DE DECIDIR, ASSISTA
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Veja em 2 Minutos Por Que Isso Funciona Para Iniciantes
            </h2>
            <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: G.mutedLight }}>
              A Júlia explica como funciona, para quem é e por que qualquer pessoa consegue aplicar — mesmo começando do absoluto zero.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 w-full max-w-sm"
              style={{ borderColor: "rgba(124,58,237,0.5)", boxShadow: "0 0 60px rgba(124,58,237,0.2), 0 20px 60px rgba(0,0,0,0.6)" }}>
              <div style={{ position: "relative", paddingTop: "177.78%" }}>
                <iframe
                  src="https://www.youtube.com/embed/lreeTAJSmn0?autoplay=0&rel=0&modestbranding=1&playsinline=1"
                  title="IA que Dá Dinheiro — Apresentação"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", background: "#000" }}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            <CTAButton onClick={go} size="lg">
              <Lock className="w-6 h-6" />
              GARANTIR MEU ACESSO AGORA
              <ArrowRight className="w-6 h-6" />
            </CTAButton>
            <p className="text-xs" style={{ color: G.muted }}>7 dias de garantia · dinheiro de volta · sem perguntas</p>
          </div>
        </div>
      </section>

      <Divider a={G.gold} b={G.accent} />

      {/* ════════════════════════════════════════
          SEÇÃO 4 · PARA QUEM É
          Imagem: img6 (jovem quarto celular)
          Objetivo: IDENTIFICAÇÃO — "isso é pra mim"
      ════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>ESSE TREINAMENTO É PARA VOCÊ</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Você se Reconhece em Alguma Dessas Situações?
            </h2>
            <p className="mt-3 text-sm sm:text-base max-w-2xl mx-auto" style={{ color: G.mutedLight }}>
              Se você se identificou com pelo menos um ponto abaixo, o treinamento foi feito para você.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Lista de identificação */}
            <div className="grid gap-3">
              {[
                { icon: Brain, text: "Quer usar IA de forma prática, sem precisar entender os termos técnicos", c: G.accentLight },
                { icon: Target, text: "Está começando do zero e quer um caminho claro, sem ficar perdido", c: G.primary },
                { icon: Clock, text: "Tem pouco tempo livre e precisa de um método direto ao ponto", c: G.gold },
                { icon: Shield, text: "Não quer aparecer, gravar vídeos ou criar conteúdo para redes sociais", c: G.primary },
                { icon: Heart, text: "Quer trabalhar de casa e criar uma renda extra real sem depender de ninguém", c: G.gold },
                { icon: Lightbulb, text: "Quer criar ideias de produtos digitais e transformar conhecimento em renda", c: G.accentLight },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border hover:border-purple-800 transition-all duration-300"
                  style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.c}18` }}>
                    <item.icon style={{ color: item.c, width: 18, height: 18 }} />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>{item.text}</p>
                </div>
              ))}
            </div>

            {/* IMAGEM — img6 */}
            <div className="flex flex-col gap-4">
              <PhotoCard
                src={IMGS.img6}
                badge="Do seu jeito"
                label="Aprenda no seu ritmo, de onde você estiver"
                subLabel="Celular, notebook ou tablet — você escolhe"
                aspect="portrait"
              />
              <div className="p-4 rounded-2xl border" style={{ background: "rgba(0,200,83,0.06)", borderColor: "rgba(0,200,83,0.2)" }}>
                <TrendingUp className="w-5 h-5 mb-2" style={{ color: G.primary }} />
                <p className="font-black text-white text-sm mb-1">Qualquer pessoa consegue aplicar isso</p>
                <p className="text-xs leading-relaxed" style={{ color: G.mutedLight }}>
                  A IA foi feita para facilitar a vida das pessoas — não para complicar. Se você sabe usar o celular, você já tem o que precisa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          SEÇÃO 5 · O QUE VAI APRENDER
          Imagem: img7 (jovem na mesa estudando)
          Objetivo: DESEJO — o que vou conquistar
      ════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bg }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.accentLight }}>CONTEÚDO DO TREINAMENTO</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              O Que Você Vai Aprender e Aplicar
            </h2>
            <p className="mt-3 text-sm sm:text-base max-w-2xl mx-auto" style={{ color: G.mutedLight }}>
              Nada de teoria vaga. Cada aula tem um objetivo claro e uma ação prática para você executar.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Cards de conteúdo */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Brain, title: "Como a IA Funciona na Prática", desc: "Entenda o ChatGPT sem complicação e comece a usar para criar textos, ideias e estratégias", accent: G.accentLight },
                { icon: Lightbulb, title: "Criação de Produtos Digitais", desc: "Use IA para gerar ideias de produtos que as pessoas querem comprar — e estruturar sua oferta", accent: G.primary },
                { icon: MousePointer, title: "Páginas de Venda com IA", desc: "Crie páginas persuasivas com textos gerados por IA, sem precisar de programação ou design", accent: G.gold },
                { icon: Video, title: "Conteúdo Sem Aparecer", desc: "Scripts, textos e formatos prontos para criar conteúdo rápido sem mostrar o rosto", accent: G.accentLight },
                { icon: FileText, title: "Ferramentas Gratuitas e Baratas", desc: "As melhores IAs disponíveis hoje, como usar cada uma e o que cada ferramenta faz melhor", accent: G.primary },
                { icon: TrendingUp, title: "Estratégia Para a Primeira Venda", desc: "Passo a passo simples para validar sua oferta e buscar os primeiros resultados reais", accent: G.gold },
              ].map((b, i) => (
                <div key={i} className="rounded-xl p-5 border hover:translate-y-[-3px] transition-all duration-300 group"
                  style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                    style={{ background: `${b.accent}15` }}>
                    <b.icon className="w-5 h-5" style={{ color: b.accent }} />
                  </div>
                  <h3 className="font-black text-base text-white mb-1">{b.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: G.muted }}>{b.desc}</p>
                </div>
              ))}
            </div>

            {/* IMAGEM — img7 */}
            <div className="flex flex-col gap-4 lg:sticky lg:top-8">
              <PhotoCard
                src={IMGS.img7}
                badge="Foco total"
                label="Aplicação real, resultados reais"
                subLabel="O método vai direto ao ponto"
                aspect="portrait"
              />
              <div className="p-4 rounded-2xl border" style={{ background: "rgba(124,58,237,0.06)", borderColor: "rgba(124,58,237,0.2)" }}>
                <Play className="w-5 h-5 mb-2" style={{ color: G.accentLight }} />
                <p className="font-black text-white text-sm mb-1">9 aulas práticas · 4 módulos estratégicos</p>
                <p className="text-xs leading-relaxed" style={{ color: G.mutedLight }}>
                  Cada aula leva diretamente à próxima. Você sempre sabe o que fazer, sem se perder ou ficar preso em teoria.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <CTAButton onClick={go} size="md">
              <BookOpen className="w-5 h-5" />
              VER TUDO QUE ESTÁ INCLUÍDO
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
          </div>
        </div>
      </section>

      <Divider a={G.primary} b={G.accent} />

      {/* ════════════════════════════════════════
          SEÇÃO 6 · MÓDULOS
          Objetivo: CLAREZA — estrutura que gera confiança
      ════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>ESTRUTURA DO CURSO</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">4 Módulos. Do Zero ao Resultado.</h2>
            <p className="mt-3 text-sm" style={{ color: G.muted }}>9 aulas práticas, sem enrolação — cada uma com uma ação clara para você executar</p>
          </div>
          <div className="space-y-3">
            {[
              {
                n: "01", title: "Fundamentos: Entenda a IA do Jeito Certo", lessons: "2 aulas",
                tags: ["Como o ChatGPT funciona", "Primeiros prompts", "Setup completo"],
                desc: "Você entende como a IA pensa e como usar isso a seu favor — sem termos técnicos, sem enrolação.",
                c: G.accentLight
              },
              {
                n: "02", title: "Criando Sua Ideia de Produto Digital", lessons: "3 aulas",
                tags: ["Ideias com IA", "Validação rápida", "Estrutura da oferta"],
                desc: "Use IA para identificar o que o mercado quer, gerar sua ideia e estruturar sua primeira oferta.",
                c: G.primary
              },
              {
                n: "03", title: "Sua Página de Venda Pronta com IA", lessons: "2 aulas",
                tags: ["Texto persuasivo com IA", "Página de venda", "Ferramentas gratuitas"],
                desc: "Crie uma página de venda que converte, com textos gerados pela IA — sem precisar de programação.",
                c: G.gold
              },
              {
                n: "04", title: "A Primeira Venda: Estratégia Simples", lessons: "2 aulas",
                tags: ["Divulgação inicial", "Primeiros clientes", "Próximos passos"],
                desc: "Como divulgar de forma simples, buscar sua primeira venda e saber o que fazer depois.",
                c: G.accentLight
              },
            ].map((m, i) => (
              <div key={i} className="rounded-xl p-5 sm:p-6 border flex flex-col sm:flex-row items-start gap-4 sm:gap-6 hover:border-purple-900 transition-all duration-300"
                style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0"
                  style={{ background: `${m.c}15`, color: m.c }}>{m.n}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-black text-white text-base sm:text-lg">{m.title}</h3>
                    <span className="text-xs font-bold flex-shrink-0 px-3 py-0.5 rounded-full"
                      style={{ background: `${m.c}15`, color: m.c }}>{m.lessons}</span>
                  </div>
                  <p className="text-sm mb-3 leading-relaxed" style={{ color: G.mutedLight }}>{m.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((tag, j) => (
                      <div key={j} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border"
                        style={{ background: G.bg, borderColor: "#1a1a2e", color: "#666" }}>
                        <ChevronRight className="w-3 h-3 flex-shrink-0" style={{ color: m.c }} />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider a={G.gold} b={G.primary} />

      {/* ════════════════════════════════════════
          SEÇÃO 7 · BÔNUS
          Objetivo: VALOR PERCEBIDO — "estou levando muito mais"
      ════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bg }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.gold }}>INCLUSOS NO SEU ACESSO · SEM CUSTO EXTRA</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
              5 Bônus Que <span style={{ color: G.primary }}>Aceleram Seus Primeiros Resultados</span>
            </h2>
            <p style={{ color: G.muted }}>Você não precisa comprar nada além disso. Tudo está aqui.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { title: "100 Prompts Prontos para Usar Hoje", icon: FileText, desc: "Templates validados para ChatGPT — copie, cole e comece a gerar conteúdo em minutos", val: "R$ 47" },
              { title: "Mapa de Ferramentas de IA", icon: Zap, desc: "Quais IAs usar para cada tipo de tarefa — texto, imagem, vídeo, pesquisa e mais", val: "R$ 37" },
              { title: "Checklist da Primeira Venda", icon: CheckCircle, desc: "Passo a passo visual para não pular nenhuma etapa antes de lançar sua oferta", val: "R$ 47" },
              { title: "Scripts de Conteúdo Sem Aparecer", icon: Video, desc: "Roteiros prontos para criar conteúdo, apresentar ofertas e gerar resultados sem mostrar o rosto", val: "R$ 37" },
              { title: "Templates de Página de Venda", icon: Layers, desc: "Estrutura completa de texto para montar sua página de venda com ajuda da IA", val: "R$ 29" },
            ].map((b, i) => (
              <div key={i} className="rounded-xl p-5 border hover:border-yellow-900 transition-all duration-300"
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
                <h3 className="font-black text-white text-sm mb-1">{b.title}</h3>
                <p className="text-xs mb-3 leading-relaxed" style={{ color: G.muted }}>{b.desc}</p>
                <p className="text-xs line-through" style={{ color: "#2a2a2a" }}>Vendido separado por {b.val}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton onClick={go} size="lg" variant="gold">
              <Gift className="w-6 h-6" />
              QUERO O CURSO + TODOS OS BÔNUS
              <ArrowRight className="w-6 h-6" />
            </CTAButton>
            <p className="text-xs mt-3" style={{ color: G.muted }}>Tudo por R$ 47 · Acesso imediato · Garantia 7 dias</p>
          </div>
        </div>
      </section>

      <Divider a={G.accent} b={G.primary} />

      {/* ════════════════════════════════════════
          SEÇÃO 8 · QUEBRA DE OBJEÇÃO
          Imagem: img3 (mulher cozinha — qualquer idade)
          Objetivo: REMOVER BARREIRAS — "não é pra mim"
      ════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.accentLight }}>FEITO PARA INICIANTES DE VERDADE</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Ainda Está em Dúvida se Funciona Para Você?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* IMAGEM — img3 */}
            <div className="flex flex-col gap-4">
              <PhotoCard
                src={IMGS.img3}
                badge="Qualquer idade"
                label="Se você usa celular, você consegue usar IA"
                subLabel="Sem experiência técnica necessária"
                aspect="portrait"
              />
              <div className="p-4 rounded-2xl border" style={{ background: "rgba(0,200,83,0.06)", borderColor: "rgba(0,200,83,0.2)" }}>
                <Quote className="w-5 h-5 mb-2 opacity-40" style={{ color: G.primary }} />
                <p className="font-black text-white text-sm mb-1">
                  "Se você sabe usar o celular, você já tem o que precisa para começar."
                </p>
                <p className="text-xs" style={{ color: G.mutedLight }}>Júlia — Criadora do IA que Dá Dinheiro</p>
              </div>
            </div>

            {/* Cards de objeção/resposta */}
            <div className="grid gap-4">
              {[
                {
                  objecao: '"Não sei nada de tecnologia"',
                  resposta: "O curso parte do absoluto zero. Você aprende o que é IA, como usar o ChatGPT e os próximos passos — sem precisar saber programar ou ter qualquer base técnica.",
                  c: G.primary, icon: Brain
                },
                {
                  objecao: '"Não tenho tempo para aprender"',
                  resposta: "São apenas 9 aulas práticas e diretas. Você consegue assistir nos intervalos do dia, à noite ou no fim de semana. Não exige horas seguidas de estudo.",
                  c: G.accentLight, icon: Clock
                },
                {
                  objecao: '"Não quero aparecer na internet"',
                  resposta: "O método mostra formas de trabalhar 100% sem mostrar o rosto, sem gravar vídeos pessoais e sem depender de redes sociais para gerar resultado.",
                  c: G.gold, icon: Shield
                },
                {
                  objecao: '"Já tentei cursos e não deu certo"',
                  resposta: "Diferente de cursos genéricos, este foca em ação imediata: cada aula termina com uma tarefa prática. E se não funcionar, você tem 7 dias de garantia total.",
                  c: G.primary, icon: Award
                },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl border" style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${item.c}18` }}>
                      <item.icon style={{ color: item.c, width: 16, height: 16 }} />
                    </div>
                    <div>
                      <p className="font-black text-white text-sm mb-1">{item.objecao}</p>
                      <p className="text-xs leading-relaxed" style={{ color: G.mutedLight }}>{item.resposta}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider a={G.primary} b={G.gold} />

      {/* ════════════════════════════════════════
          SEÇÃO 9 · DEPOIMENTOS
          Imagem: img4 (mãe com bebê)
          Objetivo: PROVA SOCIAL EMOCIONAL
      ════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bg }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>QUEM JÁ ESTÁ DENTRO</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Eles Estavam Exatamente Onde Você Está Agora
            </h2>
            <p className="mt-3 text-sm sm:text-base max-w-2xl mx-auto" style={{ color: G.mutedLight }}>
              Sem experiência anterior. Sem grande tempo disponível. Com dúvidas. E decidiram começar.
            </p>
          </div>

          {/* Depoimentos em cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                text: "Nunca imaginei que conseguiria criar um produto digital. Em poucas semanas aprendi a usar o ChatGPT de um jeito que faz sentido. O passo a passo é muito claro e não me senti perdida em nenhum momento.",
                name: "Ana Paula S.", city: "São Paulo, SP",
                before: "Não sabia nada de IA", after: "Criou o primeiro produto digital",
                initials: "AP", color: G.accent
              },
              {
                text: "Sempre tive receio de tecnologia. Esse treinamento me mostrou que dá pra usar IA mesmo sem saber nada. Consegui estruturar minha primeira oferta e montar uma página de venda em menos de uma semana.",
                name: "Carlos S.", city: "Belo Horizonte, MG",
                before: "Medo de tecnologia", after: "Página de vendas no ar em 7 dias",
                initials: "CS", color: G.primary
              },
              {
                text: "Estava perdida vendo vídeos aleatórios no YouTube. Aqui tem um caminho definido. Cada aula leva à próxima de forma natural. Recomendo para todo mundo que está começando e não sabe por onde ir.",
                name: "Mariana C.", city: "Curitiba, PR",
                before: "Perdida sem direção", after: "Saiu do zero com um plano claro",
                initials: "MC", color: G.gold
              },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border flex flex-col"
                style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                <div className="flex items-center gap-3 p-4 border-b" style={{ borderColor: G.bgCardBorder }}>
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 text-white"
                    style={{ background: t.color }}>{t.initials}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-white text-sm">{t.name}</p>
                    <p className="text-[11px]" style={{ color: G.muted }}>{t.city}</p>
                  </div>
                  <div className="flex gap-0.5 flex-shrink-0">
                    {Array(5).fill(0).map((_, j) => <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
                <div className="p-5 flex-1">
                  <Quote className="w-5 h-5 mb-3 opacity-25" style={{ color: t.color }} />
                  <p className="text-sm leading-relaxed italic mb-4" style={{ color: "#bbb" }}>&quot;{t.text}&quot;</p>
                  <div className="pt-3 border-t space-y-1.5" style={{ borderColor: G.bgCardBorder }}>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-full" style={{ background: "rgba(255,100,100,0.1)", color: "#f87171" }}>ANTES</span>
                      <span className="text-xs" style={{ color: "#777" }}>{t.before}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-full" style={{ background: `${t.color}20`, color: t.color }}>DEPOIS</span>
                      <span className="text-xs font-bold" style={{ color: t.color }}>{t.after}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* IMAGEM — img4 + stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 items-center">
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: G.bgCardBorder }}>
              <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                <img src={IMGS.img4} alt="Mãe que começou com IA mesmo cuidando da família"
                  className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-4" style={{ background: G.bgCard }}>
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-3.5 h-3.5" style={{ color: G.gold }} />
                  <span className="text-xs font-black uppercase tracking-wide" style={{ color: G.gold }}>No seu ritmo</span>
                </div>
                <p className="font-black text-white text-sm mb-1">Conseguiu começar mesmo cuidando da família</p>
                <p className="text-xs leading-relaxed" style={{ color: G.mutedLight }}>
                  Sem precisar sair de casa, sem abrir mão dos filhos, sem comprometer a rotina.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "3.800+", l: "Alunos matriculados" },
                { n: "97%", l: "Taxa de satisfação" },
                { n: "Vitalício", l: "Acesso ao conteúdo" },
                { n: "7 dias", l: "Garantia sem risco" },
              ].map((s, i) => (
                <div key={i} className="text-center py-6 rounded-2xl border" style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                  <p className="font-black text-2xl sm:text-3xl" style={{ color: G.primary }}>{s.n}</p>
                  <p className="text-xs mt-1" style={{ color: G.muted }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <CTAButton onClick={go} size="lg">
              <Sparkles className="w-6 h-6" />
              QUERO FAZER PARTE DISSO
              <ArrowRight className="w-6 h-6" />
            </CTAButton>
            <p className="text-xs mt-3" style={{ color: G.muted }}>Garantia 7 dias · Acesso imediato · Pagamento seguro</p>
          </div>
        </div>
      </section>

      <Divider a={G.accent} b={G.gold} />

      {/* ════════════════════════════════════════
          SEÇÃO 10 · PROVA SOCIAL VISUAL
          Imagem: img2 (homem notebook — resultado)
          Objetivo: CREDIBILIDADE — "vi resultado real"
      ════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>RESULTADOS REAIS</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Pessoas Comuns. Ferramentas Simples. Resultados Possíveis.
            </h2>
            <p className="mt-3 text-sm sm:text-base max-w-2xl mx-auto" style={{ color: G.mutedLight }}>
              Sem fórmula mágica. Sem promessa vazia. Com método, consistência e as ferramentas certas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* IMAGEM — img2 */}
            <div>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: G.bgCardBorder }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img src={IMGS.img2} alt="Pessoa mostrando resultados com IA"
                    className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4" style={{ background: G.bgCard }}>
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4" style={{ color: G.primary }} />
                    <span className="text-xs font-black uppercase tracking-wide" style={{ color: G.primary }}>Resultado real · Setup simples</span>
                  </div>
                  <p className="font-black text-white text-sm mb-1">Pessoas comuns já estão criando renda online</p>
                  <p className="text-xs leading-relaxed" style={{ color: G.mutedLight }}>
                    Não é necessário ter um computador caro, estúdio ou experiência. O método funciona com o que você já tem.
                  </p>
                </div>
              </div>
            </div>

            {/* Texto de reforço de valor */}
            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Com o Método Certo,{" "}
                <span style={{ color: G.primary }}>Qualquer Pessoa Consegue Começar</span>
              </h3>
              <p className="text-base leading-relaxed" style={{ color: G.mutedLight }}>
                Não é sobre ter talento, dinheiro ou tempo sobrando. É sobre ter um caminho claro — e as ferramentas certas na mão.
              </p>

              <div className="space-y-3">
                {[
                  { label: "Ferramentas gratuitas disponíveis hoje", icon: Zap, c: G.primary },
                  { label: "Sem precisar aparecer ou ter seguidores", icon: Shield, c: G.accentLight },
                  { label: "Acesso vitalício com atualizações grátis", icon: Layers, c: G.gold },
                  { label: "Suporte pelo WhatsApp para tirar dúvidas", icon: MessageCircle, c: G.primary },
                  { label: "Garantia completa de 7 dias — sem risco", icon: CheckCircle, c: G.gold },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl border"
                    style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.c}18` }}>
                      <item.icon style={{ color: item.c, width: 16, height: 16 }} />
                    </div>
                    <p className="text-sm font-bold" style={{ color: "#ccc" }}>{item.label}</p>
                  </div>
                ))}
              </div>

              <CTAButton onClick={go} size="md" full>
                <Lock className="w-5 h-5" />
                QUERO ACESSAR O TREINAMENTO
                <ArrowRight className="w-5 h-5" />
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          SEÇÃO 11 · GARANTIA
          Objetivo: ELIMINAR O RISCO — comprar com segurança
      ════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bg }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-8 sm:p-12 border-2 text-center"
            style={{ background: G.bgCard, borderColor: "rgba(0,200,83,0.25)", boxShadow: "0 0 60px rgba(0,200,83,0.05)" }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(0,200,83,0.08)", border: "2px solid rgba(0,200,83,0.25)" }}>
              <Shield className="w-10 h-10" style={{ color: G.primary }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">Garantia de 7 Dias</h2>
            <p className="font-black text-lg sm:text-xl mb-5" style={{ color: G.primary }}>O risco é todo nosso. Nada de risco para você.</p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#aaa" }}>
              Você tem 7 dias para acessar todo o conteúdo, assistir todas as aulas e decidir com calma se faz sentido para você.{" "}
              <strong className="text-white">Se não gostar, basta enviar uma mensagem. Devolvemos 100% do valor sem perguntas, sem burocracia e sem precisar justificar nada.</strong>
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {[
                { t: "100% do valor", d: "Devolução integral garantida" },
                { t: "Até 7 dias", d: "Sem precisar justificar" },
                { t: "Sem burocracia", d: "Processo simples e rápido" },
              ].map((x, i) => (
                <div key={i} className="py-4 px-3 rounded-xl border" style={{ background: "rgba(0,200,83,0.04)", borderColor: "rgba(0,200,83,0.15)" }}>
                  <p className="font-black text-sm text-white mb-0.5">{x.t}</p>
                  <p className="text-xs" style={{ color: G.muted }}>{x.d}</p>
                </div>
              ))}
            </div>
            <CTAButton onClick={go} full size="lg">
              <Shield className="w-6 h-6" />
              COMEÇAR SEM RISCO — R$ 47
              <ArrowRight className="w-6 h-6" />
            </CTAButton>
          </div>
        </div>
      </section>

      <Divider a={G.accent} b={G.primary} />

      {/* ════════════════════════════════════════
          SEÇÃO 12 · OFERTA / PREÇO
          Objetivo: DECISÃO — ancoragem e valor percebido
      ════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.gold }}>ACESSO COMPLETO · INVESTIMENTO ÚNICO</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Tudo Isso Por Apenas</h2>
          </div>

          <div className="relative rounded-2xl p-8 border-2"
            style={{ background: "linear-gradient(145deg, #0d0d1a, #06060f)", borderColor: "rgba(124,58,237,0.4)", boxShadow: "0 0 60px rgba(124,58,237,0.1)" }}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full font-black text-xs whitespace-nowrap"
              style={{ background: "linear-gradient(90deg, #7C3AED, #A78BFA)", color: "#fff" }}>
              TREINAMENTO COMPLETO + 5 BÔNUS INCLUSOS
            </div>

            <div className="text-center mb-6 pt-2">
              <p className="text-sm line-through mb-1" style={{ color: "#333" }}>De R$ 297,00</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl font-black" style={{ color: G.primary }}>R$</span>
                <span className="font-black leading-none" style={{ fontSize: "5.5rem", color: G.primary, lineHeight: 1 }}>47</span>
              </div>
              <p className="text-sm mt-2" style={{ color: "#555" }}>ou 12x de R$ 4,70 · PIX com desconto especial</p>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "4 módulos + 9 aulas práticas e diretas",
                "Acesso vitalício + todas as atualizações grátis",
                "5 bônus exclusivos já inclusos",
                "Suporte via WhatsApp",
                "Certificado de conclusão",
                "Garantia incondicional de 7 dias",
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

            <CTAButton onClick={go} full size="lg">
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

          <div className="mt-5 p-4 rounded-xl border text-center" style={{ background: "rgba(245,158,11,0.05)", borderColor: "rgba(245,158,11,0.2)" }}>
            <p className="text-xs font-bold mb-1" style={{ color: G.gold }}>Esta oferta expira em:</p>
            <p className="font-black text-xl tabular-nums" style={{ color: G.gold }}>
              {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
            </p>
            <p className="text-xs mt-1" style={{ color: "#444" }}>Após o timer: preço retorna ao normal</p>
          </div>
        </div>
      </section>

      <Divider a={G.primary} b={G.accent} />

      {/* ════════════════════════════════════════
          SEÇÃO 13 · FAQ
          Objetivo: TIRAR AS ÚLTIMAS DÚVIDAS
      ════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bg }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>PERGUNTAS FREQUENTES</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Ainda Tem Alguma Dúvida?</h2>
            <p className="mt-3 text-sm" style={{ color: G.muted }}>Respondemos as dúvidas mais comuns abaixo. Se não encontrar a sua, fale com o suporte.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="rounded-xl border overflow-hidden transition-all duration-300"
                style={{ background: G.bgCard, borderColor: openFaq === i ? "rgba(124,58,237,0.4)" : G.bgCardBorder }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  style={{ color: openFaq === i ? G.accentLight : "#ddd" }}>
                  <span className="font-bold text-sm sm:text-base">{item.q}</span>
                  <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", color: openFaq === i ? G.accentLight : G.muted }} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <div className="pt-3 border-t text-sm sm:text-base leading-relaxed"
                      style={{ borderColor: G.bgCardBorder, color: "#999" }}>{item.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm mb-4" style={{ color: G.muted }}>Não encontrou o que precisava? Fale direto com o suporte.</p>
            <button onClick={openChat}
              className="inline-flex items-center gap-2 font-black text-sm px-6 py-3 rounded-xl hover:scale-[1.02] transition-all"
              style={{ background: "#25D366", color: "#fff", boxShadow: "0 0 20px rgba(37,211,102,0.3)" }}>
              <MessageCircle className="w-4 h-4" />
              FALAR COM O SUPORTE
            </button>
          </div>
        </div>
      </section>

      <Divider a={G.gold} b={G.primary} />

      {/* ════════════════════════════════════════
          SEÇÃO 14 · CTA FINAL EMOCIONAL
          Imagem: img5 (rapaz quarto — "igual a você")
          Objetivo: AÇÃO FINAL — última chance de converter
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: G.bgDark }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold mb-10" style={{ color: "#555" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: G.primary }} />
            <span><strong style={{ color: G.primary }}>{onlineCount} pessoas</strong> estão visualizando esta oferta agora</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
            {/* IMAGEM — img5 */}
            <div className="flex flex-col gap-4">
              <PhotoCard
                src={IMGS.img5}
                badge="Começando do zero"
                label="Um notebook simples. Um método claro. Um resultado possível."
                subLabel="Exatamente como você pode começar hoje"
                aspect="portrait"
              />
            </div>

            {/* Texto final emocional */}
            <div className="text-center lg:text-left space-y-5">
              <h2 className="font-black leading-tight text-white" style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)" }}>
                Quem Aprender IA Agora{" "}
                <span style={{ color: G.primary }}>Estará Anos à Frente</span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#777" }}>
                A janela está aberta. O mercado ainda está aprendendo a usar IA do jeito certo. Quem aprende agora tem a vantagem de estar na frente — sem precisar de formação, sem precisar de muito dinheiro, sem precisar de tempo sobrando.
              </p>

              <p className="text-base leading-relaxed" style={{ color: "#777" }}>
                Por <strong className="text-white">R$ 47</strong> — menos que um jantar — você tem acesso a um método completo, 5 bônus e <strong className="text-white">7 dias de garantia total</strong>. Se não gostar, devolvemos tudo.
              </p>

              {/* Box resumo */}
              <div className="p-5 rounded-2xl border text-left" style={{ background: "rgba(124,58,237,0.06)", borderColor: "rgba(124,58,237,0.2)" }}>
                <p className="font-black text-white text-sm mb-3">Você leva tudo isso por R$ 47:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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

              <CTAButton onClick={go} size="lg" full>
                <Rocket className="w-6 h-6" />
                COMEÇAR COM IA HOJE — R$ 47
                <ArrowRight className="w-6 h-6" />
              </CTAButton>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
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
            </div>
          </div>

          {/* Timer + suporte */}
          <div className="p-5 rounded-xl border text-center max-w-md mx-auto mb-6"
            style={{ background: "rgba(245,158,11,0.05)", borderColor: "rgba(245,158,11,0.2)" }}>
            <p className="text-xs font-bold mb-1" style={{ color: G.gold }}>Oferta especial encerra em:</p>
            <p className="font-black text-3xl tabular-nums" style={{ color: G.gold }}>
              {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
            </p>
            <p className="text-xs mt-1" style={{ color: "#444" }}>Após o timer, o preço retorna ao normal</p>
          </div>

          <p className="text-sm text-center" style={{ color: "#444" }}>
            Ficou com alguma dúvida?{" "}
            <button onClick={openChat} className="font-bold underline hover:text-green-400 transition-colors" style={{ color: "#25D366" }}>
              Fale com o suporte no WhatsApp
            </button>
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-4 text-center border-t" style={{ background: "#020209", borderColor: "#0d0d1a" }}>
        <p className="text-sm font-bold mb-3" style={{ color: "#222" }}>© 2025 IA que Dá Dinheiro · Todos os direitos reservados</p>
        <p className="text-xs max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: "#1a1a2e" }}>
          Este produto não garante a obtenção de resultados. Os resultados variam de acordo com o esforço, dedicação e contexto de cada pessoa. Qualquer referência a resultados específicos é meramente ilustrativa e não representa uma garantia de rendimento financeiro.
        </p>
        <button onClick={openChat} className="text-sm font-bold hover:text-green-400 transition-colors" style={{ color: "#1a1a2e" }}>
          Suporte WhatsApp
        </button>
      </footer>

      <div className="h-20 md:hidden" />
    </div>
  );
}
